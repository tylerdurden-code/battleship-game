import './style.css';
import tylerDurdenPic from './assets/tylerdurden.jpg';
import githubIcon from './assets/githubIcon.png';
import runThirdPage from './thirdPage';

const runStartingPage = require('./startingPage');
const { runSecondaryPage } = require('./secondaryPage');
const createPlayers = require('./createPlayers');
const positionShipsPage = require('./generalFuncs/positionShipsPage');

runStartingPage();

const vsaiBtn = document.querySelector('.vsai');
const vsplayer = document.querySelector('.vsplayer');
let thirdPage;
const gameRules = {
  mode: '',
};

vsaiBtn.addEventListener('click', () => {
  gameRules.mode = 'AI';
  runSecondaryPage();
  const nameInput = document.querySelector('#inputAName');
  let playerList;
  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      playerList = createPlayers(nameInput.value);
      nameInput.value = '';
      thirdPage = true;
      positionShipsPage();
    }
  });
});

vsplayer.addEventListener('click', () => {
  gameRules.mode = 'Player';
});
