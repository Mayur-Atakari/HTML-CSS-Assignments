import { quizData } from "./data.js";

let currentQuestion = 0;
let Result = 0;

const question = document.getElementById("question");

const aText = document.getElementById("a_text");

const bText = document.getElementById("b_text");

const cText = document.getElementById("c_text");

const dText = document.getElementById("d_text");

const submit = document.getElementById("submit");

const score = document.getElementById("score");

loadquiz();

function loadquiz() {
  deselectAnswer();

  const currentQuiz = quizData[currentQuestion];
  question.innerText = currentQuiz.question;

  aText.innerText = currentQuiz.a;
  bText.innerText = currentQuiz.b;
  cText.innerText = currentQuiz.c;
  dText.innerText = currentQuiz.d;
}

function getSelected() {
  const answer = document.querySelectorAll(`input[name="answer"]`);
  let selected = null;

  answer.forEach((answer) => {
    if (answer.checked) {
      selected = answer.value;
    }
  });

  return selected;
}

function deselectAnswer() {
  document.querySelectorAll(`input[name="answer"]`).forEach((answer) => {
    answer.checked = false;
  });
}

submit.addEventListener("click", () => {
  const selectedAnswer = getSelected();

  if (!selectedAnswer) {
    alert("Please select an option!");
    return;
  }

  if (selectedAnswer === quizData[currentQuestion].correct) {
    Result++;
  }

  score.innerText = `score ${Result}`;
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadquiz();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector(".container").innerHTML = `<h2>Quiz Finished </h2>
  <h3>Your Score: ${Result}/ ${quizData.length}</h3>
  <button onclick="location.reload()">Restart</button>`;
}
