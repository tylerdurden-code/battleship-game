// returns a box element based on box number

function returnBoxElement(num) {
  return document.querySelector(`.box${num}`);
}
module.exports = returnBoxElement;
