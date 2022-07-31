function rotateShip() {
  const btns = document.querySelectorAll('[data-rotate]');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const grandParent = btn.parentNode.parentNode;
      if (btn.parentNode.style.transform === 'rotate(90deg)') {
        console.log(grandParent);
        if (grandParent.classList.contains('col8') || grandParent.classList.contains('col9') || grandParent.classList.contains('col10')) {
          return;
        }
        btn.parentNode.dataset.rotated = '0dg';
        btn.parentNode.style.transform = 'rotate(0deg)';

        return;
      }
      console.log(grandParent);
      if (grandParent.classList.contains('row8') || grandParent.classList.contains('row9') || grandParent.classList.contains('row10')) {
        console.log('cannot rotate sorry');
      } else {
        btn.parentNode.dataset.rotated = '90dg';
        btn.parentNode.style.transform = 'rotate(90deg)';
      }
    });
  });
}

module.exports = rotateShip;
