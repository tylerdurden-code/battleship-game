import './style.css';

const createGameboard = require('./gameboard');
const createShip = require('./ships');
const positionShips = require('./positionShips');
const createPlayers = require('./createPlayers');
const rounds = require('./rounds');
const runStartingPage = require('./startingPage');

const shipsP1 = [];
const shipsP2 = [];
const gameboardPlayer1 = createGameboard();
const gameboardPlayer2 = createGameboard();
const destroyerShip1 = createShip(2, 'destroyer');
const carrierShip1 = createShip(5, 'carrier');
const battleShip1 = createShip(4, 'battleship');
const cruiserShip1 = createShip(3, 'cruiser');
const submarineShip1 = createShip(3, 'submarine');
const destroyerShip2 = createShip(2, 'destroyer');
const carrierShip2 = createShip(5, 'carrier');
const battleShip2 = createShip(4, 'battleship');
const cruiserShip2 = createShip(3, 'cruiser');
const submarineShip2 = createShip(3, 'submarine');

shipsP1.push(destroyerShip1, carrierShip1, battleShip1, cruiserShip1, submarineShip1);
shipsP2.push(destroyerShip2, carrierShip2, battleShip2, cruiserShip2, submarineShip2);

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

rounds(playerList, gameboardPlayer1, gameboardPlayer2, shipsP1, shipsP2);
// runStartingPage();
