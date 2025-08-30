const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("submit");
const email_p = document.getElementById("email-p");
const password_p = document.getElementById("password-p");
const success_p = document.getElementById("success-p");

email.addEventListener("input", () => {
  onChange();
});

password.addEventListener("input", () => {
  onChange();
});

function onChangeEmail(value) {
  if (value.length > 3 && value.includes("@") && value.includes(".")) {
    email_p.textContent = "";
    return true;
  } else {
    email_p.textContent =
      "Make sure email is more than 3 characters and has @ and a .";
    email_p.style.color = "red";
    return false;
  }
}

function onChangePassword(value) {
  if (value.length > 8) {
    password_p.textContent = "";
    return true;
  } else {
    password_p.textContent = "Make sure password is more than 8 characters.";
    password_p.style.color = "red";
    return false;
  }
}

function onChange() {
  const isEmailValid = onChangeEmail(email.value.trim());
  const isPasswordValid = onChangePassword(password.value.trim());

  if (isEmailValid && isPasswordValid) {
    success_p.textContent = "All good to go!";
    success_p.style.color = "green";
  } else {
    success_p.textContent = "";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const isEmailValid = onChangeEmail(email.value.trim());
  const isPasswordValid = onChangePassword(password.value.trim());

  if (isEmailValid && isPasswordValid) {
    const confirmed = confirm("Are you sure you want to sign up?");
    if (confirmed) {
      alert("Successful signup!");
    } else {
      email.value = "";
      password.value = "";
      window.location.reload();
    }
  } else {
    alert("Please fix the errors before submitting.");
  }
});
