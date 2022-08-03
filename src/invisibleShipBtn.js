// just for the memes
// Am i a terrible programmer or what
function invisibleShip() {
  const invisibleShipBtn = document.querySelector('[data-invisible-ship-button]');
  const ships = document.querySelectorAll('[data-ship]');

  invisibleShipBtn.addEventListener('click', () => {
    ships.forEach((ship) => {
      ship.classList.remove('hold');
      ship.classList.remove('invisible');
    });
  });
}

module.exports = invisibleShip;
