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
        console.log('big man');
        enemyBoard.classList.toggle('inactive');
        enemyBoard.classList.toggle('active');
        heroBoard.classList.toggle('inactive');
        heroBoard.classList.toggle('active');
      }
    });
  });
}

module.exports = roundsUpgraded;
