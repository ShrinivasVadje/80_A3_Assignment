import React, { useState } from 'react';

// ExpenseForm Component: Captures title, amount, category and date
function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !amount || Number(amount) <= 0) {
      setError('Please provide a valid expense title and positive amount.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      category: category,
      date: date
    };

    onAddExpense(newExpense);

    // Reset Form
    setTitle('');
    setAmount('');
    setCategory('Food');
    setError('');
  };

  return (
    <div className="card form-card">
      <h2>Record New Expense</h2>

      {error && <p className="error-alert">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Expense Title / Description:</label>
          <input
            type="text"
            placeholder="e.g. Textbook, Cafeteria, Bus Pass"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Amount (₹):</label>
          <input
            type="number"
            min="1"
            step="any"
            placeholder="e.g. 250"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food &amp; Dining</option>
            <option value="Education">Education &amp; Books</option>
            <option value="Transport">Travel &amp; Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other Expenses</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Expense:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
