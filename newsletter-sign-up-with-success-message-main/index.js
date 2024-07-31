const main = document.querySelector("main");
const popup = document.querySelector("#alert");
const email = document.querySelector(".email");
const form = document.querySelector("form");

const error = document.querySelector(".error-mes");
const dismiss = document.querySelector(".dismiss-btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;
  if (isValidEmail(emailVal)) {
    main.classList.add("hide");
    popup.classList.remove("hide");
    popup.classList.add("success-mes");
    const confirm = document.querySelector(".success-text");
    confirm.textContent = ` A confirmation email has been ${emailVal}. Please open
        it and click the button inside to confirm your subscription.`;
  } else {
    error.classList.remove("hide");
    error.classList.add("error-mess");
    email.classList.remove(".email");
    email.classList.add("email-error");
  }
});

dismiss.addEventListener("click", () => {
  popup.classList.remove("success-mes");
  popup.classList.add("hide");
  main.classList.remove("hide");
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
