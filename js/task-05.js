const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

// textInput.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     if (textInput.value === "") {
//       spanOutput.textContent = "Anonymous";
//     } else spanOutput.textContent = event.currentTarget.value;
// };

textInput.addEventListener('input', () => {
  spanOutput.textContent = textInput.value.trim() || "Anonymous";
});