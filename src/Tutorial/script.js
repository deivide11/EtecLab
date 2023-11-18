const clickHtml = document.querySelector(".html");
const clickCsharp = document.querySelector(".csharp");
const clickJs = document.querySelector(".js");
const clickBtnHtml = document.querySelector(".btn-html");
const clickBtnCsharp = document.querySelector(".btn-csharp");
const clickBtnJs = document.querySelector(".btn-js");
const btnConfirm = document.querySelector(".btn-confirmar");

let nivelSelect = false;

clickBtnHtml.addEventListener("click", selectHtml);

clickBtnCsharp.addEventListener("click", selectCsharp);

clickBtnJs.addEventListener("click", selectJs);

clickHtml.addEventListener("click", selectHtml);

clickCsharp.addEventListener("click", selectCsharp);

clickJs.addEventListener("click", selectJs);

function selectHtml() {
  clickHtml.classList.add("box-html");
  clickBtnHtml.classList.remove("inactive");
  clickBtnCsharp.classList.add("inactive");
  clickBtnJs.classList.add("inactive");
  clickCsharp.classList.remove("box-csharp");
  clickJs.classList.remove("box-js");
  btnConfirm.classList.remove("btn-inactive");
  nivelSelect = true;
  localStorage.setItem("nivel", 0);
}

function selectCsharp() {
  clickCsharp.classList.add("box-csharp");
  clickBtnCsharp.classList.remove("inactive");
  clickBtnHtml.classList.add("inactive");
  clickBtnJs.classList.add("inactive");
  clickHtml.classList.remove("box-html");
  clickJs.classList.remove("box-js");
  btnConfirm.classList.remove("btn-inactive");
  nivelSelect = true;
  localStorage.setItem("nivel", 1);
}

function selectJs() {
  clickJs.classList.add("box-js");
  clickBtnCsharp.classList.add("inactive");
  clickBtnHtml.classList.add("inactive");
  clickBtnJs.classList.remove("inactive");
  clickCsharp.classList.remove("box-csharp");
  clickHtml.classList.remove("box-html");
  btnConfirm.classList.remove("btn-inactive");
  nivelSelect = true;
  localStorage.setItem("nivel", 2);
}

// window.addEventListener("load", function () {
//   console.log("ola");
//   if (!nivelSelect) {
//     btnConfirm.disabled = true;
//   }
// });
