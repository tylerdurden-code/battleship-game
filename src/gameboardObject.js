const gameboard = {

};

function iterate(obj) {
  for (let i = 1; i < 101; i += 1) {
    obj[`box${i}`] = '';
  }
}
iterate(gameboard);

for (const item in gameboard) {
  if (gameboard.hasOwnProperty(item)) {
    console.log(item);
  }
}
