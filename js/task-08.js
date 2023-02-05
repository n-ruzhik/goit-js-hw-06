const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const dataElements = event.currentTarget.elements;

  const email = dataElements.email.value;
  const password = dataElements.password.value;

  const formData = {
    email,
    password,
  };

  email === "" || password === ""
    ? alert(`Будь ласка, заповніть всі поля`)
    : console.dir(formData);

  event.currentTarget.reset();
}
