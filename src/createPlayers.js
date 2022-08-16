function createPlayerObject(name) {
  return {
    name,
  };
}

function createPlayers(player1Name) {
//   const playerOneName = prompt('First player name: ');
//   const playerTwoName = prompt('Second player name: ');
// user input player names
  const playerOneName = player1Name;
  const playerTwoName = 'Narrator';
  const playerOne = createPlayerObject(playerOneName);
  const playerTwo = createPlayerObject(playerTwoName);

  return [playerOne, playerTwo];
}

module.exports = createPlayers;
