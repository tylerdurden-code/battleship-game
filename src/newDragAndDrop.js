// drag functions
const ship = document.querySelector('#patrolShip');

function dragStart() {
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}
function dragEnd() {
  this.className -= 'invisible';
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'box';
}
function dragDrop() {
  console.log('drop');
  this.append(ship);
}
function newDragAndDrop() {
  const boxes = document.querySelectorAll('.box');

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
}

module.exports = newDragAndDrop;
