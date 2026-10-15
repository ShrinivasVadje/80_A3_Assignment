# Practical 7: Personal Expense Tracker & Analyzer in React

## 1. Aim
To develop a React application to record and analyze personal expenses, displaying individual expenditure records in a structured table and calculating aggregate statistics such as total expenditure and category-wise spending distribution.

---

## 2. Software & Tools Required
- **Framework / Library:** React 18
- **Build Tool:** Vite
- **Runtime Environment:** Node.js (v18+) & npm
- **Editor:** Visual Studio Code / Antigravity IDE
- **Browser:** Google Chrome / Edge / Firefox

---

## 3. Theory in Simple Words

### What is State-Driven Analytics in React?
In React, when data changes in `state` (such as adding or deleting an expense), React automatically recalculates all derived values (like total sum, percentage distribution, and counts) and updates the UI without manual DOM operations.

### Key Features Implemented:
1. **Expense Recording:** Accepts title, amount (₹), category (Food, Education, Transport, Entertainment, Other), and date.
2. **Aggregations & Analysis:**
   - $\text{Total Expenses} = \sum \text{amount}$
   - $\text{Category Percentage} = \left(\frac{\text{Category Total}}{\text{Total Expenses}}\right) \times 100$
   - Highest single recorded expenditure.
3. **Component Breakdown:**
   - `<ExpenseForm />`: Controlled form handling input validation and new expense creation.
   - `<ExpenseSummary />`: Analytical dashboard showing total expenditure and visual progress bars for each category.
   - `<ExpenseList />`: Formatted history table with category badges and deletion capabilities.

---

## 4. Algorithm / Step-by-Step Procedure
1. Create a React Vite project in folder `assignment-07-expense-tracker`.
2. In `App.jsx`, declare the root state `const [expenses, setExpenses] = useState([...])` with sample student expenses.
3. Build `ExpenseForm.jsx`:
   - Use `useState` to bind `title`, `amount`, `category`, and `date`.
   - Validate that title is non-empty and amount is greater than 0.
   - On submit, call `onAddExpense(newExpense)` and reset inputs.
4. Build `ExpenseSummary.jsx`:
   - Loop through the `expenses` array to compute total amount and maximum expense.
   - Group expenditures by category (`Food`, `Education`, etc.) and compute percentage share.
   - Render metric boxes and percentage progress bars.
5. Build `ExpenseList.jsx`:
   - Render a table showing Date, Description, Category badge, Amount (₹), and a Delete button.
6. In `App.jsx`, implement `handleAddExpense` (prepends new expense) and `handleDeleteExpense` (filters out by ID).
7. Run `npm install` and `npm run dev` to launch the application.

---

## 5. Components Explained
- `ExpenseForm.jsx`: A controlled form component that captures new expenses, validates input, and delegates state updates to the parent component.
- `ExpenseSummary.jsx`: Analyzes the expense dataset by summing costs and rendering comparative category-wise progress bars.
- `ExpenseList.jsx`: Displays historical transaction rows with color-coded category tags and allows row deletion.
- `App.jsx`: Root container holding the primary state and wiring all three components together.

---

## 6. How to Run
```bash
# 1. Navigate to the assignment folder
cd assignment-07-expense-tracker

# 2. Install dependencies (React and Vite)
npm install

# 3. Start the local development server
npm run dev
```
Open `http://localhost:5174` in your browser.

---

## 7. Expected Output
- **Top Section:**
  - An entry form on the left to record new expenses with title, amount, category, and date.
  - An analysis panel on the right showing Total Spent, Total Records, and Highest Expense, plus category progress bars.
- **Bottom Section:**
  - A clean table pre-loaded with sample expenses (Textbook, Bus Pass, Cafeteria Lunch, Calculator) showing formatted currency and category tags.
- Adding or deleting any record instantly recalculates total spending and updates category percentages in real-time.

---

## 8. Result
The Personal Expense Tracker and Analyzer application was successfully built and tested in React, fulfilling all requirements for expense recording, tabular display, and analytical summaries.

---

## 9. Viva Questions & Answers

**Q1: How do you pass data from a child component back up to a parent component in React?**  
*Answer:* By passing a callback function from parent to child as a prop (e.g. `<ExpenseForm onAddExpense={handleAddExpense} />`). The child component executes this function with the data as an argument.

**Q2: What is an immutable state update in React?**  
*Answer:* State should never be modified directly (e.g. `expenses.push(newExp)` is wrong). Instead, we use the spread operator (`setExpenses([newExp, ...expenses])`) to create and set a brand new array reference.

**Q3: How does the `.filter()` method help in deleting an item from state?**  
*Answer:* `.filter((item) => item.id !== id)` returns a new array containing all elements except the one matching the given ID, which is then passed to `setExpenses()`.

**Q4: What is the purpose of controlled inputs in React?**  
*Answer:* An input whose value is controlled by React state (`value={title}` and `onChange={(e) => setTitle(e.target.value)}`). This ensures React remains the single source of truth for input values.

**Q5: How can category totals be computed from an array of objects in JavaScript?**  
*Answer:* By iterating through the array with a `for` loop, `forEach()`, or `.reduce()`, checking if `expense.category === targetCategory`, and summing the amounts.
