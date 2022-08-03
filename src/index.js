import './style.css';

const sum = require('./contructors/object');
const stackAbuseDrag = require('./stackAbuseDrag');
// const dragAndDrop = require('./draganddrop');
const createShip = require('./ships');
// const { newDragAndDrop } = require('./newDragAndDrop');
// const applyDragEFX = require('./applyDragEFX');
// const newDragAndDropCopy = require('./newDragAndDropCopy');
const fixClassNames = require('./classNameFuncs');
const rotateShip = require('./rotateShip');
const startBtnFunc = require('./startBtn');
const { gameboardObject } = require('./gameboardObject');
const invisibleShip = require('./invisibleShipBtn');

const gameboard = gameboardObject();
const ship = document.querySelector('[data-big-ship]');
const ship1 = createShip(4);
ship1.initializeShip('ship1');
const ship2 = createShip(4);
ship2.initializeShip('ship2');
const ship3 = createShip(4);
ship3.initializeShip('ship3');
console.log('webpack genius');
console.log(sum(5, 10));
console.log(sum(5, 10));
stackAbuseDrag(gameboard);

rotateShip(gameboard);
fixClassNames();
// dragAndDrop();
// newDragAndDrop();
console.log(ship1, ship2, ship3);
startBtnFunc();
invisibleShip();
// checkTableau();
// applyDragEFX();
