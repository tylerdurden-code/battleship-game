const returnBoxElement = require('./returnsABoxElement');

function makeAList1(arr) {
  const boxesDivList = [];

  arr.forEach((num) => {
    const div = returnBoxElement(num);
    boxesDivList.push(div);
  });

  console.log(boxesDivList);
  return boxesDivList;
}
module.exports = makeAList1;
