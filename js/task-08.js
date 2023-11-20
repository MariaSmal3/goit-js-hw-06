const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", hendleSubmit);
const profile = {};

function hendleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  form.reset();
}
