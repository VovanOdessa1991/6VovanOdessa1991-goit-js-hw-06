const test = document.querySelectorAll(".item");
console.log(`Number of categories: ${test.length} \n  `);
for (const iterator of test) {
  const test2 = iterator.firstElementChild;
  console.log(`Category: ${test2.textContent}\n `);
  const test3 = iterator.lastElementChild;
  console.log(`Elements: ${test3.children.length}\n `);
}
