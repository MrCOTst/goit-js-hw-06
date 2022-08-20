const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories:`, categoriesEl.length);

categoriesEl.forEach((element) => {
  console.log(`Category:`, element.children[0].textContent);
  console.log(`Elements:`, element.children[1].children.length);
});
