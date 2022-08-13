const createGameboard = require('./gameboard');
const createShip = require('./ships');
const positionShips = require('./positionShips');
const createPlayers = require('./createPlayers');

const shipsP1 = [];
const shipsP2 = [];
const gameboardPlayer1 = createGameboard();
const gameboardPlayer2 = createGameboard();
const destroyerShip = createShip(2, 'destroyer');
const carrierShip = createShip(5, 'carrier');
const battleShip = createShip(4, 'battleship');
const cruiserShip = createShip(3, 'cruiser');
const submarineShip = createShip(3, 'submarine');

shipsP1.push(destroyerShip, carrierShip, battleShip, cruiserShip, submarineShip);
shipsP2.push(destroyerShip, carrierShip, battleShip, cruiserShip, submarineShip);

const playerList = createPlayers();

positionShips(shipsP1, gameboardPlayer1);

positionShips(shipsP2, gameboardPlayer2);
console.log('player one ships position');
// console.log(gameboardPlayer1);
gameboardPlayer1.forEach((box) => {
  console.log(box);
});
console.log('player two ships position');
gameboardPlayer2.forEach((box) => {
  console.log(box);
});
