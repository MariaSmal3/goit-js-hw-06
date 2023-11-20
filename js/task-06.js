const inputToGet = document.querySelector("#validation-input");

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputToGet.dataset.length);
  const inputValueLength = Number(inputToGet.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputToGet.classList.add("valid");
    inputToGet.classList.remove("invalid");
  } else {
    inputToGet.classList.remove("valid");
    inputToGet.classList.add("invalid");
  }
}

inputToGet.addEventListener("blur", onBlurBorderColor);
