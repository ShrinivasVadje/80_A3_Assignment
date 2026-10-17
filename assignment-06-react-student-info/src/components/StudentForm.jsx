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

    // 1. Check for empty fields
    if (!name.trim() || !rollNumber.trim() || !department || marks === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // 2. Validate Name: Must NOT contain numbers (alphabets and spaces only)
    if (/\d/.test(name)) {
      setErrorMessage('Student Name cannot contain numbers. Please enter letters only.');
      return;
    }

    // 3. Validate Roll Number: Must contain numbers/digits (e.g. 24BIT01 or 101)
    if (!/\d/.test(rollNumber)) {
      setErrorMessage('Roll Number must contain digits/numbers (e.g. 24BIT01 or 101).');
      return;
    }

    // 4. Validate Marks: Must be a number between 0 and 100
    const numericMarks = Number(marks);
    if (isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) {
      setErrorMessage('Marks must be a valid number between 0 and 100.');
      return;
    }

    // Create student object
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      rollNumber: rollNumber.trim().toUpperCase(),
      department: department,
      marks: numericMarks
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
          <label>Student Name (Letters only):</label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Roll Number (Must contain numbers):</label>
          <input
            type="text"
            placeholder="e.g. 24BIT01 or 101"
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
          <label>Total Marks (0 - 100):</label>
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
