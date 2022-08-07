function isPositionOccupied(x, y, length, gameboard, direction) {
  let num;
  gameboard[0][0] = 'fd';
  x = parseInt(x);
  y = parseInt(y);
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

  if (num === 1) {
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
  const x = prompt();
  const y = prompt();
  if (isPositionOccupied(x, y, length, gameboard, 'right')) {
    console.log('occupied');
    x = prompt();
    y = prompt();
  } else {
    console.log('NOT OCCUPIED');
    console.log(gameboard);
  }
}

function positionShips(shipsArray, gameboard) {
  const ship1 = shipsArray[1];
  gameboardPosition(ship1.length, gameboard, 'right', ship1.name);
  const ship2 = shipsArray[0];
  gameboardPosition(ship2.length, gameboard, 'right', ship2.name);
}

module.exports = positionShips;
