const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
  ];
  
  const itemRef = document.querySelector("#ingredients");
  
  const massiv = ingredients.map((elem) => {
    const liItem = document.createElement("li");
    liItem.textContent = elem;
  
    return liItem;
  });
  
  itemRef.append(...massiv);
  
  console.log(itemRef);