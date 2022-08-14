const generateRandomInteger = require('./randomNum');

function isWinner(ships) {
  let variable = true;
  ships.forEach((ship) => {
    if (ship.isItSunk === false) {
      variable = false;
    }
  });
  return variable;
}

function hit(x, y, playerObject, gameboard, ships) {
  // ships.forEach((ship) => {
  //   console.log(ship.name);
  // });
  if (gameboard[x][y] === null) {
    console.log('you missed');
  }
  if (gameboard[x][y] !== null) {
    ships.forEach((ship) => {
      if (ship.name === gameboard[x][y]) {
        ship.hit();
        ship.isSunk();
        console.log(ship);
      }
    });
    gameboard[x][y] = null;
    console.log(playerObject);
    gameboard.forEach((row) => {
      console.log(row);
    });
  }
}

function rounds(playerList, gameboardPlayer1, gameboardPlayer2, shipsP1, shipsP2) {
  let isSomeoneWon = false;
  const beingHitCoordsP2 = [];
  const beingHitCoordsP1 = [];
  // for (let i = 0; i < 100; i += 1) {
  //   console.log(`${playerList[0].name} choose hit coordinates`);
  //   // alert('choose hit coords');
  //   const x = generateRandomInteger(9);
  //   const y = generateRandomInteger(9);
  //   hit(x, y, playerList[1], gameboardPlayer2, shipsP2);
  //   if (isWinner(shipsP2)) {
  //     console.log(`${playerList[0].name} won`);
  //     isSomeoneWon = true;
  //   }
  //   console.log(`${playerList[1].name} choose hit coordinates`);
  //   // alert('choose hit coords');
  //   const z = generateRandomInteger(9);
  //   const u = generateRandomInteger(9);
  //   hit(z, u, playerList[0], gameboardPlayer1, shipsP1);
  //   if (isWinner(shipsP1)) {
  //     console.log(`${playerList[1].name} won`);
  //     isSomeoneWon = true;
  //   }
  // }
  while (!isSomeoneWon) {
    let checker = false;
    let firstChecker = false;
    console.log(`${playerList[0].name} choose hit coordinates`);
    // alert('choose hit coords');
    let x = generateRandomInteger(9);
    let y = generateRandomInteger(9);
    while (!firstChecker) {
      console.log(beingHitCoordsP2.includes(`x=${x} y=${y}`));
      if (beingHitCoordsP2.includes(`x=${x} y=${y}`)) {
        console.log('already being hit choose again');
        x = generateRandomInteger(9);
        y = generateRandomInteger(9);
      } else {
        beingHitCoordsP2.push(`x=${x} y=${y}`);
        console.log(beingHitCoordsP2);
        firstChecker = true;
      }
    }
    hit(x, y, playerList[1], gameboardPlayer2, shipsP2);
    if (isWinner(shipsP2)) {
      console.log(`${playerList[0].name} won`);
      isSomeoneWon = true;
      break;
    }
    console.log(`${playerList[1].name} choose hit coordinates`);
    // alert('choose hit coords');
    let z = generateRandomInteger(9);
    let u = generateRandomInteger(9);
    while (!checker) {
      console.log(beingHitCoordsP1.includes(`z=${z} u=${u}`));
      if (beingHitCoordsP1.includes(`z=${z} u=${u}`)) {
        console.log('already being hit choose again');
        z = generateRandomInteger(9);
        u = generateRandomInteger(9);
      } else {
        beingHitCoordsP1.push(`z=${z} u=${u}`);
        console.log(beingHitCoordsP1);
        checker = true;
      }
    }

    hit(z, u, playerList[0], gameboardPlayer1, shipsP1);
    if (isWinner(shipsP1)) {
      console.log(`${playerList[1].name} won`);
      isSomeoneWon = true;
      break;
    }
  }
}

module.exports = rounds;
