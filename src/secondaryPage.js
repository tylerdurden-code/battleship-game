function secondaryPageGetImg() {
  const tylerImg = document.querySelector('#tylerDurdenPic');

//   tylerImg.src = tylerDurdenPic;
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
//   secondaryPageGetImg();
}

module.exports = { runSecondaryPage, secondaryPageGetImg };
