const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

function onInputChange(event) {
  outputName.textContent = event.currentTarget.value.trim();
  if (!outputName.textContent) {
    outputName.textContent = "Anonymous";
  }
}

input.addEventListener("input", onInputChange);
