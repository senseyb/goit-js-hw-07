const inputElem = document.querySelector("#validation-input");
const dataLenght = inputElem.getAttribute("data-length");

inputElem.addEventListener("blur", (event) => {
  if (inputElem.value.length === +dataLenght) {
    inputElem.classList.add("valid");
  }
  else inputElem.classList.add("invalid");
});

inputElem.addEventListener("focus", () => {
  inputElem.classList.remove("invalid", "valid");
});