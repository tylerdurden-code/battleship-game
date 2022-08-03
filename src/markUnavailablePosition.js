const { findMax } = require('./minAndMaxFunc');
const { findMin } = require('./minAndMaxFunc');

function markUnavailablePostion(length, gameboard, dg) {
  const trueBoxesArr = [];
  if (dg === '0dg') {
    if (length === '4') {
      for (const box in gameboard) {
        if (gameboard[box] === true) {
          trueBoxesArr.push(parseInt(box.substring(3)));
        }
      }
      const min = findMin(trueBoxesArr);
      const max = findMax(trueBoxesArr);
      const newMin = min - 1;
      const newMax = max + 1;
      console.log(newMin, newMax);

      trueBoxesArr.forEach((box) => {
        trueBoxesArr.push(box - 10, box + 10);
      });
      trueBoxesArr.push(newMin, newMin + 10, newMin - 10, newMax, newMax + 10, newMax - 10);
    }
    console.log(trueBoxesArr);
  }
}
module.exports = markUnavailablePostion;
