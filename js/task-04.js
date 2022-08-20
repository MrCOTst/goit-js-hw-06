let counterValue = 0;
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

buttonDec.addEventListener("click", () => {
  valueEl.textContent = counterValue -= 1;
});

buttonInc.addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
});

// let counterValue = 0;
// const valueEl = document.querySelector('#value');

// document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
//     valueEl.textContent = counterValue -= 1;
// });

// document.querySelector('[data-action="increment"]').addEventListener('click', () => {
//     valueEl.textContent = counterValue += 1;
//     });
