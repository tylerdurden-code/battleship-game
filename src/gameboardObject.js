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
function addTruthBasedOnLength(dg, num, gameboard, length) {
  if (dg === '0dg') {
    if (length === 4) {
      gameboard[`box${num}`] = true;
      gameboard[`box${num + 1}`] = true;
      gameboard[`box${num + 2}`] = true;
      gameboard[`box${num + 3}`] = true;
    }
  }
  if (dg === '90dg') {
    if (length === 4) {
      gameboard[`box${num}`] = true;
      gameboard[`box${num + 10}`] = true;
      gameboard[`box${num + 20}`] = true;
      gameboard[`box${num + 30}`] = true;
    }
  }
}
function checkTableau(gameboard) {
  for (let i = 1; i < 101; i += 1) {
    gameboard[`box${i}`] = false;
  }
  const shipsInDiv = document.querySelectorAll('[data-ship]');
  shipsInDiv.forEach((ship) => {
    const { classList } = ship.parentNode;
    classList.forEach((classes) => {
      if (classes.includes('box')) {
        const num = classes.substring(classes.indexOf('x') + 1);
        if (num === '') {
          return;
        }
        const numNum = parseInt(num);
        const lengthNum = parseInt(ship.dataset.length);
        // if (ship.dataset.rotated === '0dg') {
        //   console.log(num, 'horizontal');
        //   const numNum = parseInt(num);
        //   const lengthNum = parseInt(ship.dataset.length);
        //   if (lengthNum === 4) {
        //     console.log(numNum, numNum + 1, numNum + 2, numNum + 3);
        //     gameboard[`box${numNum}`] = true;
        //     gameboard[`box${numNum + 1}`] = true;
        //     gameboard[`box${numNum + 2}`] = true;
        //     gameboard[`box${numNum + 3}`] = true;
        //     console.log(gameboard);
        //   }
        //   console.log(typeof (parseInt(ship.dataset.length)));
        // } else if (ship.dataset.rotated === '90dg') {
        //   console.log(num, 'vertical');
        //   const numNum = parseInt(num);
        //   const lengthNum = parseInt(ship.dataset.length);
        //   if (lengthNum === 4) {
        //     console.log(numNum, numNum + 10, numNum + 20, numNum + 30);
        //     gameboard[`box${numNum}`] = true;
        //     gameboard[`box${numNum + 10}`] = true;
        //     gameboard[`box${numNum + 20}`] = true;
        //     gameboard[`box${numNum + 30}`] = true;
        //     console.log(gameboard);
        //   }
        // }
        addTruthBasedOnLength(ship.dataset.rotated, numNum, gameboard, lengthNum);
        console.log(gameboard);
      }
    });
  });
}

module.exports = { gameboardObject, checkTableau };
