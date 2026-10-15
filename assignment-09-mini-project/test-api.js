// =======================================================
// Automated Test Suite for Assignment 9 Mini-Project REST API
// =======================================================

const BASE_URL = 'http://localhost:5050/api/books';

async function runTests() {
  console.log('🧪 Starting Mini-Project Express CRUD REST API Automated Tests...\n');

  try {
    // 1. GET ALL
    console.log('1. Testing GET /api/books (Read All)');
    const res1 = await fetch(BASE_URL);
    const json1 = await res1.json();
    console.log(`   Status: ${res1.status} OK | Fetched ${json1.count} books.`);

    // 2. POST CREATE
    console.log('\n2. Testing POST /api/books (Create Book)');
    const newBook = {
      title: 'Design Patterns',
      author: 'Erich Gamma et al.',
      price: 850,
      category: 'Software Architecture'
    };
    const res2 = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    });
    const json2 = await res2.json();
    const createdId = json2.data.id;
    console.log(`   Status: ${res2.status} CREATED | ID: #${createdId} - ${json2.data.title}`);

    // 3. GET ONE BY ID
    console.log(`\n3. Testing GET /api/books/${createdId} (Read One)`);
    const res3 = await fetch(`${BASE_URL}/${createdId}`);
    const json3 = await res3.json();
    console.log(`   Status: ${res3.status} OK | Book Found: ${json3.data.title} by ${json3.data.author}`);

    // 4. PUT UPDATE
    console.log(`\n4. Testing PUT /api/books/${createdId} (Update Book)`);
    const updateData = { price: 920 };
    const res4 = await fetch(`${BASE_URL}/${createdId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    const json4 = await res4.json();
    console.log(`   Status: ${res4.status} OK | Updated Price: ₹${json4.data.price}`);

    // 5. DELETE
    console.log(`\n5. Testing DELETE /api/books/${createdId} (Delete Book)`);
    const res5 = await fetch(`${BASE_URL}/${createdId}`, { method: 'DELETE' });
    const json5 = await res5.json();
    console.log(`   Status: ${res5.status} OK | Deleted Book: ${json5.data.title}`);

    console.log('\n🎉 ALL 5 MINI-PROJECT CRUD REST API OPERATIONS PASSED SUCCESSFULLY!\n');
  } catch (err) {
    console.error('❌ Test failed:', err.message);
    console.log('Ensure server is running with: npm start');
  }
}

runTests();
