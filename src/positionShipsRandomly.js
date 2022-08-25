const { positionShips } = require('./positionShips');

function positionShipsRandomly(ships, gameboard) {
  positionShips(ships, gameboard);
  console.log(gameboard);
}

module.exports = positionShipsRandomly;
