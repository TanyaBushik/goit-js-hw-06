

const decrBtnEl = document.querySelector('[data-action="decrement]');
const incrBtnEl = document.querySelector('[data-action="increment]');
const value = document.getElementById('value');
  let counterValue = 0;


decrBtnEl.addEventListener("click", onBtnClickMinus);
incrBtnEl.addEventListener("click", onBtnClickPlus);

function onBtnClickPlus() {
  value += counterValue; 
}

function onBtnClickMinus() {

}
