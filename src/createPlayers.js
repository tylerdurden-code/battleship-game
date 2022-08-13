function createPlayerObject(name) {
  return {
    name,
  };
}

function createPlayers() {
//   const playerOneName = prompt('First player name: ');
//   const playerTwoName = prompt('Second player name: ');
// user input player names
  const playerOneName = 'Jack';
  const playerTwoName = 'John';
  const playerOne = createPlayerObject(playerOneName);
  const playerTwo = createPlayerObject(playerTwoName);

  return [playerOne, playerTwo];
}

module.exports = createPlayers;
