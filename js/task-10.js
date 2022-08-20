function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");

const controls = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
};

// console.log(controls.createBtn);
// console.log(controls.destroyBtn);
// console.log(controls.input);
// console.log(boxes);

controls.createBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = controls.input.value;
  const divs = [];
  const increase = 10;

  for (let i = 0; i < amount; i += 1) {
    const squareEl = document.createElement("div");
    squareEl.style.backgroundColor = getRandomHexColor();
    squareEl.style.width = `${30 + i * increase}px`;
    squareEl.style.height = `${30 + i * increase}px`;
    squareEl.classList.add("new-div");
    divs.push(squareEl);
    console.log(divs);
  }
  boxes.append(...divs);
}

controls.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
