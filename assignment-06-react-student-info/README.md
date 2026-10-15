# Practical 6: React Student Information Application

## 1. Aim
To develop a simple Student Information Application using React functional components by creating a `StudentForm` component to accept student details (name, roll number, department, marks) and a `StudentDetails` component to display the submitted information in a formatted layout.

---

## 2. Software & Tools Required
- **Framework / Library:** React 18
- **Build Tool:** Vite
- **Runtime Environment:** Node.js (v18+) & npm
- **Editor:** Visual Studio Code / Antigravity IDE
- **Browser:** Google Chrome / Edge / Firefox

---

## 3. Theory in Simple Words

### What is React?
React is a popular JavaScript library developed by Facebook for building fast, component-based user interfaces.

### Key React Concepts Used:
1. **Components:** Reusable building blocks of the UI. Instead of writing all HTML in one huge file, we split the UI into independent pieces:
   - `<StudentForm />`: Manages input fields and form submission.
   - `<StudentDetails />`: Renders the table of registered students.
2. **Props (Properties):** Read-only data passed from a parent component down to a child component (e.g. passing the `students` list to `<StudentDetails students={students} />`).
3. **State (`useState` Hook):** A built-in React Hook that allows functional components to remember data between renders. When state updates, React automatically re-renders the component to show the new data.
4. **Controlled Components:** Form inputs whose values are tied directly to React state using `value={name}` and `onChange={(e) => setName(e.target.value)}`.

---

## 4. Algorithm / Step-by-Step Procedure
1. Create a React project using Vite.
2. In `App.jsx`, create a state variable `const [students, setStudents] = useState([...])` holding the array of student objects.
3. Build the `StudentForm` component:
   - Maintain local state for `name`, `rollNumber`, `department`, and `marks`.
   - On form submission (`handleSubmit`), validate inputs, create a student object, and pass it to the parent using the `onAddStudent` prop function.
   - Reset the form inputs.
4. Build the `StudentDetails` component:
   - Receive the `students` array and `onDeleteStudent` callback via `props`.
   - Render a formatted `<table>` showing Roll No, Name, Department, Marks, Pass/Fail badge, and a Delete button.
5. In `App.jsx`, define `handleAddStudent` to append new records (`setStudents([...students, newStudent])`) and `handleDeleteStudent` to remove records by ID.
6. Run `npm install` and `npm run dev` to launch the development server.

---

## 5. Components Explained
- `StudentForm.jsx`: Functional component that renders the input form. It uses four `useState` hooks to track user input in real-time and validates that marks are between 0 and 100 before calling `onAddStudent`.
- `StudentDetails.jsx`: Pure presentation component that receives the list of students through props and maps them into table rows. If the list is empty, it displays a friendly *"No student records submitted yet"* message.
- `App.jsx`: The top-level component that connects `StudentForm` and `StudentDetails`, serving as the single source of truth for the application's student state.

---

## 6. How to Run
```bash
# 1. Navigate to the assignment directory
cd assignment-06-react-student-info

# 2. Install dependencies (React and Vite)
npm install

# 3. Start the Vite development server
npm run dev
```
Open `http://localhost:5173` in your web browser.

---

## 7. Expected Output
- A two-column responsive layout:
  - **Left Column:** A clean form with fields for Student Name, Roll Number, Department dropdown, and Total Marks.
  - **Right Column:** A table displaying the pre-loaded students (*Shrinivas Vadje*, *Pooja Kulkarni*) with Pass/Fail badges.
- Entering a new student and clicking "Submit Student Details" immediately appends the new row to the table without any page refresh.
- Clicking the red "Delete" button removes the corresponding student from the table.

---

## 8. Result
The Student Information Application was successfully built using React functional components, props, and the `useState` hook, demonstrating modular component-based web development.

---

## 9. Viva Questions & Answers

**Q1: What are functional components in React?**  
*Answer:* Functional components are simply JavaScript functions that accept `props` as an argument and return JSX (HTML-like syntax describing the UI).

**Q2: What is the `useState` Hook in React?**  
*Answer:* `useState` is a React Hook that adds state management to functional components. It returns an array with two elements: the current state value and a function to update it (e.g. `const [name, setName] = useState('')`).

**Q3: What is the difference between Props and State in React?**  
*Answer:* `Props` are read-only and passed from parent to child components, whereas `State` is local and managed internally within the component itself and can change over time.

**Q4: Why do we use the `key` prop when rendering lists in React?**  
*Answer:* The `key` prop gives each item a unique identifier, helping React's Virtual DOM identify which items have changed, been added, or been removed, which significantly improves rendering performance.

**Q5: What is JSX in React?**  
*Answer:* JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML directly inside JavaScript files, which is compiled into standard `React.createElement()` calls.
