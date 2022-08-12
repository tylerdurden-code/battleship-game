const generateRandomInteger = require('./randomNum');
const checkNegativity = require('./checkIfNumIsNegative');

function checkValidPostions(x, y, direction, length) {
  console.log(length);
  if (direction === 'right') {
    if ((x > 10)) {
      return false;
    }
    if ((y + length) > 10) {
      return false;
    }
    return true;
  }
}

function isPositionOccupied(x, y, length, gameboard, direction) {
  let num;
  // x = parseInt(x);
  // y = parseInt(y);
  const positions = [];
  if (direction === 'right') {
    for (let i = 0; i < length; i += 1) {
      positions.push([x, y + i]);
    }
  }
  if (direction === 'down') {
    for (let i = 0; i < length; i += 1) {
      positions.push([x + i, y]);
    }
  }
  positions.forEach((position) => {
    const u = position[0];
    const o = position[1];
    if (gameboard[u][o] != null) {
      num = 1;
    }
  });

  if ((num === 1)) {
    return true;
  }

  return false;
}

function gameboardPosition(length, gameboard, direction, shipName) {
//   let x = prompt();
//   let y = prompt();
//   let checker = true;
//   while (checker) {
//     if (parseInt(y) + (length) > 10) {
//       console.log('choose again');
//       x = prompt();
//       y = prompt();
//     } else {
//       checker = false;
//     }
//   }
//   const secondChecker = false;
//   while (secondChecker) {
//     x = prompt();
//     y = prompt();
//     let inner = false;
//     for (let i = 0; i < length; i += 1) {
//       if (direction === 'right') {
//         console.log(gameboard[x][y + i]);
//         if (gameboard[parseInt(x)][parseInt(y) + i] != null) {
//           inner = true;
//           return;
//         }
//       }
//     }
//     for (let z = 0; z < length; z += 1) {
//       if (!inner) {
//         gameboard[parseInt(x)][parseInt(y) + z] = shipName;
//         secondChecker = false;
//       }
//     }
//   }
  // let x = prompt();
  // let y = prompt();

  // let x = generateRandomInteger(9);
  // let y = generateRandomInteger(9) - length - 1;
  // let checker = true;
  // let secondChecker = true;
  // while (secondChecker) {
  //   if (checkNegativity(y)) {
  //     x = generateRandomInteger(9);
  //     y = generateRandomInteger(9) - length - 1;
  //   } else {
  //     secondChecker = false;
  //   }
  // }
  // while (checker) {
  //   let thirdChecker = true;
  //   if (isPositionOccupied(x, y, length, gameboard, 'right')) {
  //     console.log('occupied');
  //     // x = prompt();
  //     // y = prompt();
  //     while (thirdChecker) {
  //       if (checkNegativity(y)) {
  //         x = generateRandomInteger(9);
  //         y = generateRandomInteger(9) - length - 1;
  //       } else {
  //         thirdChecker = false;
  //       }
  //     }
  //   } else {
  //     console.log('NOT OCCUPIED');
  //     //   console.log(gameboard);
  //     for (let z = 0; z < length; z += 1) {
  //       gameboard[parseInt(x)][parseInt(y) + z] = shipName;
  //     }
  //     checker = false;
  //   }
  // }
  let x;
  let y;
  let occupied = true;
  if (direction === 'right') {
    switch (length) {
      case 5:
        x = generateRandomInteger(9);
        y = generateRandomInteger(5);
        break;
      case 4:
        x = generateRandomInteger(9);
        y = generateRandomInteger(6);
        break;
      case 3:
        x = generateRandomInteger(9);
        y = generateRandomInteger(7);
        break;
      case 2:
        x = generateRandomInteger(9);
        y = generateRandomInteger(8);
        break;
      default:
        console.log('default');
    }
    while (occupied) {
      if (isPositionOccupied(x, y, length, gameboard, direction)) {
        console.log('picked again');
        switch (length) {
          case 5:
            x = generateRandomInteger(9);
            y = generateRandomInteger(5);
            break;
          case 4:
            x = generateRandomInteger(9);
            y = generateRandomInteger(6);
            break;
          case 3:
            x = generateRandomInteger(9);
            y = generateRandomInteger(7);
            break;
          case 2:
            x = generateRandomInteger(9);
            y = generateRandomInteger(8);
            break;
          default:
            console.log('default');
        }
      } else {
        for (let i = 0; i < length; i += 1) {
          gameboard[parseInt(x)][parseInt(y) + i] = shipName;
        }
        occupied = false;
      }
    }
  }
  if (direction === 'down') {
    switch (length) {
      case 5:
        x = generateRandomInteger(5);
        y = generateRandomInteger(9);
        break;
      case 4:
        x = generateRandomInteger(6);
        y = generateRandomInteger(9);
        break;
      case 3:
        x = generateRandomInteger(7);
        y = generateRandomInteger(9);
        break;
      case 2:
        x = generateRandomInteger(8);
        y = generateRandomInteger(9);
        break;
      default:
        console.log('default');
    }
    while (occupied) {
      if (isPositionOccupied(x, y, length, gameboard, direction)) {
        switch (length) {
          case 5:
            x = generateRandomInteger(5);
            y = generateRandomInteger(9);
            break;
          case 4:
            x = generateRandomInteger(6);
            y = generateRandomInteger(9);
            break;
          case 3:
            x = generateRandomInteger(7);
            y = generateRandomInteger(9);
            break;
          case 2:
            x = generateRandomInteger(8);
            y = generateRandomInteger(9);
            break;
          default:
            console.log('default');
        }
      } else {
        for (let i = 0; i < length; i += 1) {
          gameboard[parseInt(x) + i][parseInt(y)] = shipName;
        }
        occupied = false;
      }
    }
  }
}

function positionShips(shipsArray, gameboard) {
//   const ship1 = shipsArray[1];
//   gameboardPosition(ship1.length, gameboard, 'right', ship1.name);
//   const ship2 = shipsArray[0];
//   gameboardPosition(ship2.length, gameboard, 'right', ship2.name);
  shipsArray.forEach((ship) => {
    console.log(`'you need to position ${ship.name}`);
    gameboardPosition(ship.length, gameboard, 'right', ship.name);
  });
}

module.exports = positionShips;
