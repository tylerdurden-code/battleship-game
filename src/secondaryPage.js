const createPlayers = require('./createPlayers');

function secondaryPageEventListeners(playerList) {
  const nameInput = document.querySelector('#inputAName');
  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      nameInput.value = '';
      playerList = createPlayers(nameInput.value);
    }
  });
}

function secondaryPageGetImg() {
  const tylerImg = document.querySelector('#tylerDurdenPic');

  tylerImg.src = './imgs/tylerdurden.jpg';
}

function runSecondaryPage(playerList) {
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
  secondaryPageEventListeners(playerList);
}

module.exports = { runSecondaryPage, secondaryPageGetImg };
