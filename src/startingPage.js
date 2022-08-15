function startingPageButtonsListeners() {
  const vsaiBtn = document.querySelector('.vsai');

  vsaiBtn.addEventListener('click', () => {
    console.log('big boy now');
  });
}

function runStartingPage() {
  const body = document.querySelector('body');

  body.innerHTML = `
  <div class="startingPageContainer">
    <div class="title">
        <h1>Hello Commander...</h1>
    </div>
    <div class="vsButtons">
        <button class="vsplayer">vs Player</button>
        <button class="vsai">vs AI</button>
    </div>
    </div>`;

  startingPageButtonsListeners();
}

module.exports = runStartingPage;
