function createShip(length) {
  return {
    shipLength: length,
    positions: {

    },
    initiatePosition() {
      for (let i = 0; i < this.shipLength; i += 1) {
        this.positions[`pos${i}`] = {
          name: '',
          beingHit: false,
        };
      }
    },
    createShipDiv() {
      const shipContainer = document.querySelector('.ships');

      const shipDiv = document.createElement('div');
      shipDiv.classList.add('newPatrolShip');
      shipDiv.draggable = 'true';
      shipDiv.dataset.rotated = '0dg';

      const rotateBtn = document.createElement('button');
      rotateBtn.classList.add('rotate');
      rotateBtn.dataset.rotate = '';
      rotateBtn.textContent = 'R';
      shipDiv.appendChild(rotateBtn);

      shipContainer.appendChild(shipDiv);
    },
    initializeShip() {
      this.initiatePosition();
      this.createShipDiv();
    },
  };
}
module.exports = createShip;
// const ship1 = createShip(5);
// ship1.initiatePosition();
// ship1.createShipDiv();
// console.log(ship1.positions);
// console.log(ship1.positions.pos0);
