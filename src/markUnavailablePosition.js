const { findMax } = require('./minAndMaxFunc');
const { findMin } = require('./minAndMaxFunc');
const returnBoxElement = require('./returnsABoxElement');

// function emptyFunc(e) {
//   e.preventDefault();
//   console.log('i am empty');
// }
function markUnavailablePostion(length, gameboard, dg) {
  // const trueBoxesArr = [];
  // let realTrueBoxesArr = [];
  // if (dg === '0dg') {
  //   if (length === '4') {
  //     for (const box in gameboard) {
  //       if (gameboard[box] === true) {
  //         realTrueBoxesArr.push(parseInt(box.substring(3)));
  //       }
  //     }
  //     const min = findMin(realTrueBoxesArr);
  //     const max = findMax(realTrueBoxesArr);
  //     const newMin = min - 1;
  //     const newMax = max + 1;
  //     console.log(newMin, newMax);

  //     realTrueBoxesArr.forEach((box) => {
  //       realTrueBoxesArr.push(box - 10, box + 10);
  //     });
  //     realTrueBoxesArr.push(newMin, newMin + 10, newMin - 10, newMax, newMax + 10, newMax - 10);
  //   }

  //   realTrueBoxesArr.forEach((whatever) => {
  //     trueBoxesArr.push(whatever);
  //   });
  //   realTrueBoxesArr = [];
  //   console.log(trueBoxesArr);
  // }
  const numBoxesArr = [];
  let min;
  let max;
  if (dg === '0dg') {
    console.log(numBoxesArr);
    if (length === '4') {
      for (const box in gameboard) {
        if (gameboard[box] === true) {
          const num = parseInt(box.substring(3));
          console.log(num);
          numBoxesArr.push(num, num + 1, num - 1, num + 10, num - 10);
          numBoxesArr.push((num + 1) + 10, (num + 1) - 10, (num - 1) + 10, (num - 1) - 10);
        }
      }
      const uniqueNumBoxesArr = numBoxesArr.filter((item, pos) => numBoxesArr.indexOf(item) == pos);
      //   min = findMin(numBoxesArr);
      //   max = findMax(numBoxesArr);
      //   const newMin = min - 1;
      //   const newMax = max + 1;
      //   console.log(newMin, newMax);
      //   numBoxesArr.forEach((box) => {
      //     numBoxesArr.push(box - 10, box + 10);
      //   });
      //   numBoxesArr.push(newMin, newMin + 10, newMin - 10, newMax, newMax + 10, newMax - 10);
      // }
      console.log(uniqueNumBoxesArr);
    }

  // numBoxesArr.length = 0;
  }
}
module.exports = markUnavailablePostion;
