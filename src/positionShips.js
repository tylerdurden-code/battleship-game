const generateRandomInteger = require('./randomNum');

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
  let zeroChecker = true;
  const x = generateRandomInteger(9);
  let y = generateRandomInteger(9) - length - 1;
  let checker = true;
  while (zeroChecker) {
    if (y < 0) {
      console.log('continue');
      y = generateRandomInteger(9) - length - 1;
    } else {
      zeroChecker = false;
    }
  }
  while (checker) {
    let secondChecker = true;
    if (isPositionOccupied(x, y, length, gameboard, 'right')) {
      console.log('occupied');
      // x = prompt();
      // y = prompt();
      while (secondChecker) {
        if (y < 0) {
          console.log('continue');
          y = generateRandomInteger(9) - length - 1;
        } else {
          secondChecker = false;
        }
      }
    } else {
      console.log('NOT OCCUPIED');
      //   console.log(gameboard);
      for (let z = 0; z < length; z += 1) {
        gameboard[parseInt(x)][parseInt(y) + z] = shipName;
      }
      checker = false;
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
