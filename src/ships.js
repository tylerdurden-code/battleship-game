function createShip(length, name) {
  return {
    name,
    length,
    isItSunk: false,
    hit() {
      this.length -= 1;
    },
    isSunk() {
      if (this.length === 0) {
        console.log(`${this.name} is sunk`);
        console.log(`${this.isItSunk}`);
        this.isItSunk = true;
      }
    },
  };
}

module.exports = createShip;
