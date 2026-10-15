import React from 'react';

// StudentDetails Component: Displays submitted student information in a formatted layout
function StudentDetails({ students, onDeleteStudent }) {
  return (
    <div className="card table-card">
      <h2>Submitted Student Details</h2>

      {students.length === 0 ? (
        <p className="no-data">No student records submitted yet.</p>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Marks</th>
                <th>Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const isPass = student.marks >= 40;
                return (
                  <tr key={student.id}>
                    <td><strong>{student.rollNumber}</strong></td>
                    <td>{student.name}</td>
                    <td>{student.department}</td>
                    <td>{student.marks}/100</td>
                    <td>
                      <span className={isPass ? 'badge badge-pass' : 'badge badge-fail'}>
                        {isPass ? 'Pass' : 'Fail'}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => onDeleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
