

// const decrBtnEl = document.querySelector('button[data-action="decrement]');
// const incrBtnEl = document.querySelector('button[data-action="increment]');


const value = document.getElementById('value');
const plus = document.querySelector('[data-action="increment"]');
const minus = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function increment() {
  counterValue += 1;

  value.textContent = counterValue;
};

function decrement() {
  counterValue -= 1;
  
  value.textContent = counterValue;
};

plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

// const increment = () => {
//   counterValue += 1;

//   value.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   value.textContent = counterValue;
// };




