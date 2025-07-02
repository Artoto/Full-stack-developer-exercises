const inputEmail = document.getElementById("email");
const iconEmail = document.querySelector(".icon-email");
const labelTitleEmail = document.querySelector(
  ".form-group-email .form-group-title"
);

inputEmail.addEventListener("focus", () => {
  iconEmail.style.transform = "translate(50%, 40%)";
  labelTitleEmail.style.transform = "translate(120%, -50%)";
  labelTitleEmail.style.background = "white";
  inputEmail.style.border = "2px solid var(--orange)";
  inputEmail.style.borderRadius = "8px";
});

inputEmail.addEventListener("blur", () => {
  if (inputEmail.value) {
    iconEmail.style.transform = "translate(50%, 40%)";
    labelTitleEmail.style.transform = "translate(120%, -50%)";
    labelTitleEmail.style.background = "white";
    inputEmail.style.border = "2px solid var(--orange)";
    inputEmail.style.borderRadius = "8px";
  } else {
    iconEmail.style.transform = "translate(50%, 60%)";
    labelTitleEmail.style.transform = "translate(120%, 110%)";
    labelTitleEmail.style.background = "transparent";
    inputEmail.style.border = "none";
    inputEmail.style.borderBottom = "2px solid var(--orange)";
    inputEmail.style.borderRadius = "0px";
  }
});

const inputPassword = document.getElementById("password");
const iconPassword = document.querySelector(".icon-password");
const iconLock = document.querySelector(".icon-lock");
const labelTitlePassword = document.querySelector(
  ".form-group-password .form-group-title"
);

inputPassword.addEventListener("focus", () => {
  iconLock.style.transform = "translate(50%, 40%)";
  iconPassword.style.transform = "translate(-50%, 40%)";
  labelTitlePassword.style.transform = "translate(70%, -50%)";
  labelTitlePassword.style.background = "white";
  inputPassword.style.border = "2px solid var(--orange)";
  inputPassword.style.borderRadius = "8px";
});

inputPassword.addEventListener("blur", () => {
  if (inputPassword.value) {
    iconLock.style.transform = "translate(50%, 40%)";
    iconPassword.style.transform = "translate(-50%, 40%)";
    labelTitlePassword.style.transform = "translate(70%, -50%)";
    labelTitlePassword.style.background = "white";
    inputPassword.style.border = "2px solid var(--orange)";
    inputPassword.style.borderRadius = "8px";
  } else {
    iconLock.style.transform = "translate(50%, 60%)";
    iconPassword.style.transform = "translate(-50%, 60%)";
    labelTitlePassword.style.transform = "translate(70%, 110%)";
    labelTitlePassword.style.background = "transparent";
    inputPassword.style.border = "none";
    inputPassword.style.borderBottom = "2px solid var(--orange)";
    inputPassword.style.borderRadius = "0px";
  }
});
