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
  };
}

const ship1 = createShip(5);
ship1.initiatePosition();
console.log(ship1.positions);
console.log(ship1.positions.pos0);
