const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }
    nameError.textContent = "";
    return true;
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

function validateForm() {
    const valid =
        validateName() &&
        validateEmail() &&
        validatePassword();

    submitBtn.disabled = !valid;
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registration Successful!");
    this.reset();
    submitBtn.disabled = true;
});