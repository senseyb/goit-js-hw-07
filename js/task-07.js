const polzunok = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

polzunok.addEventListener("input", function (even) {
  const size = polzunok.value;
  textSize.style.fontSize = size + "px";
});