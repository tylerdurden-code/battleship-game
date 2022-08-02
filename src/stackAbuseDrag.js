const { checkTableau } = require('./gameboardObject');

function stackAbuseDrag(gameboard) {
  const ships = document.querySelectorAll('[data-ship]');
  const boxes = document.querySelectorAll('.box');

  let dragItem = null;

  function dragStart() {
    dragItem = this;
    this.className += ' hold';
    setTimeout(() => {
      this.className += ' invisible';
    }, 0);
  }
  function dragEnd() {
    this.classList.remove('hold');
    this.classList.remove('invisible');
    this.className = 'patrolShip';
    checkTableau(gameboard);
    dragItem = null;
  }
  function dragOver(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragLeave() {
    this.classList.remove('hovered');
  }
  function dragDrop() {
    dragItem.style.position = 'absolute';
    this.classList.remove('invisible');
    this.classList.remove('hovered');
    if (dragItem.dataset.rotated === '0dg') {
      if (this.classList.contains('col8') || this.classList.contains('col9') || this.classList.contains('col10')) {
        return;
      }
    }
    if (dragItem.dataset.rotated === '90dg') {
      if (this.classList.contains('row8') || this.classList.contains('row9') || this.classList.contains('row10')) {
        return;
      }
    }

    console.log(this);
    this.append(dragItem);
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
