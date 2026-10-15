import React from 'react';

// ExpenseSummary Component: Analyzes recorded expenses and displays summary metrics
function ExpenseSummary({ expenses }) {
  // 1. Calculate Total Expenses
  let total = 0;
  let highest = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
    if (expenses[i].amount > highest) {
      highest = expenses[i].amount;
    }
  }

  // 2. Categories to analyze
  const categories = ['Food', 'Education', 'Transport', 'Entertainment', 'Other'];

  // Calculate category totals
  const categoryTotals = categories.map((cat) => {
    let catSum = 0;
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].category === cat) {
        catSum += expenses[i].amount;
      }
    }
    const percent = total > 0 ? ((catSum / total) * 100).toFixed(1) : 0;
    return { category: cat, total: catSum, percent: percent };
  });

  return (
    <div className="card summary-card">
      <h2>Expense Analysis &amp; Overview</h2>

      {/* Top Metrics */}
      <div class="metrics-row">
        <div className="metric-box">
          <span className="metric-label">Total Spent</span>
          <span className="metric-val">₹{total.toFixed(2)}</span>
        </div>
        <div className="metric-box">
          <span className="metric-label">Total Records</span>
          <span className="metric-val">{expenses.length}</span>
        </div>
        <div className="metric-box">
          <span className="metric-label">Highest Expense</span>
          <span className="metric-val">₹{highest.toFixed(2)}</span>
        </div>
      </div>

      {/* Category Breakdown */}
      <h3 className="subheading">Spending by Category</h3>
      <div className="breakdown-list">
        {categoryTotals.map((item) => (
          <div key={item.category} className="breakdown-item">
            <div className="breakdown-header">
              <span><strong>{item.category}</strong></span>
              <span>₹{item.total.toFixed(2)} ({item.percent}%)</span>
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fill"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseSummary;
