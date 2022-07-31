const shipContainer = document.querySelector('.ships');

function applyDragEFX() {
  console.log(shipContainer.children);
  Array.from(shipContainer.children, (element) => element.classList.add('smartman'));
}

module.exports = applyDragEFX;
