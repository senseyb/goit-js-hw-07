const images = [
    {
      url:
        "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url:
        "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  const itemRef = document.querySelector("#gallery");
  
  const image = images.map((elem) => {
    return `<li><img src=${elem.url} alt=${elem.alt} width = 400px, height = 250px></li>`;
  });
  
  itemRef.insertAdjacentHTML("afterbegin", image.join(""));
  
  itemRef.setAttribute(
    "style",
    "display: flex; justify-content: space-around; list-style: none; "
  );
  image.style.width = "100px";
  
  console.log(itemRef);