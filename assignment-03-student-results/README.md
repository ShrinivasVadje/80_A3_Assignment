# Practical 3: Student Result Management System

## 1. Aim
To develop a web-based Student Result Management System using HTML, CSS, and Vanilla JavaScript that accepts student details and subject marks, calculates total and percentage, dynamically maintains student records in a table, and identifies the class topper.

---

## 2. Software & Tools Required
- **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6)
- **Editor:** Visual Studio Code / Antigravity IDE
- **Browser:** Google Chrome / Microsoft Edge / Mozilla Firefox

---

## 3. Theory in Simple Words
- **DOM Manipulation:** JavaScript allows dynamically creating, updating, or deleting HTML elements on the page without reloading using methods like `document.getElementById()`, `addEventListener()`, and `innerHTML`.
- **Arrays & Objects:** A student's data (name, rollNo, marks, total, percentage) is grouped into a JavaScript Object (`{ ... }`), and multiple student objects are stored in an Array (`students = [ ... ]`).
- **Calculation Logic:**
  - $\text{Total} = \text{marks1} + \text{marks2} + \text{marks3}$
  - $\text{Percentage} = \frac{\text{Total}}{300} \times 100$
  - $\text{Status}$: If any subject mark is $< 40$, the student fails; otherwise, they pass.
- **Finding Topper:** We iterate through the array using a simple `for` loop, compare percentages, and keep track of the student with the highest percentage.

---

## 4. Algorithm / Step-by-Step Procedure
1. **Initialize Data:** Create an empty array (or one with initial sample data) `let students = [...]`.
2. **Form Submission:**
   - Listen for form submit event using `studentForm.addEventListener("submit", addStudent)`.
   - Prevent default page reload with `event.preventDefault()`.
3. **Read & Validate Inputs:**
   - Read `name`, `rollNo`, and marks for 3 subjects.
   - Validate that each mark is between 0 and 100.
4. **Compute Results:**
   - Calculate `total = marks1 + marks2 + marks3`.
   - Calculate `percentage = (total / 300) * 100` rounded to 2 decimal places.
   - Determine `status = (marks >= 40) ? "Pass" : "Fail"`.
5. **Store & Display:**
   - Push new object into `students` array.
   - Call `displayStudents()` to render updated table rows.
6. **Identify Topper:**
   - Inside `findTopper()`, find the object with the maximum percentage.
   - Display topper name and score in the banner and highlight their row in the table.
7. **Delete Record:**
   - Allow removing a record using `students.splice(index, 1)` and refresh table.

---

## 5. Important Functions Explained
- `addStudent(event)`: Reads values from form inputs, performs basic boundary validation (0–100), computes `total` and `percentage`, creates a student object, pushes it into `students` array, resets form, and updates the UI.
- `displayStudents()`: Clears the `<tbody>`, loops through the `students` array, creates table rows dynamically, highlights the topper row, and attaches a delete button.
- `findTopper()`: Loops through `students`, compares `percentage`, returns the roll number of the topper, and updates the topper banner.
- `deleteStudent(index)`: Prompts confirmation, removes the selected element from array using `.splice(index, 1)`, and re-renders the table.

---

## 6. How to Run
Double-click [`index.html`](file:///c:/Users/SHRINIVAS/OneDrive/VSEC/assignment-03-student-results/index.html) or open it in any web browser.

---

## 7. Expected Output
- A golden-colored banner at the top showing the current topper (e.g. Sneha Patil with 93.67%).
- A clean form to input Student Name, Roll No, and 3 subject marks.
- A table pre-loaded with student records, showing Roll No, Name, Marks, Total, Percentage, Pass/Fail status badges, and a Delete button.
- Adding a new student with higher marks immediately updates the topper banner and highlights their row with a yellow crown.

---

## 8. Result
The Student Result Management System was successfully implemented using HTML, CSS, and Vanilla JavaScript, fulfilling all dynamic calculation and topper identification requirements.

---

## 9. Viva Questions & Answers

**Q1: What does `event.preventDefault()` do in a form submission handler?**  
*Answer:* By default, submitting an HTML form reloads the page or sends data to a server. `event.preventDefault()` cancels this default behavior so that our JavaScript can handle the data without reloading.

**Q2: What is the difference between `parseFloat()` and `parseInt()` in JavaScript?**  
*Answer:* `parseInt()` parses a string and returns an integer (whole number), while `parseFloat()` parses and returns a floating-point number with decimals.

**Q3: How does `.splice(index, 1)` work in JavaScript?**  
*Answer:* `.splice(start, deleteCount)` modifies the original array by removing `deleteCount` elements starting from the specified `index`.

**Q4: How do you dynamically insert HTML content into an element using JavaScript?**  
*Answer:* By setting the `.innerHTML` property of an element or using `document.createElement()` and `.appendChild()`.

**Q5: What is an Object in JavaScript?**  
*Answer:* An object is a collection of key-value pairs used to store structured data (for example: `{ name: "Aarav", total: 263 }`).
