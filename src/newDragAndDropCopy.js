// drag functions
const ship = document.querySelector('.newPatrolShip');
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => {
    this.classList.add('invisible');
  }, 0);
}
function dragEnd() {
  this.classList.remove('hold');
  this.classList.remove('invisible');
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
  this.classList.remove('hovered');
  console.log('drop');
  console.log(ship.dataset.rotated);
  if (ship.dataset.rotated === '0dg') {
    if (this.classList.contains('col8') || this.classList.contains('col9') || this.classList.contains('col10')) {
      return;
    }
  }
  if (ship.dataset.rotated === '90dg') {
    if (this.classList.contains('row8') || this.classList.contains('row9') || this.classList.contains('row10')) {
      return;
    }
  }
  this.append(ship);
}
function newDragAndDropCopy() {
  const boxes = document.querySelectorAll('.box');
  const shipContainer = document.querySelector('.ships');

  // ship listeners
  ship.addEventListener('dragstart', dragStart);
  ship.addEventListener('dragend', dragEnd);

  // loop boxes
  boxes.forEach((box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
  });
  shipContainer.addEventListener('dragover', dragOver);
  shipContainer.addEventListener('dragenter', dragEnter);
  shipContainer.addEventListener('dragleave', dragLeave);
  shipContainer.addEventListener('drop', dragDrop);
}

module.exports = newDragAndDropCopy;
