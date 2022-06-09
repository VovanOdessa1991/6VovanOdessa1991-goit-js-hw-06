const textInput = document.querySelector("#name-input");
const textOutpud = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textOutpud.textContent = event.currentTarget.value;
});
