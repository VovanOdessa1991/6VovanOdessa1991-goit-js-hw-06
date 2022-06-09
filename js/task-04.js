const decrementEl = document.querySelector('[data-action="decrement"]');
const inkrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
let number = 0;

decrementEl.addEventListener("click", () => {
  number -= 1;
  valueEl.textContent = number;
  console.log(number);
});

inkrementEl.addEventListener("click", () => {
  number += 1;
  valueEl.textContent = number;
  console.log(number);
});
