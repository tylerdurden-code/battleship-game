import './style.css';

const sum = require('./contructors/object');
// const dragAndDrop = require('./draganddrop');
const createShip = require('./ships');
const newDragAndDrop = require('./newDragAndDrop');
const applyDragEFX = require('./applyDragEFX');
// const newDragAndDropCopy = require('./newDragAndDropCopy');
const fixClassNames = require('./classNameFuncs');
const rotateShip = require('./rotateShip');

const ship = document.querySelector('[data-big-ship]');

console.log('webpack genius');
console.log(sum(5, 10));
console.log(sum(5, 10));
const newShip = createShip(4);
newShip.initializeShip();
rotateShip();
fixClassNames();
// dragAndDrop();
newDragAndDrop();
// newDragAndDropCopy();
console.log(ship);
applyDragEFX();
