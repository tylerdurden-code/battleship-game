function startBtnFunc() {
  const startBtn = document.querySelector('[data-start-button]');
  const shipsInDiv = document.querySelectorAll('[data-ship]');

  startBtn.addEventListener('click', () => {
    const shipContainer = document.querySelector('[data-ships-container]');
    if (shipContainer.children.length) {
      return;
    }
    shipsInDiv.forEach((ship) => {
      const { classList } = ship.parentNode;
      classList.forEach((classes) => {
        if (classes.includes('box')) {
          const num = classes.substring(classes.indexOf('x') + 1);
          if (num === '') {
            return;
          }
          if (ship.dataset.rotated === '0dg') {
            console.log(num, 'horizontal');
          } else if (ship.dataset.rotated === '90dg') {
            console.log(num, 'vertical');
          }
        }
      });
    });
  });
}

module.exports = startBtnFunc;
