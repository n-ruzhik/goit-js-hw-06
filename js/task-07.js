const input = document.querySelector("#font-size-control");
const textLabel = document.querySelector("#text");

textLabel.style.fontSize = input.value + "px";

input.addEventListener("input", (event) => {
  console.dir(`${event.currentTarget.value}px`);
  textLabel.style.fontSize = input.value + "px";
});
