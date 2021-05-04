const items = document.querySelectorAll("li.item");
console.log(`В списке ${items.length} категории`);

items.forEach((liItems) => {
  const h2 = liItems.querySelector("h2").textContent;
  const ul = liItems.querySelectorAll("li").length;
  console.log(`Категория: ${h2}`);
  console.log(`Количeство элементов: ${ul}`);
});