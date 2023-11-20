const inputRange = document.querySelector("#font-size-control");
const textIsset = document.querySelector("#text");

const fontSizeControl = (event) => {
  textIsset.style.fontSize = event.currentTarget.value + "px";
};

inputRange.addEventListener("input", fontSizeControl);
