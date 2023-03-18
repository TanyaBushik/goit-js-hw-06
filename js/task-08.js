
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formElements = event.currentTarget.elements; 
  
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {

    alert("Email and Password fields should not be empty");

  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `Email: ${email} Password: ${password}`
    );
  }
});


// btnLogin.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   console.log(email.value, password.value);
// });

// password.addEventListener("input", emailValidator);

// email.addEventListener("input", emailValidator);

// function emailValidator() {
//   if (email.value.trim() && password.value.trim()) {
//     alert("Email fields should not be empty");
//   } else console.log(email.value, password.value);
// };



// btnLogin.addEventListener('click', (event) => {
//   event.preventDefault();
// });
