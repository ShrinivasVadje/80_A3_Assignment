import React from 'react';

// ExpenseList Component: Displays the table of recorded expenses
function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="card table-card">
      <h2>Recorded Expenses History</h2>

      {expenses.length === 0 ? (
        <p className="no-data">No expenses recorded yet. Use the form above to add an expense.</p>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.date}</td>
                  <td><strong>{expense.title}</strong></td>
                  <td>
                    <span className={`cat-tag cat-${expense.category.toLowerCase()}`}>
                      {expense.category}
                    </span>
                  </td>
                  <td>₹{expense.amount.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => onDeleteExpense(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
