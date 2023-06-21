const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.children;

console.log('Number of categories:', categoryItems.length);

for (let i = 0; i < categoryItems.length; i++) {
  const item = categoryItems[i];
  const categoryTitle = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
}