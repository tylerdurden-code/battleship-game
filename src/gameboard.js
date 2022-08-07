function createGameboard() {
  const gameboard = [];
  for (let i = 0; i < 10; i += 1) {
    const nullList = [];
    for (let z = 0; z < 10; z += 1) {
      nullList.push(null);
    }
    gameboard.push(nullList);
  }

  return gameboard;
}

module.exports = createGameboard;
