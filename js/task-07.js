const inputId = document.querySelector("#font-size-control");
const text = document.querySelector('#text');

inputId.addEventListener(
  "input",
  () => (text.style.fontSize = inputId.value + "px")
);

// inputId.addEventListener("input", onRangeChange);

// function onRangeChange() {
//      text.style.fontSize = inputId.value + 'px'
// }