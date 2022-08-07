const createGameboard = require('./gameboard');
const createShip = require('./ships');
const positionShips = require('./positionShips');

const ships = [];
const gameboardPlayer1 = createGameboard();
const gameboardPlayer2 = createGameboard();
const destroyerShip = createShip(2, 'destroyer');
const carrierShip = createShip(5, 'carrier');
const battleShip = createShip(4, 'battleship');
const cruiserShip = createShip(3, 'cruiser');
const submarineShip = createShip(3, 'submarine');

ships.push(destroyerShip, carrierShip, battleShip, cruiserShip, submarineShip);

positionShips(ships, gameboardPlayer1);

console.log(gameboardPlayer1);
gameboardPlayer1.forEach((box) => {
  console.log(box);
});
