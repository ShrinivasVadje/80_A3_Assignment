# Practical 4: Responsive Employee Registration Form with JavaScript Validation

## 1. Aim
To develop a responsive Employee Registration Form using HTML, CSS, and JavaScript that validates employee details such as full name, email address, password, phone number, and department using basic client-side validation logic.

---

## 2. Software & Tools Required
- **Languages:** HTML5, CSS3, Vanilla JavaScript
- **Editor:** Visual Studio Code / Antigravity IDE
- **Web Browser:** Google Chrome / Microsoft Edge / Mozilla Firefox

---

## 3. Theory in Simple Words
- **Client-Side Form Validation:** Validating user input directly in the browser before sending data to a backend server. This saves server processing time and immediately guides the user to fix mistakes.
- **Validation Rules Implemented:**
  - **Employee Name:** Cannot be empty and must have at least 3 characters.
  - **Email Address:** Cannot be empty and must follow the standard `username@domain.com` structure (checked using `.indexOf('@')` and `.lastIndexOf('.')`).
  - **Password:** Cannot be empty and must be at least 6 characters long.
  - **Phone Number:** Cannot be empty, must be exactly 10 digits long, and must contain only numbers (`isNaN(phone) === false`).
  - **Department:** A department option must be selected from the dropdown list.
- **Error Feedback:** When a field is invalid, an error message appears in red text below the input and the input border turns red. When the input is corrected, the error disappears.
- **Success State:** Only when all 5 conditions evaluate to `true`, the success message banner is displayed.

---

## 4. Algorithm
1. **Start** the form submission event.
2. Prevent default browser page refresh using `event.preventDefault()`.
3. Set a boolean flag `isValid = true`.
4. Read values from input fields using `document.getElementById('...').value.trim()`.
5. **Check Name:**
   - If empty or `length < 3`, display error, set `isValid = false`.
   - Else, clear error.
6. **Check Email:**
   - If empty or missing `@` or `.`, display error, set `isValid = false`.
   - Else, clear error.
7. **Check Password:**
   - If empty or `length < 6`, display error, set `isValid = false`.
   - Else, clear error.
8. **Check Phone:**
   - If empty, not equal to 10 digits, or contains non-numeric characters (`isNaN`), display error, set `isValid = false`.
   - Else, clear error.
9. **Check Department:**
   - If no option is selected (value is empty), display error, set `isValid = false`.
   - Else, clear error.
10. **Final Evaluation:**
    - If `isValid === true`, show the green success banner and clear form inputs.
    - If `isValid === false`, keep error messages visible.
11. **Stop.**

---

## 5. Step-by-Step Procedure
1. Create a project folder named `assignment-04-employee-registration`.
2. Create `index.html` with a `<header>`, a form container (`.form-card`), input fields for Name, Email, Password, Phone Number, and Department, and submit/reset buttons.
3. Underneath each input, create a `<span class="error-text">` to display dynamic error messages.
4. Add a hidden success banner `div` (`id="successBox"`).
5. Create `style.css` to center the form, style input boxes, define red error borders (`.input-error`), and add a media query for mobile screens (`@media (max-width: 600px)`).
6. Create `app.js` and implement `validateForm()`, `showError()`, `clearError()`, and `resetForm()`.
7. Open `index.html` in a web browser to test both invalid scenarios (empty inputs, short passwords, invalid phones) and valid submissions.

---

## 6. Code Explanation
- `validateForm(event)`: The main handler that triggers when the user clicks "Register Employee". Reads input values and evaluates them using `if-else` blocks.
- `showError(inputId, errorSpanId, message)`: Adds the `.input-error` CSS class to turn the input border red and injects the error text into the corresponding `<span>`.
- `clearError(inputId, errorSpanId)`: Removes the red border class and clears the error text.
- `resetForm()`: Clears all form fields, hides the success box, and clears any active error messages.

---

## 7. How to Run
Double-click [`index.html`](file:///c:/Users/SHRINIVAS/OneDrive/VSEC/assignment-04-employee-registration/index.html) or open it with any web browser.

---

## 8. Expected Output
- **When inputs are empty:** Clicking "Register Employee" highlights all fields in red and displays descriptive messages (e.g. *"Employee name cannot be empty"*, *"Password must be at least 6 characters"*).
- **When phone is invalid (e.g. `987abc` or `12345`):** Displays *"Phone number must be exactly 10 numeric digits."*
- **When all fields are valid:** Displays a green success banner: *"Registration Successful! Welcome to the company, [Name] ([Department])."*

---

## 9. Result
The responsive Employee Registration Form was successfully developed and verified with client-side JavaScript validation.

---

## 10. Viva Questions & Answers

**Q1: Why is client-side form validation important?**  
*Answer:* Client-side validation provides instant feedback to users without waiting for a round-trip to the server, improving user experience and reducing unnecessary server load.

**Q2: What is the purpose of `.trim()` in JavaScript?**  
*Answer:* `.trim()` removes leading and trailing whitespace from a string, ensuring users cannot submit only spaces as input.

**Q3: How do you check if a value is purely numeric in JavaScript?**  
*Answer:* By using `isNaN(value)`. If `isNaN(value)` is `false`, the value represents a valid number.

**Q4: What is the difference between `innerText` and `innerHTML`?**  
*Answer:* `innerText` handles plain text only and does not parse HTML tags, whereas `innerHTML` parses and renders HTML tags inside the element.

**Q5: What is the difference between client-side and server-side validation?**  
*Answer:* Client-side validation runs in the user's browser for quick user guidance, but can be bypassed (e.g. if JS is disabled). Server-side validation runs on the backend server and is mandatory for security and data integrity.
