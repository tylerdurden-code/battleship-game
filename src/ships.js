function createShip(length) {
  return {
    shipLength: length,
    objectName: null,
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
      shipDiv.classList.add('patrolShip');
      shipDiv.dataset.ship = '';
      shipDiv.dataset.length = length;
      shipDiv.dataset.objectName = this.objectName;
      shipDiv.draggable = 'true';
      shipDiv.dataset.rotated = '0dg';

      const rotateBtn = document.createElement('button');
      rotateBtn.classList.add('rotate');
      rotateBtn.dataset.rotate = '';
      rotateBtn.textContent = 'R';
      shipDiv.appendChild(rotateBtn);

      shipContainer.appendChild(shipDiv);
    },
    initializeShip(name) {
      this.setObjectName(name);
      this.initiatePosition();
      this.createShipDiv();
    },
    setObjectName(name) {
      this.objectName = name;
    },
  };
}
module.exports = createShip;
// const ship1 = createShip(5);
// ship1.initiatePosition();
// ship1.createShipDiv();
// console.log(ship1.positions);
// console.log(ship1.positions.pos0);
