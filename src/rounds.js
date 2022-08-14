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
  const beingHitCoords = [];
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
    console.log(`${playerList[0].name} choose hit coordinates`);
    // alert('choose hit coords');
    const x = generateRandomInteger(9);
    const y = generateRandomInteger(9);
    hit(x, y, playerList[1], gameboardPlayer2, shipsP2);
    if (isWinner(shipsP2)) {
      console.log(`${playerList[0].name} won`);
      isSomeoneWon = true;
    }
    console.log(`${playerList[1].name} choose hit coordinates`);
    // alert('choose hit coords');
    let z = generateRandomInteger(9);
    let u = generateRandomInteger(9);
    while (!checker) {
      console.log(beingHitCoords.includes([z, u]));
      if (beingHitCoords.includes([z, u])) {
        console.log('already being hit choose again');
        z = generateRandomInteger(9);
        u = generateRandomInteger(9);
      } else {
        beingHitCoords.push([z, u]);
        console.log(beingHitCoords);
        checker = true;
      }
    }

    hit(z, u, playerList[0], gameboardPlayer1, shipsP1);
    if (isWinner(shipsP1)) {
      console.log(`${playerList[1].name} won`);
      isSomeoneWon = true;
    }
  }
}

module.exports = rounds;
