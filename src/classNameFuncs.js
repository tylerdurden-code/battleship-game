function fixClassNames() {
  const boxes = document.querySelectorAll('.box');
  //   const boxesArray = [...boxes];
  //   for (let i = 1; i < 101; i += 1) {
  //     if (i < 11) {
  //       boxes[i].classList.add('this doesnt work G');
  //     }
  //   }
  let i = 1;
  let col = 1;
  boxes.forEach((box) => {
    if (i > 100) {
      i = 1;
    }
    if (col === 11) {
      col = 1;
    }
    if (i < 11) {
      box.classList.add('row1');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 21 && i >= 11) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row2');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 31 && i >= 21) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row3');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 41 && i >= 31) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row4');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 51 && i >= 41) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row5');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 61 && i >= 51) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row6');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 71 && i >= 61) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row7');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 81 && i >= 71) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row8');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 91 && i >= 81) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row9');
      box.classList.add(`col${col}`);
      col += 1;
    }
    if (i < 101 && i >= 91) {
      if (col === 11) {
        col = 1;
      }
      box.classList.add('row10');
      box.classList.add(`col${col}`);
      col += 1;
    }
    i += 1;
  });
}

module.exports = fixClassNames;
