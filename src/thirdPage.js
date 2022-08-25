const createShip = require('./ships');
const createGameboard = require('./gameboard');
const positionShipUpgraded = require('./positionShipsUpgraded');
const positionShipsRandomly = require('./positionShipsRandomly');

const shipsP1 = [];
const shipsP2 = [];
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
const gameboardPlayer1 = createGameboard();
const gameboardPlayer2 = createGameboard();
const changeElementBackgroundColorHover = require('./changeElementBackgroundColorHover');

shipsP1.push(destroyerShip1, cruiserShip1, submarineShip1, battleShip1, carrierShip1);
shipsP2.push(destroyerShip2, cruiserShip2, submarineShip2, battleShip2, carrierShip2);

function letsPositionTheShips() {
  // const theColorDiv = document.createElement('div');
  // theColorDiv.dataset.colorDiv = 'purple';
  // const currentShipDiv = document.querySelector('.currentShipDiv ');
  // let bryce = 1;
  // const boardHero = document.querySelector('.heroBoard');
  // const boardHeroArr = [...boardHero.childNodes];
  // if ((boardHero.dataset.shipCurrentlyPlacing === 'destroyer') && (boardHero.dataset.shipRotation === 'right')) {
  //   boardHeroArr.forEach((row) => {
  //     const rowArr = [...row.childNodes];
  //     for (let i = 0; i < rowArr.length; i += 1) {
  //       rowArr[i].dataset.color = 'purple';
  //     }
  //   });
  // }

  // boardHeroArr.forEach((row) => {
  //   const rowArr = [...row.childNodes];
  //   rowArr.forEach((box) => {
  //     box.addEventListener('wheel', () => {
  //       if (bryce === 1) {
  //         if (boardHero.dataset.shipRotation === 'down') {
  //           const rowNum = parseInt(box.dataset.rowNum) + 1;
  //           const colNum = parseInt(box.dataset.colNum);

  //           const nextBox = document.querySelector(`[data-row-num = ${rowNum}][data-col-num = ${colNum}][data-color = purple]`);

  //           console.log(nextBox);
  //           box.dataset.color = 'purple';
  //           nextBox.dataset.color = 'purple';
  //         }
  //         if (boardHero.dataset.shipRotation === 'right') {
  //           console.log('purple');
  //         }
  //       }
  //     });
  //     box.addEventListener('click', () => {
  //       if (bryce > 4) {
  //         console.log(shipsP1[bryce - 1].name);
  //         if (boardHero.dataset.positionMode === 'on') {
  //           console.log(`col num ${box.dataset.colNum} row num ${box.dataset.rowNum}`);
  //         }
  //         console.log('stage 5');

  //         return;
  //       }
  //       console.log(shipsP1[bryce - 1].name);
  //       box.appendChild(theColorDiv);

  //       if (boardHero.dataset.positionMode === 'on') {
  //         console.log(`col num ${box.dataset.colNum} row num ${box.dataset.rowNum}`);
  //       }

  //       currentShipDiv.textContent = `place your ${shipsP1[bryce].name}`;
  //       if (bryce === 1) {
  //         boardHeroArr.forEach((rowa) => {
  //           const rowArra = [...rowa.childNodes];
  //           for (let i = 0; i < rowArr.length; i += 1) {
  //             rowArra[i].dataset.color = 'green';
  //           }
  //         });
  //       }
  //       if (bryce === 2) {
  //         boardHeroArr.forEach((rowa) => {
  //           const rowArra = [...rowa.childNodes];
  //           for (let i = 0; i < rowArr.length; i += 1) {
  //             rowArra[i].dataset.color = 'red';
  //           }
  //         });
  //       }
  //       if (bryce === 3) {
  //         boardHeroArr.forEach((rowa) => {
  //           const rowArra = [...rowa.childNodes];
  //           for (let i = 0; i < rowArr.length; i += 1) {
  //             rowArra[i].dataset.color = 'pink';
  //           }
  //         });
  //       }
  //       if (bryce === 4) {
  //         boardHeroArr.forEach((rowa) => {
  //           const rowArra = [...rowa.childNodes];
  //           for (let i = 0; i < rowArr.length; i += 1) {
  //             rowArra[i].dataset.color = 'blue';
  //           }
  //         });
  //       }
  //       bryce += 1;
  //     });
  //   });
  // });

}

function makeShipsDraggable() {
  const dragShips = document.querySelectorAll('[data-drag-ship]');
  const boxes = document.querySelectorAll('.box');
  let dragItem = null;
  const shipContainerArray = [];

  function dragStart() {
    // console.log('drag started');

    dragItem = this;
  }
  function dragEnd() {
    // console.log('drag ended');

    dragItem = null;
  }
  function dragOver(e) {
    e.preventDefault();
    // console.log('drag over');
  }
  function dragEnter() {
    // console.log('drag entered');
  }
  function dragLeave() {
    // console.log('drag left');
  }
  function dragDrop() {
    // console.log('drag dropped');
    if (dragItem.draggable === false) {
      return;
    }
    if (this.parentNode.parentNode.dataset.positionMode === 'on') { // just for one board only
      if (positionShipUpgraded(
        this.dataset.rowNum,
        this.dataset.colNum,
        dragItem.dataset.length,
        gameboardPlayer1,
        dragItem.dataset.currentRotation,
        dragItem.classList[0],
      )) {
        return;
      }

      this.append(dragItem);
      const index = shipContainerArray.indexOf(dragItem);
      shipContainerArray.splice(index, 1);
      if (shipContainerArray.length === 0) {
        const currentShipDiv = document.querySelector('.currentShipDiv');
        currentShipDiv.style.display = '';
      }
      dragItem.draggable = false;
      dragItem.dataset.rotatable = 'false';
    }
  }
  boxes.forEach((box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
  });

  dragShips.forEach((ship) => {
    shipContainerArray.push(ship);
    ship.addEventListener('dragstart', dragStart);
    ship.addEventListener('dragend', dragEnd);
  });
}

function letsPositionTheShipsTwo() {
  const shipContainer = document.querySelector('.shipContainer');

  const destroyerTheShip = document.createElement('div');
  destroyerTheShip.classList.add('destroyerShip');
  destroyerTheShip.dataset.dragShip = '';
  destroyerTheShip.draggable = 'true';
  destroyerTheShip.dataset.length = '2';
  destroyerTheShip.dataset.rotatable = 'true';
  destroyerTheShip.dataset.currentRotation = 'right';
  let destroyerChecker = true;
  destroyerTheShip.addEventListener('click', () => {
    if (destroyerTheShip.dataset.rotatable === 'false') {
      return;
    }
    if (destroyerChecker) {
      destroyerTheShip.style.width = '40px';
      destroyerTheShip.style.height = '80px';
      destroyerTheShip.dataset.currentRotation = 'down';
      destroyerChecker = false;
      return;
    }
    if (!destroyerChecker) {
      destroyerTheShip.style.width = '80px';
      destroyerTheShip.style.height = '40px';
      destroyerTheShip.dataset.currentRotation = 'right';
      destroyerChecker = true;
    }
  });

  const cruiserTheShip = document.createElement('div');
  cruiserTheShip.classList.add('cruiserShip');
  cruiserTheShip.dataset.dragShip = '';
  cruiserTheShip.draggable = 'true';
  cruiserTheShip.dataset.length = '3';
  cruiserTheShip.dataset.currentRotation = 'right';
  let cruiserChecker = true;
  cruiserTheShip.addEventListener('click', () => {
    if (cruiserTheShip.dataset.rotatable === 'false') {
      return;
    }
    if (cruiserChecker) {
      cruiserTheShip.style.width = '40px';
      cruiserTheShip.style.height = '120px';
      cruiserTheShip.dataset.currentRotation = 'down';
      cruiserChecker = false;
      return;
    }
    if (!cruiserChecker) {
      cruiserTheShip.style.width = '120px';
      cruiserTheShip.style.height = '40px';
      cruiserTheShip.dataset.currentRotation = 'right';
      cruiserChecker = true;
    }
  });

  const submarineTheShip = document.createElement('div');
  submarineTheShip.classList.add('submarineShip');
  submarineTheShip.dataset.dragShip = '';
  submarineTheShip.draggable = 'true';
  submarineTheShip.dataset.length = '3';
  submarineTheShip.dataset.currentRotation = 'right';
  let submarineChecker = true;
  submarineTheShip.addEventListener('click', () => {
    if (submarineTheShip.dataset.rotatable === 'false') {
      return;
    }
    if (submarineChecker) {
      submarineTheShip.style.width = '40px';
      submarineTheShip.style.height = '120px';
      submarineTheShip.dataset.currentRotation = 'down';
      submarineChecker = false;
      return;
    }
    if (!submarineChecker) {
      submarineTheShip.style.width = '120px';
      submarineTheShip.style.height = '40px';
      submarineTheShip.dataset.currentRotation = 'right';
      submarineChecker = true;
    }
  });

  const battleshipTheShip = document.createElement('div');
  battleshipTheShip.classList.add('battleshipShip');
  battleshipTheShip.dataset.dragShip = '';
  battleshipTheShip.draggable = 'true';
  battleshipTheShip.dataset.length = '4';
  battleshipTheShip.dataset.currentRotation = 'right';
  let battleshipChecker = true;
  battleshipTheShip.addEventListener('click', () => {
    if (battleshipTheShip.dataset.rotatable === 'false') {
      return;
    }
    if (battleshipChecker) {
      battleshipTheShip.style.width = '40px';
      battleshipTheShip.style.height = '160px';
      battleshipTheShip.dataset.currentRotation = 'down';
      battleshipChecker = false;
      return;
    }
    if (!battleshipChecker) {
      battleshipTheShip.style.width = '160px';
      battleshipTheShip.style.height = '40px';
      battleshipTheShip.dataset.currentRotation = 'right';
      battleshipChecker = true;
    }
  });

  const carrierTheShip = document.createElement('div');
  carrierTheShip.classList.add('carrierShip');
  carrierTheShip.dataset.dragShip = '';
  carrierTheShip.draggable = 'true';
  carrierTheShip.dataset.length = '5';
  carrierTheShip.dataset.currentRotation = 'right';
  let carrierChecker = true;
  carrierTheShip.addEventListener('click', () => {
    if (carrierTheShip.dataset.rotatable === 'false') {
      return;
    }
    if (carrierChecker) {
      carrierTheShip.style.width = '40px';
      carrierTheShip.style.height = '200px';
      carrierTheShip.dataset.currentRotation = 'down';
      carrierChecker = false;
      return;
    }
    if (!carrierChecker) {
      carrierTheShip.style.width = '200px';
      carrierTheShip.style.height = '40px';
      carrierTheShip.dataset.currentRotation = 'right';
      carrierChecker = true;
    }
  });

  shipContainer.appendChild(destroyerTheShip);
  shipContainer.appendChild(cruiserTheShip);
  shipContainer.appendChild(submarineTheShip);
  shipContainer.appendChild(battleshipTheShip);
  shipContainer.appendChild(carrierTheShip);

  makeShipsDraggable();
}

function runThirdPage(playerList) {
  const thePlayerList = playerList;

  console.log('player list', thePlayerList);

  const body = document.querySelector('body');

  body.innerHTML = '';

  const bodyContainer = document.createElement('div');
  bodyContainer.classList = 'bodyContainer';

  const title = document.createElement('h1');
  title.classList = 'mainTitle';
  title.textContent = 'BattleShip Browser Game';

  bodyContainer.appendChild(title);

  let rowa = 0;

  const container = document.createElement('div');
  bodyContainer.appendChild(container);
  container.classList = 'container';
  const div = document.createElement('div');
  div.classList = 'heroBoard active';
  div.dataset.positionMode = 'on';
  div.dataset.shipCurrentlyPlacing = 'destroyer';
  div.dataset.shipRotation = 'right';
  gameboardPlayer1.forEach((row) => {
    let col = 0;
    const secDiv = document.createElement('div');
    secDiv.dataset.rowNum = rowa;
    secDiv.classList = `row row${rowa}`;
    row.forEach((item) => {
      const lalaDiv = document.createElement('div');
      lalaDiv.classList = 'box';
      lalaDiv.dataset.colNum = col;
      lalaDiv.dataset.rowNum = rowa;
      secDiv.appendChild(lalaDiv);
      col += 1;
    });
    div.appendChild(secDiv);
    rowa += 1;
  });
  const scrollCheck = true;

  // rotating ship event listener

  div.addEventListener('wheel', () => {
    // const secSecDiv = document.querySelectorAll('.heroBoard > .row');

    // if (scrollCheck === true) {
    //   // div.style.flexDirection = 'row';
    //   // secSecDiv.forEach((littleDiv) => {
    //   //   littleDiv.style.flexDirection = 'box';
    //   // });
    //   div.dataset.shipRotation = 'down';
    //   // console.log(div.dataset.shipRotation);
    //   scrollCheck = false;
    //   return;
    // }
    // if (scrollCheck === false) {
    //   // div.style.flexDirection = 'box';
    //   // secSecDiv.forEach((littleDiv) => {
    //   //   littleDiv.style.flexDirection = 'row';
    //   // });
    //   div.dataset.shipRotation = 'right';
    //   // console.log(div.dataset.shipRotation);
    //   scrollCheck = true;
    // }
  });

  // ------
  container.appendChild(div);

  const shipContainer = document.createElement('div');
  shipContainer.classList.add('shipContainer');

  container.appendChild(shipContainer);

  rowa = 0;
  bodyContainer.appendChild(container);
  container.classList = 'container';
  const theDiv = document.createElement('div');
  theDiv.classList = 'enemyBoard inactive';
  gameboardPlayer2.forEach((row) => {
    let col = 0;
    const secDiv = document.createElement('div');
    secDiv.dataset.rowNum = rowa;
    secDiv.classList = `row row${rowa}`;
    row.forEach((item) => {
      const lalaDiv = document.createElement('div');
      lalaDiv.classList = 'box';
      lalaDiv.dataset.colNum = col;
      lalaDiv.dataset.rowNum = rowa;
      secDiv.appendChild(lalaDiv);
      col += 1;
    });
    theDiv.appendChild(secDiv);
    rowa += 1;
  });

  container.appendChild(theDiv);

  const footer = document.createElement('footer');
  footer.classList = 'footer';

  const imgEle = document.createElement('img');
  imgEle.src = './imgs/githubIcon.png';
  imgEle.classList = 'githubIcon';

  const h3 = document.createElement('h3');
  h3.textContent = 'Tyler Code';

  footer.appendChild(imgEle);
  footer.appendChild(h3);

  const currentShipDiv = document.createElement('div');
  currentShipDiv.classList.add('currentShipDiv');
  // currentShipDiv.textContent = 'Place you destroyer';
  const startBtn = document.createElement('button');
  startBtn.classList.add('startBtn');
  startBtn.textContent = 'Press Start';

  startBtn.addEventListener('click', () => {
    positionShipsRandomly(shipsP2, gameboardPlayer2);
  });
  currentShipDiv.style.display = 'none';
  currentShipDiv.appendChild(startBtn);

  const rotationTip = document.createElement('div');
  rotationTip.classList.add('rotationTip');
  rotationTip.textContent = 'click to rotate the ships !';

  bodyContainer.appendChild(currentShipDiv);
  bodyContainer.appendChild(rotationTip);
  bodyContainer.appendChild(footer);

  body.appendChild(bodyContainer);

  letsPositionTheShipsTwo();
}

module.exports = runThirdPage;
