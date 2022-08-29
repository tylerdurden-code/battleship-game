const { isPositionOccupied } = require('./positionShips');

function positionShipUpgraded(x, y, length, gameboard, direction, shipName) {
  x = parseInt(x);
  y = parseInt(y);
  length = parseInt(length);

  if (direction === 'right') {
    switch (length) {
      case 5:
        // x = generateRandomInteger(9);
        // y = generateRandomInteger(5);
        if (x > 9 || y > 5) {
          return true;
        }
        break;
      case 4:
        // x = generateRandomInteger(9);
        // y = generateRandomInteger(6);
        if (x > 9 || y > 6) {
          return true;
        }
        break;
      case 3:
        // x = generateRandomInteger(9);
        // y = generateRandomInteger(7);
        if (x > 9 || y > 7) {
          return true;
        }
        break;
      case 2:
        // x = generateRandomInteger(9);
        // y = generateRandomInteger(8);
        if (x > 9 || y > 8) {
          return true;
        }
        break;
      default:
        console.log('default');
    }
  }
  if (direction === 'down') {
    switch (length) {
      case 5:
        // x = generateRandomInteger(5);
        // y = generateRandomInteger(9);
        if (x > 5 || y > 9) {
          return true;
        }
        break;
      case 4:
        // x = generateRandomInteger(6);
        // y = generateRandomInteger(9);
        if (x > 6 || y > 9) {
          return true;
        }
        break;
      case 3:
        // x = generateRandomInteger(7);
        // y = generateRandomInteger(9);
        if (x > 7 || y > 9) {
          return true;
        }
        break;
      case 2:
        // x = generateRandomInteger(8);
        // y = generateRandomInteger(9);
        if (x > 8 || y > 9) {
          return true;
        }
        break;
      default:
        console.log('default');
    }
  }
  if (isPositionOccupied(x, y, length, gameboard, direction)) {
    return true;
  }
  if (direction === 'right') {
    for (let i = 0; i < length; i += 1) {
      gameboard[x][y + i] = shipName;
      gameboard[x + 1][y + i] = 'occupied';
      gameboard[x - 1][y + i] = 'occupied';
    }
    gameboard[x][y - 1] = 'occupied';
    gameboard[x][y + length] = 'occupied';
    gameboard[x + 1][y - 1] = 'occupied';
    gameboard[x - 1][y - 1] = 'occupied';
    gameboard[x + 1][y + length] = 'occupied';
    gameboard[x - 1][y + length] = 'occupied';
  }
  if (direction === 'down') {
    for (let i = 0; i < length; i += 1) {
      gameboard[x + i][y] = shipName;
      gameboard[x + i][y - 1] = 'occupied';
      gameboard[x + i][y + 1] = 'occupied';
    }
    gameboard[x - 1][y] = 'occupied';
    gameboard[x + length][y] = 'occupied';
    gameboard[x - 1][y - 1] = 'occupied';
    gameboard[x - 1][y + 1] = 'occupied';
    gameboard[x + length][y - 1] = 'occupied';
    gameboard[x + length][y + 1] = 'occupied';
  }
  console.log(gameboard);
  return false;
}
module.exports = positionShipUpgraded;
