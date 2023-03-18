const input = document.querySelector("number");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = getElementById("boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++){

    const box = document.createElement("div");
    
    box.style.width = `${30 + 10 * i} px`;
    box.style.height = `${30 + 10 * i} px`;
    box.style.backgroundColor = getRandomHexColor();

    divBoxes.appendChild(box);
  }
};

function 
btnCreate.addEventListener('click',);

btnDestroy.addEventListener('click', );


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
