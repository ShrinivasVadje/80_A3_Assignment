// =======================================================
// Assignment 3: Student Result Management System (JavaScript)
// =======================================================

// Array to store student objects
let students = [
  {
    name: "Aarav Sharma",
    rollNo: "24BIT01",
    marks1: 85,
    marks2: 90,
    marks3: 88,
    total: 263,
    percentage: 87.67,
    status: "Pass"
  },
  {
    name: "Sneha Patil",
    rollNo: "24BIT02",
    marks1: 92,
    marks2: 95,
    marks3: 94,
    total: 281,
    percentage: 93.67,
    status: "Pass"
  },
  {
    name: "Rohan Deshmukh",
    rollNo: "24BIT03",
    marks1: 45,
    marks2: 32,
    marks3: 50,
    total: 127,
    percentage: 42.33,
    status: "Fail"
  }
];

// Get form element and attach submit event listener
const studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", addStudent);

// Function to add a new student from form input
function addStudent(event) {
  // Prevent page refresh on form submit
  event.preventDefault();

  // Read input values
  const name = document.getElementById("name").value.trim();
  const rollNo = document.getElementById("rollNo").value.trim();
  const marks1 = parseFloat(document.getElementById("marks1").value);
  const marks2 = parseFloat(document.getElementById("marks2").value);
  const marks3 = parseFloat(document.getElementById("marks3").value);

  // Validate marks range (0 to 100)
  if (marks1 < 0 || marks1 > 100 || marks2 < 0 || marks2 > 100 || marks3 < 0 || marks3 > 100) {
    alert("Marks must be between 0 and 100!");
    return;
  }

  // Calculate total and percentage
  const total = marks1 + marks2 + marks3;
  const percentage = parseFloat(((total / 300) * 100).toFixed(2));

  // Determine Pass or Fail (Passing marks = 40 in each subject)
  let status = "Pass";
  if (marks1 < 40 || marks2 < 40 || marks3 < 40) {
    status = "Fail";
  }

  // Create student object
  const newStudent = {
    name: name,
    rollNo: rollNo,
    marks1: marks1,
    marks2: marks2,
    marks3: marks3,
    total: total,
    percentage: percentage,
    status: status
  };

  // Add object to students array
  students.push(newStudent);

  // Reset form inputs
  studentForm.reset();

  // Update table and topper display
  displayStudents();
}

// Function to find the student with highest percentage
function findTopper() {
  if (students.length === 0) {
    document.getElementById("topperText").innerHTML = "No student records available.";
    return null;
  }

  // Standard loop to find maximum percentage
  let topper = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].percentage > topper.percentage) {
      topper = students[i];
    }
  }

  // Update Topper Banner
  document.getElementById("topperText").innerHTML = 
    topper.name + " (" + topper.rollNo + ") with " + topper.percentage + "% (Total: " + topper.total + "/300)";

  return topper.rollNo;
}

// Function to render student records in the HTML table
function displayStudents() {
  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  // Find topper roll number so we can highlight the row
  const topperRoll = findTopper();

  // Loop through all students and create table rows
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const row = document.createElement("tr");

    // Highlight row if this student is the topper
    if (student.rollNo === topperRoll) {
      row.className = "topper-row";
    }

    // Status badge class
    const badgeClass = student.status === "Pass" ? "badge-pass" : "badge-fail";

    row.innerHTML = `
      <td>${student.rollNo}</td>
      <td>${student.name} ${student.rollNo === topperRoll ? "👑" : ""}</td>
      <td>${student.marks1}</td>
      <td>${student.marks2}</td>
      <td>${student.marks3}</td>
      <td><strong>${student.total}</strong></td>
      <td>${student.percentage}%</td>
      <td><span class="${badgeClass}">${student.status}</span></td>
      <td>
        <button class="btn-delete" onclick="deleteStudent(${i})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  }
}

// Function to delete a student record by index
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this record?")) {
    students.splice(index, 1);
    displayStudents();
  }
}

// Initial display on page load
displayStudents();
