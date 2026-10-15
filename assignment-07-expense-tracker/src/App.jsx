import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseSummary from './components/ExpenseSummary.jsx';
import ExpenseList from './components/ExpenseList.jsx';

function App() {
  // Pre-loaded realistic student expenses
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: 'Full Stack Development Textbook',
      amount: 650,
      category: 'Education',
      date: '2026-10-10'
    },
    {
      id: 2,
      title: 'Monthly College Bus Pass',
      amount: 450,
      category: 'Transport',
      date: '2026-10-11'
    },
    {
      id: 3,
      title: 'College Cafeteria Lunch',
      amount: 120,
      category: 'Food',
      date: '2026-10-14'
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      amount: 780,
      category: 'Education',
      date: '2026-10-15'
    }
  ]);

  // Handler to add a new expense
  const handleAddExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  // Handler to delete an expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Personal Expense Tracker &amp; Analyzer</h1>
        <p>React Practical Lab — State Management, Analytics &amp; Lists</p>
      </header>

      <main className="main-content">
        {/* Top Grid: Form and Summary Analysis */}
        <div className="top-grid">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseSummary expenses={expenses} />
        </div>

        {/* Bottom Section: Full Expense Table */}
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2026 Personal Expense Tracker — Practical 07 Submission</p>
      </footer>
    </div>
  );
}

export default App;
