import React, { useState } from 'react';

// StudentForm Component: Accepts name, rollNumber, department, and marks
function StudentForm({ onAddStudent }) {
  // Simple state variables for form inputs
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [marks, setMarks] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !rollNumber.trim() || !department || marks === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (marks < 0 || marks > 100) {
      setErrorMessage('Marks must be between 0 and 100.');
      return;
    }

    // Create student object
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      rollNumber: rollNumber.trim(),
      department: department,
      marks: Number(marks)
    };

    // Pass new student to parent App component
    onAddStudent(newStudent);

    // Clear form inputs
    setName('');
    setRollNumber('');
    setDepartment('');
    setMarks('');
    setErrorMessage('');
  };

  return (
    <div className="card form-card">
      <h2>Add Student Information</h2>
      
      {errorMessage && <p className="error-alert">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            placeholder="e.g. 24BIT01"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">-- Select Department --</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="AI & Data Science">AI &amp; Data Science</option>
            <option value="Electronics & Telecom">Electronics &amp; Telecom</option>
          </select>
        </div>

        <div className="form-group">
          <label>Total Marks (out of 100):</label>
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Enter marks (0-100)"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Student Details
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
