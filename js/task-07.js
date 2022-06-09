const fontSizeScrolEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeScrolEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
