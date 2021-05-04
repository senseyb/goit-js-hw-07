const refs = {
    increm: document.querySelector("[data-action='increment']"),
    decrem: document.querySelector("[data-action='decrement']"),
    spanValue: document.querySelector("#value"),
  };
  let counterValue = +refs.spanValue.textContent;
  const increment = () => {
    counterValue += 1;
  
    refs.spanValue.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    refs.spanValue.textContent = counterValue;
  };
  refs.increm.addEventListener("click", increment);
  refs.decrem.addEventListener("click", decrement);