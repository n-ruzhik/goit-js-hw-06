const listOfCategoriesEl = document.querySelector("ul#categories");
const listOfItemsEl = listOfCategoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItemsEl.length}`);

listOfItemsEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
