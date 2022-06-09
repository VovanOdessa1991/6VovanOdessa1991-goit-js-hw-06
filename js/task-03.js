const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const liEl = document.querySelector(".gallery");

// for (let index = 0; index < ingredients.length; index++) {
//   const ingredient = ingredients[index];
// const liEl = document.createElement("li");
// liEl.textContent = ingredient;
// liEl.classList.add("item");

// liContainer.push(liEl);
// }

const liContainer = images
  .map(
    (image) =>
      `<li class="gallery__item">
   <img  class="gallery__image" src="${image.url}" alt="${image.alt}" />
  </li>`
  )
  .join("");
// ulEl.prepend(...liContainer);
console.log("Li conteiner !!! =>> " , liContainer);
liEl.insertAdjacentHTML("beforeend", liContainer);
