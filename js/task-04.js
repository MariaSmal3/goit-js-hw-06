let counterValue = 0;

const valueToGet = document.querySelector("#value");

const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    if (this.getAttribute("data-action") === "decrement") {
      counterValue -= 1;
    } else {
      counterValue += 1;
    }
    valueToGet.textContent = counterValue;
  });
}
