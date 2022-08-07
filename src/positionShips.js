function gameboardPosition(length, x, y, gameboard, direction, shipName) {
  for (let i = 0; i < length; i += 1) {
    if (direction === 'right') {
      gameboard[x][y + i] = shipName;
    }
  }
}

function positionShips(shipsArray, x, y, gameboard) {
  shipsArray.forEach((ship) => {
    gameboardPosition(ship.length, x, y, gameboard, 'right', ship.name);
  });
}

module.exports = positionShips;
