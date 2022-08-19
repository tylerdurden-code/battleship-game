const createShip = require('./ships');
const createGameboard = require('./gameboard');

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
  let bryce = 0;
  const boardHero = document.querySelector('.heroBoard');
  const boardHeroArr = [...boardHero.childNodes];
  if ((boardHero.dataset.shipCurrentlyPlacing === 'destroyer') && (boardHero.dataset.shipRotation === 'right')) {
    boardHeroArr.forEach((row) => {
      const rowArr = [...row.childNodes];
      for (let i = 0; i < rowArr.length; i += 1) {
        rowArr[i].dataset.color = 'purple';
      }
    });
  }

  boardHeroArr.forEach((row) => {
    const rowArr = [...row.childNodes];
    rowArr.forEach((box) => {
      box.addEventListener('click', () => {
        if (bryce > 5) {
          return;
        }
        console.log(shipsP1[bryce].name);
        bryce += 1;
        if (bryce === 1) {
          boardHeroArr.forEach((rowa) => {
            const rowArra = [...rowa.childNodes];
            for (let i = 0; i < rowArr.length; i += 1) {
              rowArra[i].dataset.color = 'green';
            }
          });
        }
        if (bryce === 2) {
          boardHeroArr.forEach((rowa) => {
            const rowArra = [...rowa.childNodes];
            for (let i = 0; i < rowArr.length; i += 1) {
              rowArra[i].dataset.color = 'red';
            }
          });
        }
      });
    });
  });
}

function runThirdPage(playerList) {
  const thePlayerList = playerList;

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

  container.appendChild(div);

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

  bodyContainer.appendChild(footer);

  body.appendChild(bodyContainer);

  letsPositionTheShips();
}

module.exports = runThirdPage;
