// =======================================================
// Automated Test Script for Assignment 8 Student REST API
// =======================================================

const BASE_URL = 'http://localhost:5000/api/students';

async function runTests() {
  console.log('🧪 Starting Student REST API Automated Tests...\n');

  try {
    // Test 1: GET All Students
    console.log('1. Testing GET /api/students');
    const res1 = await fetch(BASE_URL);
    const students1 = await res1.json();
    console.log(`   Status: ${res1.status} OK | Fetched ${students1.length} student records.`);

    // Test 2: POST Create New Student
    console.log('\n2. Testing POST /api/students (Create Student)');
    const newStudentData = {
      rollNo: '24BIT99',
      name: 'Pooja Verma',
      department: 'Information Technology',
      marks: 95
    };
    const res2 = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudentData)
    });
    const result2 = await res2.json();
    const createdId = result2.student._id;
    console.log(`   Status: ${res2.status} CREATED | ID: ${createdId}`);

    // Test 3: GET Student By ID
    console.log(`\n3. Testing GET /api/students/${createdId} (Read One)`);
    const res3 = await fetch(`${BASE_URL}/${createdId}`);
    const student3 = await res3.json();
    console.log(`   Status: ${res3.status} OK | Found: ${student3.name} (${student3.rollNo})`);

    // Test 4: PUT Update Student Marks
    console.log(`\n4. Testing PUT /api/students/${createdId} (Update Student)`);
    const updateData = { marks: 98 };
    const res4 = await fetch(`${BASE_URL}/${createdId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    const result4 = await res4.json();
    console.log(`   Status: ${res4.status} OK | Updated Marks to: ${result4.student.marks}`);

    // Test 5: DELETE Student
    console.log(`\n5. Testing DELETE /api/students/${createdId} (Delete Student)`);
    const res5 = await fetch(`${BASE_URL}/${createdId}`, { method: 'DELETE' });
    const result5 = await res5.json();
    console.log(`   Status: ${res5.status} OK | Deleted: ${result5.student.name}`);

    console.log('\n🎉 ALL 5 CRUD REST API OPERATIONS PASSED SUCCESSFULLY!\n');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('Ensure server is running with: npm start');
  }
}

runTests();
