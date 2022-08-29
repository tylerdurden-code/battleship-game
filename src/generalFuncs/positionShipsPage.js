const createGameboard = require('../gameboard');

function positionShipsPage() {
  const gameboardPlayer1 = createGameboard();
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

  const heroGameBoard = document.createElement('div');
  heroGameBoard.classList = 'heroBoard active';

  container.appendChild(heroGameBoard);

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
    heroGameBoard.appendChild(secDiv);
    rowa += 1;
  });

  body.appendChild(bodyContainer);
}

module.exports = positionShipsPage;
