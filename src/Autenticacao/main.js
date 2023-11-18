import { ConstantRotas } from "../constants/index.js";
import { navigateTo, getRouteName } from "../helpers/index.js";

const nomeDaRota = getRouteName();

// Inputs
const inputPassword = document.querySelector("input[name='password']");
const inputConfirmPassword = document.querySelector(
  "input[name='password-confirmation']"
);
const inputEmail = document.querySelector("input[name='email']");
const inputUsername = document.querySelector("input[name='username']");
const form = document.querySelector(".form");

const eyeIcon = document.querySelector(".input-eye");
const eyeSlashIcon = document.querySelector(".input-eye-slash");
const confirmEyeIcon = document.querySelector(".eye-confirm");
const confirmEyeSlashIcon = document.querySelector(".slash-confirm");

confirmEyeIcon?.addEventListener("click", () => {
  console.log("oi");
  if (inputConfirmPassword.type === "password") {
    inputConfirmPassword.type = "text";
    confirmEyeIcon.style.visibility = "hidden";
    confirmEyeSlashIcon.style.visibility = "visible";
  }
});

confirmEyeSlashIcon?.addEventListener("click", () => {
  if (inputConfirmPassword.type === "text") {
    inputConfirmPassword.type = "password";
    confirmEyeIcon.style.visibility = "visible";
    confirmEyeSlashIcon.style.visibility = "hidden";
  }
});

eyeIcon?.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    eyeIcon.style.visibility = "hidden";
    eyeSlashIcon.style.visibility = "visible";
  }
});

eyeSlashIcon?.addEventListener("click", () => {
  if (inputPassword.type === "text") {
    inputPassword.type = "password";
    eyeIcon.style.visibility = "visible";
    eyeSlashIcon.style.visibility = "hidden";
  }
});

const validarFormulario = {
  cadastro: validateCadastro,
  login: validateLogin,
  recuperarSenha: validateRecuperarSenha,
  resetSenha: validateResetSenha,
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formIsValid = validarFormulario[nomeDaRota]();
  if (!formIsValid) return;

  let dadosAutenticacao = {};
  let formData = new FormData(form);

  for (let input of formData.entries()) {
    dadosAutenticacao[input[0]] = input[1];
  }

  if (formIsValid && nomeDaRota === "cadastro") {
    localStorage.setItem("users", JSON.stringify(dadosAutenticacao));
    navigateTo(`${ConstantRotas.LOGIN}`);
  } else if (formIsValid && nomeDaRota === "login") {
    let dadosArmazenados = localStorage.getItem("users");

    if (dadosArmazenados) {
      let dados = JSON.parse(dadosArmazenados);
      if (
        dadosAutenticacao?.email === dados?.email &&
        dadosAutenticacao?.password === dados?.password
      ) {
        navigateTo(`${ConstantRotas.DASHBOARD}`);
      } else {
        showToast(
          '<i class="fa-solid fa-circle-exclamation"></i> Usuário ou senha incorretos',
          "error"
        );
      }
    } else {
      showToast(
        '<i class="fa-solid fa-circle-exclamation"></i> Usuário ou senha incorretos',
        "error"
      );
    }
  } else if (formIsValid && nomeDaRota === "recuperarSenha") {
    let dadosArmazenados = localStorage.getItem("users");

    if (dadosArmazenados) {
      let dados = JSON.parse(dadosArmazenados);
      if (dadosAutenticacao?.email === dados?.email) {
        navigateTo(`${ConstantRotas.RESETAR_SENHA}`);
      } else {
        showToast(
          '<i class="fa-solid fa-circle-exclamation"></i> Este e-mail não pertence a um usuário cadastrado',
          "error"
        );
      }
    } else {
      showToast(
        '<i class="fa-solid fa-circle-exclamation"></i> Este e-mail não pertence a um usuário cadastrado',
        "error"
      );
    }
  } else if (formIsValid && nomeDaRota === "resetSenha") {
    let dadosArmazenados = localStorage.getItem("users");

    if (dadosArmazenados) {
      let dados = JSON.parse(dadosArmazenados);
      dados.password = dadosAutenticacao?.password;
      dados["password-confirmation"] =
        dadosAutenticacao["password-confirmation"];

      localStorage.setItem("users", JSON.stringify(dados));
      navigateTo(`${ConstantRotas.LOGIN}`);
    }
  }
});

function validateCadastro() {
  const usernameValue = inputUsername?.value.trim();
  const emailValue = inputEmail.value?.trim();
  const passwordValue = inputPassword?.value.trim();
  const confirmPasswordValue = inputConfirmPassword?.value.trim();

  if (inputUsername) {
    if (usernameValue === "") {
      setErrorFor(
        inputUsername,
        "Oops! Você não preencheu seu nome de usuário."
      );
    } else {
      setSuccessFor(inputUsername);
    }
  }

  if (emailValue === "") {
    setErrorFor(inputEmail, "Por favor, preencha seu e-mail para continuar.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(inputEmail, "Esse e-mail não é válido");
  } else {
    setSuccessFor(inputEmail);
  }

  if (passwordValue === "") {
    setErrorFor(
      inputPassword,
      "Escolha uma senha segura para proteger sua conta."
    );
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      inputPassword,
      "A senha deve ter ao menos uma letra maiúscula, minúscula e números."
    );
  } else if (passwordValue.length < 8) {
    setErrorFor(inputPassword, "A senha deve ter no mínimo 8 caracteres");
  } else {
    setSuccessFor(inputPassword);
  }
  if (inputConfirmPassword) {
    if (confirmPasswordValue === "") {
      setErrorFor(
        inputConfirmPassword,
        "Por favor, confirme sua senha para prosseguir. "
      );
    } else if (passwordValue !== confirmPasswordValue) {
      setErrorFor(
        inputConfirmPassword,
        "Por favor, certifique-se de que as senhas sejam iguais."
      );
    } else {
      setSuccessFor(inputConfirmPassword);
    }
  }

  const isFormValid = document.querySelectorAll(".form-success").length === 4;

  if (isFormValid) {
    return true;
  }
  return false;
}

function validateLogin() {
  const emailValue = inputEmail?.value.trim();
  const passwordValue = inputPassword?.value.trim();

  if (emailValue === "") {
    setErrorFor(inputEmail, "Por favor, preencha seu e-mail para continuar.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(inputEmail, "Email inválido. Por favor, tente novamente.");
  } else {
    setLimparClasseInput(inputEmail);
  }

  if (passwordValue === "") {
    setErrorFor(inputPassword, "Por favor, preencha sua senha para continuar.");
  } else if (!isPassword(passwordValue) || passwordValue.length < 8) {
    setErrorFor(inputPassword, "Senha incorreta. Por favor, tente novamente.");
  } else {
    setLimparClasseInput(inputPassword);
  }

  const isFormValid = document.querySelectorAll(".form-error").length === 0;

  if (isFormValid) {
    return true;
  }
  return false;
}

function validateRecuperarSenha() {
  const emailValue = inputEmail?.value.trim();

  if (emailValue === "") {
    setErrorFor(inputEmail, "Por favor, preencha seu e-mail para continuar.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(inputEmail, "Email inválido. Por favor, tente novamente.");
  } else {
    setSuccessFor(inputEmail);
  }

  const isFormValid = document.querySelectorAll(".form-success").length === 1;

  if (isFormValid) {
    return true;
  }
  return false;
}

function validateResetSenha() {
  const passwordValue = inputPassword?.value.trim();
  const confirmPasswordValue = inputConfirmPassword?.value.trim();

  if (passwordValue === "") {
    setErrorFor(
      inputPassword,
      "Escolha uma senha segura para proteger sua conta."
    );
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      inputPassword,
      "A senha deve ter ao menos uma letra maiúscula, minúscula e números."
    );
  } else if (passwordValue.length < 8) {
    setErrorFor(inputPassword, "A senha deve ter no mínimo 8 caracteres");
  } else {
    setSuccessFor(inputPassword);
  }
  if (inputConfirmPassword) {
    if (confirmPasswordValue === "") {
      setErrorFor(
        inputConfirmPassword,
        "Por favor, confirme sua senha para prosseguir. "
      );
    } else if (passwordValue !== confirmPasswordValue) {
      setErrorFor(
        inputConfirmPassword,
        "Por favor, certifique-se de que as senhas sejam iguais."
      );
    } else {
      setSuccessFor(inputConfirmPassword);
    }
  }

  const isFormValid = document.querySelectorAll(".form-success").length === 2;

  if (isFormValid) {
    return true;
  }
  return false;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/.test(password);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  eyeIcon?.classList.remove("input-eye");
  confirmEyeIcon?.classList.remove("input-eye");
  eyeSlashIcon?.classList.remove("input-eye-slash");
  confirmEyeSlashIcon?.classList.remove("input-eye-slash");
  formControl.className = "form-control form-error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  eyeIcon?.classList.remove("input-eye");
  confirmEyeIcon?.classList.remove("input-eye");
  eyeSlashIcon?.classList.remove("input-eye-slash");
  confirmEyeSlashIcon?.classList.remove("input-eye-slash");
  formControl.className = "form-control form-success input-filled ";
}

function setLimparClasseInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control input-filled ";
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("main").style.display = "flex";
  }, 1000);
});

// Toast

function showToast(message, type) {
  const toastContainer = document.querySelector(".toast-container");
  const buttonSubmit = document.querySelector(".btn-primary");
  buttonSubmit.classList.add("btn-disabled");
  buttonSubmit.disabled = true;

  let toast = document.createElement("div");
  toast.classList.add("toast");
  if (type === "success") {
    toast.classList.add("toast-success");
  }
  if (type === "error") {
    toast.classList.add("toast-error");
  }
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
    buttonSubmit.classList.remove("btn-disabled");
    buttonSubmit.disabled = false;
  }, 2300);
}
