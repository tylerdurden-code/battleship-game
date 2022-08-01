function gameboardObject() {
  const gameboard = {

  };

  function iterate(obj) {
    for (let i = 1; i < 101; i += 1) {
      obj[`box${i}`] = false;
    }
  }
  iterate(gameboard);

  // for (const item in gameboard) {
  //   if (gameboard.hasOwnProperty(item)) {
  //     console.log(gameboard[item]);
  //   }
  // }
  return gameboard;
}
function checkTableau() {
  const shipsInDiv = document.querySelectorAll('[data-ship]');
  shipsInDiv.forEach((ship) => {
    const { classList } = ship.parentNode;
    classList.forEach((classes) => {
      if (classes.includes('box')) {
        const num = classes.substring(classes.indexOf('x') + 1);
        if (num === '') {
          return;
        }
        if (ship.dataset.rotated === '0dg') {
          // console.log(num, 'horizontal');
          // for (let i = num; i < num + parseInt(ship.dataset.length); i += 1) {
          //   console.log(i);
          // }
          // console.log(typeof (parseInt(ship.dataset.length)));
        } else if (ship.dataset.rotated === '90dg') {
          console.log(num, 'vertical');
        }
      }
    });
  });
}

module.exports = { gameboardObject, checkTableau };
