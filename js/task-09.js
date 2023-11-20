function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const textColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};

changeColorBtn.addEventListener("click", changeColor);