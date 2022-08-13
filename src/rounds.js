function rounds(playerList, gameboardPlayer1, gameboardPlayer2) {
  console.log(`${playerList[0].name} choose hit coordinates`);
  const x = prompt();
  const y = prompt();
  hit(x, y, playerList[1], gameboardPlayer2);
}
