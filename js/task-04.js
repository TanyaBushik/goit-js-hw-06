let counterValue = 0;

const decrBtnEl = document.querySelector('.decrement');
const incrBtnEl = document.querySelector(".increment");

decrBtnEl.addEventListener("click", onTargetBtnClick);
incrBtnEl.addEventListener("click", onTargetBtnClick);

const onTargetBtnClick = () => {
    console.log('Button was clicked')
}

function decrement() {
  counterValue += 1;
}

function increment() {
   updateValue(++counterValue); 
}

document.addEventListener("keydown", (event) => {
  console.log("Keydown: ", event);
});