const button = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

button.addEventListener("click", onChangeBgColor);

function onChangeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
