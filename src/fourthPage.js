const createShip = require('./ships');
const createGameboard = require('./gameboard');
const positionShipsRandomly = require('./positionShipsRandomly');
const roundsUpgraded = require('./roundsUpgraded');

function runFourthPage(
  playerList,
  gameboardPlayer1,
  gameboardPlayer2,
  shipsP1,
  shipsP2,
  bodyContainer,
) {
  console.log(bodyContainer);
  // boiler plate for debugging
  const body = document.querySelector('body');
  body.innerHTML = '';

  //   const shipsP1 = [];
  //   const shipsP2 = [];
  //   const destroyerShip1 = createShip(2, 'destroyer');
  //   const carrierShip1 = createShip(5, 'carrier');
  //   const battleShip1 = createShip(4, 'battleship');
  //   const cruiserShip1 = createShip(3, 'cruiser');
  //   const submarineShip1 = createShip(3, 'submarine');
  //   const destroyerShip2 = createShip(2, 'destroyer');
  //   const carrierShip2 = createShip(5, 'carrier');
  //   const battleShip2 = createShip(4, 'battleship');
  //   const cruiserShip2 = createShip(3, 'cruiser');
  //   const submarineShip2 = createShip(3, 'submarine');
  //   const gameboardPlayer1 = createGameboard();
  //   const gameboardPlayer2 = createGameboard();

  //   shipsP1.push(destroyerShip1, cruiserShip1, submarineShip1, battleShip1, carrierShip1);
  //   shipsP2.push(destroyerShip2, cruiserShip2, submarineShip2, battleShip2, carrierShip2);

  //   positionShipsRandomly(shipsP1, gameboardPlayer1);
  //   positionShipsRandomly(shipsP2, gameboardPlayer2);

  //   console.log(gameboardPlayer1);
  //   console.log(gameboardPlayer2);

  //   const playerList = [
  //     { name: 'Tyler Durden' }, { name: 'Narrator' },
  //   ];

  //   console.log(playerList);
  //   const bodyContainer = `<div class="bodyContainer">
  //   <h1 class="mainTitle">BattleShip Browser Game</h1>
  //   <div class="container">
  //       <div class="heroBoard active" data-position-mode="on" data-ship-currently-placing="destroyer" data-ship-rotation="right">
  //           <div data-row-num="0" class="row row0">
  //               <div class="box" data-col-num="0" data-row-num="0"></div>
  //               <div class="box" data-col-num="1" data-row-num="0"></div>
  //               <div class="box" data-col-num="2" data-row-num="0">
  //                   <div class="battleshipShip" data-drag-ship="" draggable="false" data-length="4" data-current-rotation="right" data-rotatable="false"></div>
  //               </div>
  //               <div class="box" data-col-num="3" data-row-num="0"></div>
  //               <div class="box" data-col-num="4" data-row-num="0"></div>
  //               <div class="box" data-col-num="5" data-row-num="0"></div>
  //               <div class="box" data-col-num="6" data-row-num="0"></div>
  //               <div class="box" data-col-num="7" data-row-num="0"></div>
  //               <div class="box" data-col-num="8" data-row-num="0"></div>
  //               <div class="box" data-col-num="9" data-row-num="0"></div>
  //           </div>
  //           <div data-row-num="1" class="row row1">
  //               <div class="box" data-col-num="0" data-row-num="1"></div>
  //               <div class="box" data-col-num="1" data-row-num="1"></div>
  //               <div class="box" data-col-num="2" data-row-num="1"></div>
  //               <div class="box" data-col-num="3" data-row-num="1"></div>
  //               <div class="box" data-col-num="4" data-row-num="1"></div>
  //               <div class="box" data-col-num="5" data-row-num="1"></div>
  //               <div class="box" data-col-num="6" data-row-num="1"></div>
  //               <div class="box" data-col-num="7" data-row-num="1"></div>
  //               <div class="box" data-col-num="8" data-row-num="1"></div>
  //               <div class="box" data-col-num="9" data-row-num="1"></div>
  //           </div>
  //           <div data-row-num="2" class="row row2">
  //               <div class="box" data-col-num="0" data-row-num="2"></div>
  //               <div class="box" data-col-num="1" data-row-num="2"></div>
  //               <div class="box" data-col-num="2" data-row-num="2"></div>
  //               <div class="box" data-col-num="3" data-row-num="2">
  //                   <div class="cruiserShip" data-drag-ship="" draggable="false" data-length="3" data-current-rotation="right" data-rotatable="false"></div>
  //               </div>
  //               <div class="box" data-col-num="4" data-row-num="2"></div>
  //               <div class="box" data-col-num="5" data-row-num="2"></div>
  //               <div class="box" data-col-num="6" data-row-num="2"></div>
  //               <div class="box" data-col-num="7" data-row-num="2"></div>
  //               <div class="box" data-col-num="8" data-row-num="2"></div>
  //               <div class="box" data-col-num="9" data-row-num="2"></div>
  //           </div>
  //           <div data-row-num="3" class="row row3">
  //               <div class="box" data-col-num="0" data-row-num="3"></div>
  //               <div class="box" data-col-num="1" data-row-num="3"></div>
  //               <div class="box" data-col-num="2" data-row-num="3"></div>
  //               <div class="box" data-col-num="3" data-row-num="3"></div>
  //               <div class="box" data-col-num="4" data-row-num="3"></div>
  //               <div class="box" data-col-num="5" data-row-num="3"></div>
  //               <div class="box" data-col-num="6" data-row-num="3"></div>
  //               <div class="box" data-col-num="7" data-row-num="3"></div>
  //               <div class="box" data-col-num="8" data-row-num="3"></div>
  //               <div class="box" data-col-num="9" data-row-num="3"></div>
  //           </div>
  //           <div data-row-num="4" class="row row4">
  //               <div class="box" data-col-num="0" data-row-num="4"></div>
  //               <div class="box" data-col-num="1" data-row-num="4">
  //                   <div class="destroyerShip" data-drag-ship="" draggable="false" data-length="2" data-rotatable="false" data-current-rotation="right"></div>
  //               </div>
  //               <div class="box" data-col-num="2" data-row-num="4"></div>
  //               <div class="box" data-col-num="3" data-row-num="4"></div>
  //               <div class="box" data-col-num="4" data-row-num="4"></div>
  //               <div class="box" data-col-num="5" data-row-num="4"></div>
  //               <div class="box" data-col-num="6" data-row-num="4"></div>
  //               <div class="box" data-col-num="7" data-row-num="4"></div>
  //               <div class="box" data-col-num="8" data-row-num="4"></div>
  //               <div class="box" data-col-num="9" data-row-num="4"></div>
  //           </div>
  //           <div data-row-num="5" class="row row5">
  //               <div class="box" data-col-num="0" data-row-num="5"></div>
  //               <div class="box" data-col-num="1" data-row-num="5"></div>
  //               <div class="box" data-col-num="2" data-row-num="5"></div>
  //               <div class="box" data-col-num="3" data-row-num="5"></div>
  //               <div class="box" data-col-num="4" data-row-num="5"></div>
  //               <div class="box" data-col-num="5" data-row-num="5"></div>
  //               <div class="box" data-col-num="6" data-row-num="5"></div>
  //               <div class="box" data-col-num="7" data-row-num="5"></div>
  //               <div class="box" data-col-num="8" data-row-num="5"></div>
  //               <div class="box" data-col-num="9" data-row-num="5"></div>
  //           </div>
  //           <div data-row-num="6" class="row row6">
  //               <div class="box" data-col-num="0" data-row-num="6"></div>
  //               <div class="box" data-col-num="1" data-row-num="6"></div>
  //               <div class="box" data-col-num="2" data-row-num="6"></div>
  //               <div class="box" data-col-num="3" data-row-num="6">
  //                   <div class="carrierShip" data-drag-ship="" draggable="false" data-length="5" data-current-rotation="right" data-rotatable="false"></div>
  //               </div>
  //               <div class="box" data-col-num="4" data-row-num="6"></div>
  //               <div class="box" data-col-num="5" data-row-num="6"></div>
  //               <div class="box" data-col-num="6" data-row-num="6"></div>
  //               <div class="box" data-col-num="7" data-row-num="6"></div>
  //               <div class="box" data-col-num="8" data-row-num="6"></div>
  //               <div class="box" data-col-num="9" data-row-num="6"></div>
  //           </div>
  //           <div data-row-num="7" class="row row7">
  //               <div class="box" data-col-num="0" data-row-num="7"></div>
  //               <div class="box" data-col-num="1" data-row-num="7"></div>
  //               <div class="box" data-col-num="2" data-row-num="7"></div>
  //               <div class="box" data-col-num="3" data-row-num="7"></div>
  //               <div class="box" data-col-num="4" data-row-num="7"></div>
  //               <div class="box" data-col-num="5" data-row-num="7"></div>
  //               <div class="box" data-col-num="6" data-row-num="7"></div>
  //               <div class="box" data-col-num="7" data-row-num="7"></div>
  //               <div class="box" data-col-num="8" data-row-num="7"></div>
  //               <div class="box" data-col-num="9" data-row-num="7"></div>
  //           </div>
  //           <div data-row-num="8" class="row row8">
  //               <div class="box" data-col-num="0" data-row-num="8"></div>
  //               <div class="box" data-col-num="1" data-row-num="8"></div>
  //               <div class="box" data-col-num="2" data-row-num="8"></div>
  //               <div class="box" data-col-num="3" data-row-num="8"></div>
  //               <div class="box" data-col-num="4" data-row-num="8"></div>
  //               <div class="box" data-col-num="5" data-row-num="8"></div>
  //               <div class="box" data-col-num="6" data-row-num="8"></div>
  //               <div class="box" data-col-num="7" data-row-num="8"></div>
  //               <div class="box" data-col-num="8" data-row-num="8"></div>
  //               <div class="box" data-col-num="9" data-row-num="8"></div>
  //           </div>
  //           <div data-row-num="9" class="row row9">
  //               <div class="box" data-col-num="0" data-row-num="9"></div>
  //               <div class="box" data-col-num="1" data-row-num="9"></div>
  //               <div class="box" data-col-num="2" data-row-num="9">
  //                   <div class="submarineShip" data-drag-ship="" draggable="false" data-length="3" data-current-rotation="right" data-rotatable="false"></div>
  //               </div>
  //               <div class="box" data-col-num="3" data-row-num="9"></div>
  //               <div class="box" data-col-num="4" data-row-num="9"></div>
  //               <div class="box" data-col-num="5" data-row-num="9"></div>
  //               <div class="box" data-col-num="6" data-row-num="9"></div>
  //               <div class="box" data-col-num="7" data-row-num="9"></div>
  //               <div class="box" data-col-num="8" data-row-num="9"></div>
  //               <div class="box" data-col-num="9" data-row-num="9"></div>
  //           </div>
  //       </div>

  //       <div class="enemyBoard inactive">
  //           <div data-row-num="0" class="row row0">
  //               <div class="box" data-col-num="0" data-row-num="0"></div>
  //               <div class="box" data-col-num="1" data-row-num="0"></div>
  //               <div class="box" data-col-num="2" data-row-num="0"></div>
  //               <div class="box" data-col-num="3" data-row-num="0"></div>
  //               <div class="box" data-col-num="4" data-row-num="0"></div>
  //               <div class="box" data-col-num="5" data-row-num="0"></div>
  //               <div class="box" data-col-num="6" data-row-num="0"></div>
  //               <div class="box" data-col-num="7" data-row-num="0"></div>
  //               <div class="box" data-col-num="8" data-row-num="0"></div>
  //               <div class="box" data-col-num="9" data-row-num="0"></div>
  //           </div>
  //           <div data-row-num="1" class="row row1">
  //               <div class="box" data-col-num="0" data-row-num="1"></div>
  //               <div class="box" data-col-num="1" data-row-num="1"></div>
  //               <div class="box" data-col-num="2" data-row-num="1"></div>
  //               <div class="box" data-col-num="3" data-row-num="1"></div>
  //               <div class="box" data-col-num="4" data-row-num="1"></div>
  //               <div class="box" data-col-num="5" data-row-num="1"></div>
  //               <div class="box" data-col-num="6" data-row-num="1"></div>
  //               <div class="box" data-col-num="7" data-row-num="1"></div>
  //               <div class="box" data-col-num="8" data-row-num="1"></div>
  //               <div class="box" data-col-num="9" data-row-num="1"></div>
  //           </div>
  //           <div data-row-num="2" class="row row2">
  //               <div class="box" data-col-num="0" data-row-num="2"></div>
  //               <div class="box" data-col-num="1" data-row-num="2"></div>
  //               <div class="box" data-col-num="2" data-row-num="2"></div>
  //               <div class="box" data-col-num="3" data-row-num="2"></div>
  //               <div class="box" data-col-num="4" data-row-num="2"></div>
  //               <div class="box" data-col-num="5" data-row-num="2"></div>
  //               <div class="box" data-col-num="6" data-row-num="2"></div>
  //               <div class="box" data-col-num="7" data-row-num="2"></div>
  //               <div class="box" data-col-num="8" data-row-num="2"></div>
  //               <div class="box" data-col-num="9" data-row-num="2"></div>
  //           </div>
  //           <div data-row-num="3" class="row row3">
  //               <div class="box" data-col-num="0" data-row-num="3"></div>
  //               <div class="box" data-col-num="1" data-row-num="3"></div>
  //               <div class="box" data-col-num="2" data-row-num="3"></div>
  //               <div class="box" data-col-num="3" data-row-num="3"></div>
  //               <div class="box" data-col-num="4" data-row-num="3"></div>
  //               <div class="box" data-col-num="5" data-row-num="3"></div>
  //               <div class="box" data-col-num="6" data-row-num="3"></div>
  //               <div class="box" data-col-num="7" data-row-num="3"></div>
  //               <div class="box" data-col-num="8" data-row-num="3"></div>
  //               <div class="box" data-col-num="9" data-row-num="3"></div>
  //           </div>
  //           <div data-row-num="4" class="row row4">
  //               <div class="box" data-col-num="0" data-row-num="4"></div>
  //               <div class="box" data-col-num="1" data-row-num="4"></div>
  //               <div class="box" data-col-num="2" data-row-num="4"></div>
  //               <div class="box" data-col-num="3" data-row-num="4"></div>
  //               <div class="box" data-col-num="4" data-row-num="4"></div>
  //               <div class="box" data-col-num="5" data-row-num="4"></div>
  //               <div class="box" data-col-num="6" data-row-num="4"></div>
  //               <div class="box" data-col-num="7" data-row-num="4"></div>
  //               <div class="box" data-col-num="8" data-row-num="4"></div>
  //               <div class="box" data-col-num="9" data-row-num="4"></div>
  //           </div>
  //           <div data-row-num="5" class="row row5">
  //               <div class="box" data-col-num="0" data-row-num="5"></div>
  //               <div class="box" data-col-num="1" data-row-num="5"></div>
  //               <div class="box" data-col-num="2" data-row-num="5"></div>
  //               <div class="box" data-col-num="3" data-row-num="5"></div>
  //               <div class="box" data-col-num="4" data-row-num="5"></div>
  //               <div class="box" data-col-num="5" data-row-num="5"></div>
  //               <div class="box" data-col-num="6" data-row-num="5"></div>
  //               <div class="box" data-col-num="7" data-row-num="5"></div>
  //               <div class="box" data-col-num="8" data-row-num="5"></div>
  //               <div class="box" data-col-num="9" data-row-num="5"></div>
  //           </div>
  //           <div data-row-num="6" class="row row6">
  //               <div class="box" data-col-num="0" data-row-num="6"></div>
  //               <div class="box" data-col-num="1" data-row-num="6"></div>
  //               <div class="box" data-col-num="2" data-row-num="6"></div>
  //               <div class="box" data-col-num="3" data-row-num="6"></div>
  //               <div class="box" data-col-num="4" data-row-num="6"></div>
  //               <div class="box" data-col-num="5" data-row-num="6"></div>
  //               <div class="box" data-col-num="6" data-row-num="6"></div>
  //               <div class="box" data-col-num="7" data-row-num="6"></div>
  //               <div class="box" data-col-num="8" data-row-num="6"></div>
  //               <div class="box" data-col-num="9" data-row-num="6"></div>
  //           </div>
  //           <div data-row-num="7" class="row row7">
  //               <div class="box" data-col-num="0" data-row-num="7"></div>
  //               <div class="box" data-col-num="1" data-row-num="7"></div>
  //               <div class="box" data-col-num="2" data-row-num="7"></div>
  //               <div class="box" data-col-num="3" data-row-num="7"></div>
  //               <div class="box" data-col-num="4" data-row-num="7"></div>
  //               <div class="box" data-col-num="5" data-row-num="7"></div>
  //               <div class="box" data-col-num="6" data-row-num="7"></div>
  //               <div class="box" data-col-num="7" data-row-num="7"></div>
  //               <div class="box" data-col-num="8" data-row-num="7"></div>
  //               <div class="box" data-col-num="9" data-row-num="7"></div>
  //           </div>
  //           <div data-row-num="8" class="row row8">
  //               <div class="box" data-col-num="0" data-row-num="8"></div>
  //               <div class="box" data-col-num="1" data-row-num="8"></div>
  //               <div class="box" data-col-num="2" data-row-num="8"></div>
  //               <div class="box" data-col-num="3" data-row-num="8"></div>
  //               <div class="box" data-col-num="4" data-row-num="8"></div>
  //               <div class="box" data-col-num="5" data-row-num="8"></div>
  //               <div class="box" data-col-num="6" data-row-num="8"></div>
  //               <div class="box" data-col-num="7" data-row-num="8"></div>
  //               <div class="box" data-col-num="8" data-row-num="8"></div>
  //               <div class="box" data-col-num="9" data-row-num="8"></div>
  //           </div>
  //           <div data-row-num="9" class="row row9">
  //               <div class="box" data-col-num="0" data-row-num="9"></div>
  //               <div class="box" data-col-num="1" data-row-num="9"></div>
  //               <div class="box" data-col-num="2" data-row-num="9"></div>
  //               <div class="box" data-col-num="3" data-row-num="9"></div>
  //               <div class="box" data-col-num="4" data-row-num="9"></div>
  //               <div class="box" data-col-num="5" data-row-num="9"></div>
  //               <div class="box" data-col-num="6" data-row-num="9"></div>
  //               <div class="box" data-col-num="7" data-row-num="9"></div>
  //               <div class="box" data-col-num="8" data-row-num="9"></div>
  //               <div class="box" data-col-num="9" data-row-num="9"></div>
  //           </div>
  //       </div>
  //   </div>

  //   <div class="rotationTip">click to rotate the ships !</div>
  //   <footer class="footer">
  //       <!-- <img src="./imgs/githubIcon.png" class="githubIcon"> -->
  //       <h3>Tyler Code</h3>
  //   </footer>
  // </div>`;

  body.innerHTML = bodyContainer;

  // boiler plate for debugging
  const rotationTip = document.querySelector('.rotationTip');
  const startBtn = document.querySelector('.startBtn');
  rotationTip.innerHTML = '';
  startBtn.innerHTML = ' ';

  roundsUpgraded(playerList, gameboardPlayer1, gameboardPlayer2, shipsP1, shipsP2);

  const winningScreen = document.createElement('div');
  const bodyContainera = document.querySelector('.bodyContainer');
  winningScreen.classList.add('winningScreen');
  const textInScreen = document.createElement('div');
  textInScreen.classList.add('textInScreen');
  textInScreen.textContent = 'Tyler Durden won...YAY';

  winningScreen.appendChild(textInScreen);
  bodyContainera.appendChild(winningScreen);
}

module.exports = runFourthPage;
