function createShip(length, name) {
  return {
    name,
    length,
    hit() {
      this.length -= 1;
    },
    isSunk() {
      if (length === 0) {
        console.log('ship is sunk');
      }
    },
  };
}

module.exports = createShip;
