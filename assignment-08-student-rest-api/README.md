# Practical 8: Student Records CRUD REST API using Node.js, Express.js & MongoDB

## 1. Aim
To develop a basic RESTful API using Node.js, Express.js, and MongoDB to manage student records, implementing Create, Read, Update, and Delete (CRUD) operations, and testing all API endpoints using Postman.

---

## 2. Software & Technologies Used
- **Runtime Environment:** Node.js (v18+)
- **Backend Framework:** Express.js (v4)
- **Database:** MongoDB (Local or MongoDB Atlas)
- **Object Data Modeling (ODM):** Mongoose (v8)
- **API Testing Tool:** Postman / cURL / Node Fetch
- **Middleware:** CORS & Express JSON parser

---

## 3. Theory in Simple Words

### What is a REST API?
REST (Representational State Transfer) is an architectural style for building web services. In a REST API, client applications (browsers, mobile apps, or Postman) communicate with a server by exchanging JSON data over HTTP.

### HTTP Methods & CRUD Mapping:
| CRUD Operation | HTTP Method | Route Endpoint | Purpose |
| :--- | :--- | :--- | :--- |
| **Create** | `POST` | `/api/students` | Inserts a new student record into the database. |
| **Read (All)** | `GET` | `/api/students` | Fetches an array of all student records. |
| **Read (One)** | `GET` | `/api/students/:id` | Fetches details of a specific student by ID. |
| **Update** | `PUT` | `/api/students/:id` | Updates fields (name, marks, etc.) of an existing student. |
| **Delete** | `DELETE` | `/api/students/:id` | Deletes a student record permanently by ID. |

### MongoDB & Mongoose:
- **MongoDB:** A NoSQL document-oriented database that stores records as flexible JSON-like BSON documents.
- **Mongoose:** A Node.js library that models application data with schemas, types, and built-in validations.

---

## 4. Step-by-Step Procedure
1. Create a project directory named `assignment-08-student-rest-api`.
2. Initialize Node project with `package.json` and install dependencies:
   ```bash
   npm install express mongoose cors
   ```
3. In `server.js`, configure Express middleware:
   ```javascript
   app.use(cors());
   app.use(express.json());
   ```
4. Define Student Mongoose Schema:
   - `rollNo`: String (required, unique)
   - `name`: String (required)
   - `department`: String (required)
   - `marks`: Number (required)
5. Implement the 5 REST routes using `async/await` and standard HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`).
6. Configure automated fallback for zero-dependency local testing.
7. Test all 5 endpoints using Postman or the automated test suite `node test-api.js`.

---

## 5. Postman Testing Guide

You can import [`postman-collection.json`](file:///c:/Users/SHRINIVAS/OneDrive/VSEC/assignment-08-student-rest-api/postman-collection.json) directly into Postman, or test manually:

### 1. GET All Students
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/students`
- **Expected Status:** `200 OK`
- **Expected Response:**
  ```json
  [
    {
      "_id": "1",
      "rollNo": "24BIT01",
      "name": "Shrinivas Vadje",
      "department": "Information Technology",
      "marks": 92
    }
  ]
  ```

### 2. POST Create Student
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/students`
- **Headers:** `Content-Type: application/json`
- **Request Body (raw JSON):**
  ```json
  {
    "rollNo": "24BIT05",
    "name": "Neha Sharma",
    "department": "Information Technology",
    "marks": 94
  }
  ```
- **Expected Status:** `201 Created`

### 3. GET Student by ID
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/students/1`
- **Expected Status:** `200 OK`

### 4. PUT Update Student
- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/students/1`
- **Headers:** `Content-Type: application/json`
- **Request Body (raw JSON):**
  ```json
  {
    "marks": 98
  }
  ```
- **Expected Status:** `200 OK`

### 5. DELETE Student
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/api/students/1`
- **Expected Status:** `200 OK`

---

## 6. How to Run
```bash
# 1. Navigate to assignment folder
cd assignment-08-student-rest-api

# 2. Install dependencies
npm install

# 3. Start the REST API server
npm start

# 4. In a second terminal, run automated tests
npm test
```

---

## 7. Expected Output
- Terminal logs: `🚀 Student REST API server running at http://localhost:5000`.
- Running `npm test` outputs:
  ```text
  1. Testing GET /api/students -> Status: 200 OK
  2. Testing POST /api/students -> Status: 201 CREATED
  3. Testing GET /api/students/:id -> Status: 200 OK
  4. Testing PUT /api/students/:id -> Status: 200 OK
  5. Testing DELETE /api/students/:id -> Status: 200 OK
  🎉 ALL 5 CRUD REST API OPERATIONS PASSED SUCCESSFULLY!
  ```

---

## 8. Result
The Student Records CRUD REST API was successfully implemented using Node.js, Express.js, and MongoDB/Mongoose, and all endpoints were verified.

---

## 9. Viva Questions & Answers

**Q1: What is the purpose of `express.json()` middleware?**  
*Answer:* It parses incoming HTTP request bodies containing JSON data and populates `req.body` with JavaScript objects.

**Q2: What is the difference between `PUT` and `POST` in REST APIs?**  
*Answer:* `POST` is used to create a new resource on the server. `PUT` is used to update an existing resource or replace it entirely.

**Q3: What are HTTP status codes 200, 201, 400, and 404?**  
*Answer:*
- `200 OK`: Standard successful request.
- `201 Created`: The request succeeded and a new resource was created.
- `400 Bad Request`: The server cannot process the request due to client error (e.g. missing fields).
- `404 Not Found`: The requested resource or endpoint does not exist.

**Q4: What is Mongoose Schema and Model?**  
*Answer:* A `Schema` defines the structure, fields, and data types of documents in a MongoDB collection. A `Model` is a compiled constructor wrapper that provides methods to create, query, update, and delete documents in the collection.

**Q5: What is CORS and why is it needed?**  
*Answer:* CORS (Cross-Origin Resource Sharing) is a security mechanism that restricts a web page on one domain/port from making AJAX requests to a different domain/port. The `cors` middleware enables clients (such as React apps on port 5173) to communicate with our Express server on port 5000.
