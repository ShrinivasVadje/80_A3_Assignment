# Practical 1: Responsive Webpage using HTML5 Semantic Tags & CSS3

## 1. Aim
To develop a structured and responsive webpage using HTML5 semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) and CSS3 styling.

---

## 2. Software & Tools Required
- **Text Editor:** VS Code / Antigravity IDE / Notepad++
- **Web Browser:** Google Chrome / Microsoft Edge / Mozilla Firefox

---

## 3. Theory in Simple Words
- **HTML5 Semantic Tags:** Elements that clearly tell the browser and reader what kind of content they hold:
  - `<header>`: Contains the page heading, logo, or title.
  - `<nav>`: Contains navigation links (menu).
  - `<main>`: Contains the main central content of the webpage.
  - `<section>`: Groups related content together under a heading.
  - `<article>`: Self-contained piece of content that makes sense on its own.
  - `<aside>`: Sidebar used for extra information, links, or notes.
  - `<footer>`: Contains copyright information or contact links at the bottom.
- **CSS3 Responsive Design:** Using Flexbox and media queries (`@media`) so the layout automatically adjusts when opened on a mobile phone or a desktop screen.

---

## 4. Step-by-Step Procedure
1. Create a folder named `assignment-01-html-css`.
2. Create `index.html` and define standard HTML tags.
3. Add `<header>` with the college and department name.
4. Add `<nav>` containing navigation hyperlinks (`<a>`).
5. Create a `<div>` with class `container` containing `<main>` and `<aside>`.
6. Inside `<main>`, add two `<section>` tags. Inside the second section, add two `<article>` tags.
7. Inside `<aside>`, display student information and links.
8. Add a `<footer>` at the bottom with copyright text.
9. Create `style.css` to add colors, margins, padding, and Flexbox layout.
10. Add a media query (`@media (max-width: 768px)`) to stack the sidebar below the main content on mobile screens.
11. Open `index.html` in a web browser to verify the webpage.

---

## 5. How to Run
Simply double-click [`index.html`](file:///c:/Users/SHRINIVAS/OneDrive/VSEC/assignment-01-html-css/index.html) or open it with any web browser.

---

## 6. Expected Output
- A dark blue header displaying the department title.
- A horizontal navigation bar with links that highlight on hover.
- A two-column desktop view showing the main articles on the left and the sidebar on the right.
- When the browser window is resized below 768px, the layout smoothly stacks into a single vertical column.

---

## 7. Result
The responsive webpage was successfully designed using HTML5 semantic elements and CSS3 styling.

---

## 8. Viva Questions & Answers

**Q1: What are semantic tags in HTML5?**  
*Answer:* Semantic tags clearly describe their meaning to both the browser and the developer (e.g., `<header>`, `<nav>`, `<article>`) instead of using generic `<div>` tags.

**Q2: What is the purpose of the `<meta name="viewport">` tag?**  
*Answer:* It tells the browser to set the width of the webpage to the screen width of the device (`width=device-width, initial-scale=1.0`), which is necessary for responsive design.

**Q3: What is CSS Flexbox?**  
*Answer:* Flexbox (Flexible Box Layout) is a one-dimensional layout model in CSS used to align and distribute space among items in a container along a row or column.

**Q4: What is a CSS media query?**  
*Answer:* A media query (`@media`) allows us to apply CSS styles only when certain device conditions are met, such as screen width (`max-width: 768px`).

**Q5: What is the difference between `<section>` and `<article>`?**  
*Answer:* `<section>` groups related thematic content together, while `<article>` is an independent piece of content (like a blog post or news story) that can stand alone.
