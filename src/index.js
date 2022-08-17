import './style.css';
import tylerDurdenPic from './assets/tylerdurden.jpg';
import githubIcon from './assets/githubIcon.png';

// const tylerDurdenPic = require('file-loader!./assets/tyler durden.jpg');
const createGameboard = require('./gameboard');
// const createShip = require('./ships');
const positionShips = require('./positionShips');
// const createPlayers = require('./createPlayers');
const rounds = require('./rounds');
const runStartingPage = require('./startingPage');

// const shipsP1 = [];
// const shipsP2 = [];
// const gameboardPlayer1 = createGameboard();
// const gameboardPlayer2 = createGameboard();
// const destroyerShip1 = createShip(2, 'destroyer');
// const carrierShip1 = createShip(5, 'carrier');
// const battleShip1 = createShip(4, 'battleship');
// const cruiserShip1 = createShip(3, 'cruiser');
// const submarineShip1 = createShip(3, 'submarine');
// const destroyerShip2 = createShip(2, 'destroyer');
// const carrierShip2 = createShip(5, 'carrier');
// const battleShip2 = createShip(4, 'battleship');
// const cruiserShip2 = createShip(3, 'cruiser');
// const submarineShip2 = createShip(3, 'submarine');

// shipsP1.push(destroyerShip1, carrierShip1, battleShip1, cruiserShip1, submarineShip1);
// shipsP2.push(destroyerShip2, carrierShip2, battleShip2, cruiserShip2, submarineShip2);

runStartingPage();

// positionShips(shipsP1, gameboardPlayer1);

// positionShips(shipsP2, gameboardPlayer2);
// console.log('player one ships position');
// // console.log(gameboardPlayer1);
// gameboardPlayer1.forEach((box) => {
//   console.log(box);
// });
// console.log('player two ships position');
// gameboardPlayer2.forEach((box) => {
//   console.log(box);
// });

// rounds(playerList, gameboardPlayer1, gameboardPlayer2, shipsP1, shipsP2);

// const body = document.querySelector('body');
// const bodyContainer = document.createElement('div');
// bodyContainer.classList = 'bodyContainer';

// const title = document.createElement('h1');
// title.classList = 'mainTitle';
// title.textContent = 'BattleShip Browser Game';

// bodyContainer.appendChild(title);

// let rowa = 0;

// const container = document.createElement('div');
// bodyContainer.appendChild(container);
// container.classList = 'container';
// const div = document.createElement('div');
// div.classList = 'heroBoard active';
// gameboardPlayer1.forEach((row) => {
//   let col = 0;
//   const secDiv = document.createElement('div');
//   secDiv.dataset.rowNum = rowa;
//   secDiv.classList = `row row${rowa}`;
//   row.forEach((item) => {
//     const lalaDiv = document.createElement('div');
//     lalaDiv.classList = 'box';
//     lalaDiv.dataset.colNum = col;
//     lalaDiv.dataset.rowNum = rowa;
//     secDiv.appendChild(lalaDiv);
//     col += 1;
//   });
//   div.appendChild(secDiv);
//   rowa += 1;
// });

// container.appendChild(div);

// rowa = 0;
// bodyContainer.appendChild(container);
// container.classList = 'container';
// const theDiv = document.createElement('div');
// theDiv.classList = 'enemyBoard inactive';
// gameboardPlayer2.forEach((row) => {
//   let col = 0;
//   const secDiv = document.createElement('div');
//   secDiv.dataset.rowNum = rowa;
//   secDiv.classList = `row row${rowa}`;
//   row.forEach((item) => {
//     const lalaDiv = document.createElement('div');
//     lalaDiv.classList = 'box';
//     lalaDiv.dataset.colNum = col;
//     lalaDiv.dataset.rowNum = rowa;
//     secDiv.appendChild(lalaDiv);
//     col += 1;
//   });
//   theDiv.appendChild(secDiv);
//   rowa += 1;
// });

// container.appendChild(theDiv);

// body.appendChild(bodyContainer);
