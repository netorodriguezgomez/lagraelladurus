const counterText = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

let counter = 0;

function renderCounter() {
  counterText.textContent = String(counter);
}

incrementButton.addEventListener('click', () => {
  counter += 1;
  renderCounter();
});

resetButton.addEventListener('click', () => {
  counter = 0;
  renderCounter();
});
