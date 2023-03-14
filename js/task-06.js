const textInput = document.querySelector("#validation-input");
const dataLength = textInput.dataset.length;
//const dataLength = textInput.getAttribute('data-length')


textInput.addEventListener("blur", onInputBlur);

function onInputBlur() {

  const inputLength = textInput.value.length;

    if (inputLength < dataLength || inputLength > dataLength) {
      textInput.classList.add("invalid");
    } else {
      textInput.classList.remove("invalid");
      textInput.classList.add("valid");
    }
}

// textInput.addEventListener("blur", () => {
//     if (
//       textInput.value.length < dataLength ||
//       textInput.value.length > dataLength
//     ) {
//       textInput.classList.add("invalid");
//     } else {
//       textInput.classList.remove("invalid");
//       textInput.classList.add("valid");
//     }
// });
