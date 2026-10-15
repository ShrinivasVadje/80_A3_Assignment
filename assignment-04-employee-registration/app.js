// =======================================================
// Assignment 4: Employee Registration Form Validation (JS)
// =======================================================

// Get form and input elements
const registrationForm = document.getElementById("registrationForm");
const resetBtn = document.getElementById("resetBtn");
const successBox = document.getElementById("successBox");

// Attach event listeners
registrationForm.addEventListener("submit", validateForm);
resetBtn.addEventListener("click", resetForm);

// Main validation function
function validateForm(event) {
  // Prevent page refresh
  event.preventDefault();

  // Hide success message while validating
  successBox.style.display = "none";

  // Flag to track whether all fields are valid
  let isValid = true;

  // 1. Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const department = document.getElementById("department").value;

  // 2. Validate Employee Name
  if (name === "") {
    showError("name", "nameError", "Employee name cannot be empty.");
    isValid = false;
  } else if (name.length < 3) {
    showError("name", "nameError", "Name must be at least 3 characters long.");
    isValid = false;
  } else {
    clearError("name", "nameError");
  }

  // 3. Validate Email Address
  // Simple check: must not be empty, must contain '@' and '.' after '@'
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  if (email === "") {
    showError("email", "emailError", "Email address cannot be empty.");
    isValid = false;
  } else if (atIndex <= 0 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
    showError("email", "emailError", "Please enter a valid email (e.g. user@domain.com).");
    isValid = false;
  } else {
    clearError("email", "emailError");
  }

  // 4. Validate Password (minimum 6 characters)
  if (password === "") {
    showError("password", "passwordError", "Password cannot be empty.");
    isValid = false;
  } else if (password.length < 6) {
    showError("password", "passwordError", "Password must be at least 6 characters.");
    isValid = false;
  } else {
    clearError("password", "passwordError");
  }

  // 5. Validate Phone Number (exactly 10 digits)
  if (phone === "") {
    showError("phone", "phoneError", "Phone number cannot be empty.");
    isValid = false;
  } else if (phone.length !== 10 || isNaN(phone)) {
    showError("phone", "phoneError", "Phone number must be exactly 10 numeric digits.");
    isValid = false;
  } else {
    clearError("phone", "phoneError");
  }

  // 6. Validate Department selection
  if (department === "") {
    showError("department", "departmentError", "Please select a department.");
    isValid = false;
  } else {
    clearError("department", "departmentError");
  }

  // If all fields are valid, show success message and clear form
  if (isValid) {
    successBox.style.display = "block";
    successBox.innerHTML = "Registration Successful! Welcome to the company, " + name + " (" + department + ").";
    registrationForm.reset();
  }
}

// Helper function to display error message and red border
function showError(inputId, errorSpanId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorSpanId);

  inputElement.classList.add("input-error");
  errorElement.innerText = message;
}

// Helper function to clear error message and red border
function clearError(inputId, errorSpanId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorSpanId);

  inputElement.classList.remove("input-error");
  errorElement.innerText = "";
}

// Function to reset all inputs and clear errors
function resetForm() {
  registrationForm.reset();
  successBox.style.display = "none";

  clearError("name", "nameError");
  clearError("email", "emailError");
  clearError("password", "passwordError");
  clearError("phone", "phoneError");
  clearError("department", "departmentError");
}
