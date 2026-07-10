const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");
const togglePassword = document.getElementById("togglePassword");

// Name Validation
function validateName() {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}

// Email Validation
function validateEmail() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email";
        return false;
    }

    emailError.textContent = "";
    return true;
}

// Password Validation
function validatePassword() {

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required";
        return false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

// Enable / Disable Button
function validateForm() {

    const isValid =
        validateName() &&
        validateEmail() &&
        validatePassword();

    submitBtn.disabled = !isValid;
}

// Real-time Validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Password Show / Hide
togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "visibility_off";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "visibility";

    }

});

// Form Submit
document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Registration Successful!");

    this.reset();

    submitBtn.disabled = true;

    togglePassword.textContent = "visibility";
    passwordInput.type = "password";

});