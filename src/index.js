import './style.css';

const sum = require('./contructors/object');
const dragAndDrop = require('./draganddrop');

const ship = document.querySelector('[data-big-ship]');

console.log('webpack genius');
console.log(sum(5, 10));
console.log(sum(5, 10));
dragAndDrop();
console.log(ship);
