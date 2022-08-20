const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", verification);

function verification(event) {
  // console.dir(event.currentTarget);
  // console.dir(textInput.attributes[2].value);
  // console.dir(event.currentTarget.value.length);
  // console.log(Number(textInput.attributes[2].value) === event.currentTarget.value.length)
  // console.log(Number(textInput.dataset.length) === event.currentTarget.value.length)

  if (Number(textInput.dataset.length) === event.currentTarget.value.length) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
  }
}
