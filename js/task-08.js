const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    console.log("Please fill in all the fields!");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  event.currentTarget.reset();
}
