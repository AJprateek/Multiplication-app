const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.querySelector('.question-field');

const inputEl = document.querySelector('.input-field');

const scoreEl = document.querySelector('span');

const buttonEl  = document.querySelector('.submit-btn');

let score = JSON.parse(localStorage.getItem('span'));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

buttonEl.addEventListener("click", () => {
  const userAns = Number(inputEl.value);
  if (userAns === correctAns) {
    score++;
    scoreEl.innerText = `score: ${score}`;
    updateLocalStorage();
  } else {
    score--;
    scoreEl.innerText = `score: ${score}`;
    updateLocalStorage();
  }
  buttonEl.disabled = true;
  window.location.reload();
});

function updateLocalStorage() {
  localStorage.setItem("span", JSON.stringify(score));
}