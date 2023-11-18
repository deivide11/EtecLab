import { todasQuestoes } from "../db/db.js";
import { ConstantRotas } from "../constants/index.js";
import { navigateTo } from "../helpers/index.js";
const nivel = localStorage.getItem("nivel");

const randomQuestion = Math.floor(Math.random() * 4);
const nivelDoQuiz = nivel ? nivel : randomQuestion > 3 ? 0 : randomQuestion;
const questionFiltered = todasQuestoes[nivelDoQuiz]
  .filter((item) => item.status === "active")
  .sort(() => Math.random() - 0.5)
  .slice(0, 5);

let currentQuestion = 0;

const quizHeaderDiv = document.querySelector("header");
const containerQuiz = document.querySelector(".container");
const userDropdown = document.querySelector(".nav-user-icon");
const quizQuestionContainer = document.querySelector(".question-container");
const quizAlternativesContainer = document.querySelector(
  ".question-alternative-container"
);
const btnConfirmQuestion = document.querySelector(".btn-confirm");
const btnNextQuestion = document.querySelector(".btn-next-question");
const quizContainerMessageResult = document.querySelector(".container-message");
const dropdown = document.querySelector(".dropdown-content");

btnNextQuestion.addEventListener("click", () => {
  btnConfirmQuestion.classList.remove("hidden-btn");
  btnNextQuestion.classList.add("hidden-btn");

  quizContainerMessageResult.classList.add("container-message-hidden");

  if (currentQuestion === questionFiltered.length - 1) {
    console.log("Fim do quiz");
    const questoesErradas = questionFiltered.filter((question) => {
      return question.status === "incorrect";
    });

    const questoesCertas = questionFiltered.filter((question) => {
      return question.status === "correct";
    });

    console.log(questoesErradas, "questoesErradas");
    console.log(questoesCertas, "questoesCertas");
    btnConfirmQuestion.addEventListener("click", () => {
      navigateTo(`${ConstantRotas.DASHBOARD}`);
    });
    return;
  } else {
    // changeLoadingState();
    currentQuestion++;
    quizAlternativesContainer.innerHTML = "";
    quizQuestionContainer.innerHTML = "";
    startNewQuiz();
  }
});

btnConfirmQuestion.addEventListener("click", () => {
  verificarResposta();
});

userDropdown.addEventListener("click", () => {
  const isHidden = document.querySelector(".hidden-dropdown");
  if (isHidden) {
    dropdown.classList.remove("hidden-dropdown");
    dropdown.style.zIndex = 1;
    containerQuiz.style.zIndex = -1;
  } else {
    dropdown.classList.add("hidden-dropdown");
    dropdown.style.zIndex = 0;
    containerQuiz.style.zIndex = 1;
  }
});

document.addEventListener("click", function (event) {
  // Verifica se o clique ocorreu fora do dropdown
  if (
    !dropdown.contains(event.target) &&
    !userDropdown.contains(event.target)
  ) {
    dropdown.classList.add("hidden-dropdown");
    dropdown.style.zIndex = 0;
    containerQuiz.style.zIndex = 1;
  }
});

function createErrorMessageHTML() {
  const html = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="27"
  height="27"
  viewBox="0 0 27 27"
  fill="none"
>
  <path
    d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z"
    fill="#fa0f37"
    stroke="#fa0f37"
    stroke-width="1.77083"
    stroke-miterlimit="10"
  />
  <path
    d="M17.6668 9.33398L9.3335 17.6673"
    stroke="white"
    stroke-width="1.41667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M17.6668 17.6673L9.3335 9.33398"
    stroke="white"
    stroke-width="1.41667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
<p class="error-message"></p>
  `;

  return html;
}

function createCorrectMessageHTML() {
  const messageCorrect = questionFiltered[currentQuestion].messageCorrect;
  const html = `
  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
              fill="#e2f71f"
              stroke="#e2f71f"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.2414 10.8181L13.4088 20.19L9 15.5041"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>${messageCorrect}</p>`;

  return html;
}

function createAnswerHTML(answer, index) {
  const { correct } = answer;
  const answerNumber = index + 1;

  const html = `
      <p class="question-alternative-box" for="${answerNumber}">
        <input type="radio" name="answer" id="${answerNumber}" value="${correct}" />
        <code>/code>
      </p>
      <div class="question-alternative-number" for="${answerNumber}">
        ${answerNumber}
      </div>
  `;
  html;
  return html;
}

function verificarResposta() {
  const resposta = document.querySelector('input[name="answer"]:checked').value;

  if (resposta) {
    const respostaCorreta = resposta === "true";
    const respostaEscolhida = document.querySelector(
      ".question-alternative-clicked"
    );
    let labels = document.querySelectorAll(".question-alternative");
    labels.forEach(function (label) {
      label.classList.add("question-alternative-invalid");
    });

    respostaEscolhida.classList.remove("question-alternative-clicked");
    if (respostaCorreta) {
      respostaEscolhida.classList.add("question-alternative-correct");
      quizContainerMessageResult.classList.add(
        "animate-correct-answer-container"
      );
      quizContainerMessageResult.innerHTML = createCorrectMessageHTML();

      quizContainerMessageResult.classList.remove("container-message-hidden");
      btnNextQuestion.classList.remove("hidden-btn");
      btnNextQuestion.classList.remove("btn-next-question-wrong-answer");
      btnNextQuestion.classList.add("animate-correct-answer-container");

      btnConfirmQuestion.classList.add("hidden-btn");

      questionFiltered[currentQuestion].status = "correct";
    } else {
      respostaEscolhida.classList.add("question-alternative-incorrect");
      respostaEscolhida.classList.add("animate-shake-wrong-answer");
      quizContainerMessageResult.classList.add(
        "animate-correct-answer-container"
      );
      quizContainerMessageResult.innerHTML = createErrorMessageHTML();
      const errorMessage = document.querySelector(".error-message");
      errorMessage.textContent = questionFiltered[currentQuestion].messageError;

      quizContainerMessageResult.classList.remove("container-message-hidden");
      btnNextQuestion.classList.remove("hidden-btn");
      btnNextQuestion.classList.add("btn-next-question-wrong-answer");
      btnNextQuestion.classList.add("animate-correct-answer-container");

      btnConfirmQuestion.classList.add("hidden-btn");

      questionFiltered[currentQuestion].status = "incorrect";
    }
  }
  // changeLoadingState();
}

// function changeLoadingState()
 {
  const loader = document.querySelector(".loader").style.display;

  if (loader === "block" || loader === "") {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
      document.querySelector("main").style.display = "flex";
    }, 1000);
  } else {
    document.querySelector(".loader").style.display = "block";
    document.querySelector("main").style.display = "none";
  }
}

function changeBorderColorAlternative(label) {
  btnConfirmQuestion.disabled = false;

  let labels = document.querySelectorAll(".question-alternative");

  labels.forEach(function (label) {
    label.classList.remove("question-alternative-clicked");
  });

  const labelIncorrect = document.querySelector(
    ".question-alternative-incorrect"
  );
  const labelCorrect = document.querySelector(".question-alternative-correct");

  if (!labelIncorrect && !labelCorrect) {
    label.classList.add("question-alternative-clicked");
  }
}

const startNewQuiz = () => {
  // changeLoadingState();
  btnConfirmQuestion.disabled = true;

  const questionInfo = questionFiltered[currentQuestion];
  let questionCategory = document.querySelector(".question-category");
  if (!questionCategory) {
    questionCategory = document.createElement("div");
  }

  questionCategory.textContent = questionInfo.category;
  questionCategory.classList.add("question-category");
  quizHeaderDiv.prepend(questionCategory);

  const questionTitleElement = document.createElement("h2");
  questionTitleElement.classList.add("question-title");
  questionTitleElement.textContent = questionInfo.title;
  quizQuestionContainer.appendChild(questionTitleElement);

  // Itera sobre as respostas
  questionInfo.answers.forEach((answer, index) => {
    const labelAlternativa = document.createElement("label");

    labelAlternativa.addEventListener("click", () => {
      changeBorderColorAlternative(labelAlternativa);
    });

    labelAlternativa.classList.add("question-alternative");
    labelAlternativa.classList.add("animate-scale-in-top");
    labelAlternativa.htmlFor = `${index + 1}`;

    const answerHTML = createAnswerHTML(answer, index);
    labelAlternativa.innerHTML = answerHTML;
    const questionAnswer = labelAlternativa.querySelector("code");
    questionAnswer.textContent = answer.answer;

    quizAlternativesContainer.appendChild(labelAlternativa);
  });
};

startNewQuiz();
