const { checkTableau } = require('./gameboardObject');
const markUnavailablePostion = require('./markUnavailablePosition');
const makeAList1 = require('./makeAListOfUnavailable');
const removeAllChildNodes = require('./usefullFuncs');
const invisibleShip = require('./invisibleShipBtn');

function stackAbuseDrag(gameboard) {
  const ships = document.querySelectorAll('[data-ship]');
  const boxes = document.querySelectorAll('.box');

  let dragItem = null;
  let divList = [];

  function dragStart() {
    dragItem = this;
    this.classList.add('hold');
    setTimeout(() => {
      this.classList.add('invisible');
    }, 0);
  }
  function dragEnd() {
    this.classList.remove('hold');
    this.classList.remove('invisible');
    this.className = dragItem.dataset.originalClass;
    checkTableau(gameboard);
    const variablee = markUnavailablePostion('4', gameboard, '0dg');
    divList = makeAList1(variablee);
    dragItem = null;
  }
  function dragOver(e) {
    if (this.parentNode.classList.contains('inactive')) {
      return;
    }
    e.preventDefault();
    this.classList.add('hovered');
  }
  function dragEnter(e) {
    if (this.parentNode.classList.contains('inactive')) {
      return;
    }
    e.preventDefault();
    this.classList.remove('hold');
    this.classList.remove('invisible');
  }
  function dragLeave() {
    if (this.parentNode.classList.contains('inactive')) {
      return;
    }
    this.classList.remove('hovered');
    this.classList.remove('hold');
    this.classList.remove('invisible');
  }
  function dragDrop() {
    // const boxList = makeAList1();
    // if (boxList.includes(this)) {
    //   return;
    // }
    dragItem = removeAllChildNodes(dragItem);
    if (divList.includes(this)) {
      this.classList.remove('hovered');
      return;
    }
    if (this.parentNode.classList.contains('inactive')) {
      return;
    }
    dragItem.style.position = 'absolute';
    this.classList.remove('invisible');
    this.classList.remove('hovered');
    if (dragItem.dataset.rotated === '0dg') {
      console.log(typeof (dragItem.dataset.length));

      if (dragItem.dataset.length === '4') {
        if (this.classList.contains('col8') || this.classList.contains('col9') || this.classList.contains('col10')) {
          return;
        }
      }
      if (dragItem.dataset.length === '5') {
        if (this.classList.contains('col7') || this.classList.contains('col8') || this.classList.contains('col9') || this.classList.contains('col10')) {
          return;
        }
      }
      if (dragItem.dataset.length === '3') {
        if (this.classList.contains('col9') || this.classList.contains('col10')) {
          return;
        }
      }
      if (dragItem.dataset.length === '2') {
        if (this.classList.contains('col10')) {
          return;
        }
      }
    }
    if (dragItem.dataset.rotated === '90dg') {
      if (this.classList.contains('row8') || this.classList.contains('row9') || this.classList.contains('row10')) {
        return;
      }
    }

    this.append(dragItem);
    // console.log(this);
  }
  ships.forEach((ship) => {
    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);
  });
  boxes.forEach((box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
  });
}

module.exports = stackAbuseDrag;
