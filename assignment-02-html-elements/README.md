# Practical 2: Webpage with Navbar, Tables, and Forms

## 1. Aim
To develop a structured webpage using HTML5 incorporating a navigation bar (`<nav>`), structured data tables (`<table>`), and interactive user input forms (`<form>`) with CSS3 styling.

---

## 2. Software & Tools Required
- **Text Editor:** VS Code / Antigravity IDE / Notepad++
- **Web Browser:** Google Chrome / Edge / Firefox

---

## 3. Theory in Simple Words
- **Navigation Bar (`<nav>`):** Used to hold menu links that help users navigate between different sections of the page.
- **HTML Tables (`<table>`):** Used to display tabular data in rows and columns:
  - `<thead>`: Table header containing column names (`<th>`).
  - `<tbody>`: Table body containing data rows (`<tr>`) and cells (`<td>`).
  - `<tfoot>`: Table footer used for totals or summary.
  - `colspan`: Merges multiple columns into one cell.
- **HTML Forms (`<form>`):** Used to collect user input:
  - `<input type="text">`: Single-line text input.
  - `<input type="email">`: Validates that the input is a valid email address.
  - `<input type="radio">`: Radio buttons where only one option can be selected from a group.
  - `<select>` & `<option>`: Dropdown menu for selecting one option.
  - `<input type="checkbox">`: Checkboxes where multiple options can be chosen.
  - `<textarea>`: Multi-line text input for addresses or comments.
  - `<button type="submit">` & `<button type="reset">`: To submit or clear the form.

---

## 4. Step-by-Step Procedure
1. Create a folder named `assignment-02-html-elements`.
2. Create `index.html` and write the basic HTML5 structure.
3. In the `<header>`, create a `<nav>` bar containing anchor tags (`<a href="...">`) linking to section IDs (`#courses`, `#registration`).
4. In Section 1, create a course timetable using `<table>` with `<thead>`, `<tbody>`, and `<tfoot>`.
5. In Section 2, create a registration form using `<form>` with appropriate `<label>` and `<input>` elements.
6. Add input fields: Full Name, Roll No, Email, Gender (radio), Branch (select dropdown), Year (dropdown), Areas of Interest (checkboxes), Address (textarea), and Submit/Reset buttons.
7. Create `style.css` to:
   - Style the header and navigation bar using Flexbox.
   - Add borders, padding, and zebra striping (`tbody tr:nth-child(even)`) to the table.
   - Style form controls with borders, padding, and hover states.
8. Open `index.html` in a web browser to test form inputs and responsiveness.

---

## 5. How to Run
Double-click [`index.html`](file:///c:/Users/SHRINIVAS/OneDrive/VSEC/assignment-02-html-elements/index.html) or open it directly in any browser.

---

## 6. Expected Output
- A dark blue header with title on the left and menu links on the right.
- A neat course timetable with blue header, bordered cells, and zebra-striped rows.
- A clean, easy-to-read registration form with required field validation.
- Submitting the form shows a confirmation browser alert.

---

## 7. Result
The webpage incorporating an HTML5 navigation bar, a structured table, and an interactive form was successfully implemented and verified with CSS3 styling.

---

## 8. Viva Questions & Answers

**Q1: What is the purpose of the `colspan` attribute in a table?**  
*Answer:* `colspan` allows a single table cell (`<td>` or `<th>`) to span horizontally across multiple columns.

**Q2: How do you group radio buttons so only one can be selected?**  
*Answer:* By giving all radio buttons in the group the exact same `name` attribute (e.g. `name="gender"`).

**Q3: What is the difference between `checkbox` and `radio` inputs?**  
*Answer:* Radio buttons allow only one choice from a group, whereas checkboxes allow selecting multiple options independently.

**Q4: What does the `required` attribute in an `<input>` tag do?**  
*Answer:* It tells the browser that the field must be filled out before submitting the form. If empty, the browser halts submission and prompts the user.

**Q5: What is the difference between `cellpadding` and `cellspacing`? How is it done in modern CSS?**  
*Answer:* In older HTML, `cellpadding` set space inside cells and `cellspacing` set space between cells. In modern CSS, we use `padding` on `td`/`th` and `border-collapse: collapse;` on `table`.
