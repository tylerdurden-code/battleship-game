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

function hitUpgraded(x, y, playerObject, gameboard, ships, box = null) {
  const heroBoard = document.querySelector('.heroBoard');
  const heroboardBoxes = heroBoard.querySelectorAll('.box');
  const heroboardBoxesArr = [...heroboardBoxes];
  if (gameboard[x][y] === null || gameboard[x][y] === 'occupied') {
    if (box === null) {
      heroboardBoxesArr.forEach((boxa) => {
        if ((parseInt(boxa.dataset.rowNum) === x) && (parseInt(boxa.dataset.colNum) === y)) {
          boxa.classList.add('hitButMissed');
        }
      });
      return;
    }
    box.classList.add('hitButMissed');
    console.log('you missed');
  }
  if (gameboard[x][y] !== null) {
    ships.forEach((ship) => {
      if (ship.name === gameboard[x][y]) {
        ship.hit();
        ship.isSunk();
        console.log(ship);
      }
      if (box === null) {
        heroboardBoxesArr.forEach((boxa) => {
          if ((parseInt(boxa.dataset.rowNum) === x) && (parseInt(boxa.dataset.colNum) === y)) {
            boxa.classList.add('hitSuccess');
          }
        });
        return;
      }
      box.classList.add('hitSuccess');
    });
    gameboard[x][y] = null;
    console.log(playerObject);
    gameboard.forEach((row) => {
      console.log(row);
    });
  }
}

function roundsUpgraded(playerList, gameboardPlayer1, gameboardPlayer2, shipsP1, shipsP2) {
  const heroBoard = document.querySelector('.heroBoard');
  const enemyBoard = document.querySelector('.enemyBoard');
  const rotationTip = document.querySelector('.rotationTip');
  const boxes = document.querySelectorAll('.box');

  heroBoard.classList.remove('active');
  heroBoard.classList.add('inactive');

  enemyBoard.classList.remove('inactive');
  enemyBoard.classList.add('active');

  rotationTip.textContent = `${playerList[0].name} choose hit coordinates`;

  const isSomeoneWon = false;
  const beingHitCoordsP2 = [];
  const beingHitCoordsP1 = [];

  const boxesArr = [...boxes];
  boxesArr.forEach((box) => {
    box.addEventListener('click', () => {
      if (box.parentNode.parentNode.classList.contains('active')) {
        if (rotationTip.textContent === `${playerList[0].name} choose hit coordinates`) {
          if (beingHitCoordsP2.includes(`x=${box.dataset.rowNum} y=${box.dataset.colNum}`)) {
            return;
          }
          hitUpgraded(
            box.dataset.rowNum,
            box.dataset.colNum,
            playerList[1],
            gameboardPlayer2,
            shipsP2,
            box,
          );
          if (isWinner(shipsP2)) {
            console.log(`${playerList[0].name} won`);
          }
          beingHitCoordsP2.push(`x=${box.dataset.rowNum} y=${box.dataset.colNum}`);
          console.log(beingHitCoordsP2);

          let checker = false;
          let x = generateRandomInteger(9);
          let y = generateRandomInteger(9);
          while (!checker) {
            if (beingHitCoordsP1.includes(`x=${x} y=${y}`)) {
              x = generateRandomInteger(9);
              y = generateRandomInteger(9);
            } else {
              hitUpgraded(
                x,
                y,
                playerList[0],
                gameboardPlayer1,
                shipsP1,
              );
              beingHitCoordsP1.push(`x=${x} y=${y}`);
              checker = true;
              if (isWinner(shipsP1)) {
                console.log(`${playerList[0].name} won`);
              }

              console.log(beingHitCoordsP1);
            }
          }
        }

        // enemyBoard.classList.toggle('inactive');
        // enemyBoard.classList.toggle('active');
        // heroBoard.classList.toggle('inactive');
        // heroBoard.classList.toggle('active');
        // if (rotationTip.textContent === `${playerList[0].name} choose hit coordinates`) {
        //   rotationTip.textContent = `${playerList[1].name} choose hit coordinates`;
        // } else {
        //   rotationTip.textContent = `${playerList[0].name} choose hit coordinates`;
        // }
      }
    });
  });
}

module.exports = roundsUpgraded;
