# Practical 9: Mini-Project — CRUD REST API using Express.js

## 1. Aim
To develop a complete, fully functional CRUD REST API using Node.js and Express.js based on the prescribed GeeksforGeeks reference architecture to perform Create, Read, Update, and Delete operations on an entity resource, complete with an interactive testing web dashboard.

**Reference:** [GeeksforGeeks REST API using Express to perform CRUD](https://www.geeksforgeeks.org/node-js/rest-api-using-the-express-to-perform-crud-create-readupdate-delete/)

---

## 2. Software & Technologies Used
- **Runtime Environment:** Node.js (v18+)
- **Server Framework:** Express.js (v4)
- **Middleware:** CORS (`cors`) & JSON Body Parser (`express.json()`)
- **Frontend / Client Dashboard:** HTML5, CSS3, Vanilla JS Fetch API
- **Testing Tools:** Postman / cURL / Automated Node Test Suite (`test-api.js`)

---

## 3. Theory in Simple Words

### What is CRUD in REST Architecture?
CRUD stands for the four basic operations of persistent storage:
1. **Create (`POST`):** Adding a new record to the collection. The server assigns an auto-generated unique identifier and responds with `201 Created`.
2. **Read (`GET`):** Retrieving all records or looking up a single record by its `:id`. Responds with `200 OK` or `404 Not Found`.
3. **Update (`PUT`):** Modifying the fields of an existing record matching the URL parameter `:id`. Responds with `200 OK` or `404 Not Found`.
4. **Delete (`DELETE`):** Removing a record by its `:id`. Responds with `200 OK` confirming deletion.

---

## 4. REST API Endpoints Specification

| Action | HTTP Method | Endpoint | Request Body (JSON) | Success Status |
| :--- | :--- | :--- | :--- | :--- |
| **Read All** | `GET` | `/api/books` | *None* | `200 OK` |
| **Read One** | `GET` | `/api/books/:id` | *None* | `200 OK` / `404 Not Found` |
| **Create** | `POST` | `/api/books` | `{ "title": "...", "author": "...", "price": 450, "category": "..." }` | `201 Created` |
| **Update** | `PUT` | `/api/books/:id` | `{ "title": "...", "author": "...", "price": 500 }` | `200 OK` |
| **Delete** | `DELETE` | `/api/books/:id` | *None* | `200 OK` |

---

## 5. Step-by-Step Procedure
1. Create a project folder named `assignment-09-mini-project`.
2. Initialize `package.json` with Express and CORS dependencies.
3. In `server.js`:
   - Initialize Express application.
   - Configure middleware: `express.json()`, `cors()`, and `express.static('public')`.
   - Seed an initial dataset array of book objects.
   - Implement the five CRUD route handlers (`GET /api/books`, `GET /api/books/:id`, `POST /api/books`, `PUT /api/books/:id`, `DELETE /api/books/:id`).
4. Build `public/index.html` with an interactive frontend that communicates with the API endpoints using the browser's `fetch()` API.
5. Create `test-api.js` to automate testing all five operations sequentially.
6. Run `npm install` and `npm start` to test the API via browser and terminal.

---

## 6. How to Run & Test

### Method 1: Interactive Browser Dashboard
```bash
# 1. Navigate to assignment folder
cd assignment-09-mini-project

# 2. Install dependencies
npm install

# 3. Start the Express server
npm start
```
Open **`http://localhost:5050`** in your browser. You can view the live books table, add books via the form, edit prices/titles, and delete records interactively!

### Method 2: Automated Terminal Test Suite
In a second terminal window:
```bash
npm test
```

---

## 7. Expected Output
- **Terminal Log:** `🚀 Mini-Project CRUD REST API running at http://localhost:5050`
- **Automated Test Results:**
  ```text
  1. Testing GET /api/books -> Status: 200 OK | Fetched 3 books
  2. Testing POST /api/books -> Status: 201 CREATED | ID: #4
  3. Testing GET /api/books/4 -> Status: 200 OK | Found: Design Patterns
  4. Testing PUT /api/books/4 -> Status: 200 OK | Updated Price: ₹920
  5. Testing DELETE /api/books/4 -> Status: 200 OK | Deleted Book: Design Patterns
  🎉 ALL 5 MINI-PROJECT CRUD REST API OPERATIONS PASSED SUCCESSFULLY!
  ```

---

## 8. Result
The Mini-Project REST API was successfully designed, implemented, and verified using Express.js according to the GeeksforGeeks reference specifications.

---

## 9. Viva Questions & Answers

**Q1: What is a RESTful resource?**  
*Answer:* A resource in REST is any piece of data or object that can be accessed and manipulated via a unique URI (e.g. `/api/books/1` represents the book resource with ID 1).

**Q2: What is the purpose of route parameters in Express (e.g. `:id`)?**  
*Answer:* Route parameters are named URL segments used to capture values at specific positions in the URL, accessed via `req.params.id`.

**Q3: How does `express.static()` work?**  
*Answer:* `express.static('public')` is a built-in middleware that serves static files (HTML, CSS, client-side JS, images) directly from a specified directory to the client browser.

**Q4: What is the difference between synchronous and asynchronous code in Node.js?**  
*Answer:* Synchronous code blocks the single-threaded event loop until an operation finishes. Asynchronous code (using Promises or `async/await`) executes non-blocking tasks in the background and returns results via callbacks, enabling high concurrency.

**Q5: Why is JSON the preferred format for REST APIs?**  
*Answer:* JSON (JavaScript Object Notation) is lightweight, text-based, human-readable, and natively supported by JavaScript and all modern programming languages.
