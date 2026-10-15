import React, { useState } from 'react';
import StudentForm from './components/StudentForm.jsx';
import StudentDetails from './components/StudentDetails.jsx';

function App() {
  // Initial sample data so the app displays working records immediately
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Shrinivas Vadje',
      rollNumber: '24BIT01',
      department: 'Information Technology',
      marks: 92
    },
    {
      id: 2,
      name: 'Pooja Kulkarni',
      rollNumber: '24BIT02',
      department: 'Computer Science',
      marks: 85
    }
  ]);

  // Handler to add a new student
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Handler to delete a student
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Student Information Application</h1>
        <p>React Practical Lab — Functional Components &amp; State</p>
      </header>

      {/* Main Content Layout */}
      <main className="content-layout">
        {/* Component 1: Form to accept student details */}
        <StudentForm onAddStudent={handleAddStudent} />

        {/* Component 2: Displays submitted student information */}
        <StudentDetails
          students={students}
          onDeleteStudent={handleDeleteStudent}
        />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2026 Student Information App — Practical 06 Submission</p>
      </footer>
    </div>
  );
}

export default App;
