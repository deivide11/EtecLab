import { ConstantRotas } from "../constants/index.js";
import { navigateTo } from "../helpers/index.js";

const username = document.querySelector(".nav-user-name");
const btnRemoveUser = document.querySelector(".btn-remove-user");
const btnStartQuiz = document.querySelector(".btn-next-question");
const btnStartQuizAleatorio = document.querySelector(".start-quiz");

btnStartQuiz.addEventListener("click", () => {
  debugger;
  navigateTo(`${ConstantRotas.QUIZ}`);
});
btnStartQuizAleatorio.addEventListener("click", () => {
  const numeroAleatorio = Math.floor(Math.random() * 4);
  localStorage.setItem("nivel", numeroAleatorio > 3 ? 0 : numeroAleatorio);
  debugger;
  navigateTo(`${ConstantRotas.QUIZ}`);
});

window.addEventListener("load", () => 
{
  let dadosArmazenados = localStorage.getItem("users");
  let dados = JSON.parse(dadosArmazenados);
  username.textContent = dados?.username;
});

btnRemoveUser.addEventListener("click", () => {
  localStorage.removeItem("users");
  navigateTo(`${ConstantRotas.LOGIN}`);
});

window.addEventListener("load", (event) => {
  const loader = document.querySelector(".loader").style.display;

  if (loader === "block" || loader === "") {
    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
      document.querySelector("main").style.display = "flex";
    }, 500);
  } else {
    document.querySelector(".loader").style.display = "block";
    document.querySelector("main").style.display = "none";
  }
});
