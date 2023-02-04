const refs = {
  input: document.querySelector("#name-input"),
  greetingLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.greetingLabel.textContent = event.currentTarget.value;
}
