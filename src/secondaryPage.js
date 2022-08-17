const createPlayers = require('./createPlayers');
const runThirdPage = require('./thirdPage');

function secondaryPageEventListeners() {
  const nameInput = document.querySelector('#inputAName');
  let playerList;
  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      playerList = createPlayers(nameInput.value);
      nameInput.value = '';
      runThirdPage(playerList);
    }
  });
}

function secondaryPageGetImg() {
  const tylerImg = document.querySelector('#tylerDurdenPic');

  tylerImg.src = './imgs/tylerdurden.jpg';
}

function runSecondaryPage() {
  const body = document.querySelector('body');

  body.innerHTML = `
  <div class="secondPageContainer">
        <div class="profilePicture">
            <img src="" alt="" id="tylerDurdenPic">
        </div>
        <div class="inputPlayerName">
            <h3 id="chooseANameTitle">Choose a name...</h3>
            <input type="text" id="inputAName" placeholder="Tyler Durden...">
        </div>
    </div>
  `;
  secondaryPageGetImg();
  secondaryPageEventListeners();
}

module.exports = { runSecondaryPage, secondaryPageGetImg };
