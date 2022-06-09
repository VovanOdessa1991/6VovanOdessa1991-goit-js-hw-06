const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// let liContainer = [];
const ulEl = document.querySelector("#ingredients");

// for (let index = 0; index < ingredients.length; index++) {
//   const ingredient = ingredients[index];
// const liEl = document.createElement("li");
// liEl.textContent = ingredient;
// liEl.classList.add("item");

// liContainer.push(liEl);
// }

let liContainer = ingredients.map((option) => {
  console.log(option);
  const liEl = document.createElement("li");
  liEl.textContent = option;
  liEl.classList.add("item");
  return liEl;
});
ulEl.prepend(...liContainer);
