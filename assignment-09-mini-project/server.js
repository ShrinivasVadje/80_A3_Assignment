// =======================================================
// Assignment 9: Mini-Project CRUD REST API (Express.js)
// Reference: GeeksforGeeks Express CRUD REST API Implementation
// =======================================================

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initial Books Dataset (GeeksforGeeks Model)
let books = [
  {
    id: 1,
    title: "Full Stack Web Development",
    author: "Shrinivas Vadje",
    price: 550,
    category: "Computer Science"
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 890,
    category: "Software Engineering"
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 620,
    category: "Web Development"
  }
];

// -------------------------------------------------------
// REST API ENDPOINTS
// -------------------------------------------------------

// 1. READ ALL: GET /api/books
app.get('/api/books', (req, res) => {
  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  });
});

// 2. READ ONE: GET /api/books/:id
app.get('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with id ${id} not found`
    });
  }

  res.status(200).json({
    success: true,
    data: book
  });
});

// 3. CREATE: POST /api/books
app.post('/api/books', (req, res) => {
  const { title, author, price, category } = req.body;

  // Input Validation
  if (!title || !author || price === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Please provide title, author, and price.'
    });
  }

  // Generate unique ID
  const newId = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

  const newBook = {
    id: newId,
    title: title.trim(),
    author: author.trim(),
    price: Number(price),
    category: category || 'General'
  };

  books.push(newBook);

  res.status(201).json({
    success: true,
    message: 'Book record created successfully',
    data: newBook
  });
});

// 4. UPDATE: PUT /api/books/:id
app.put('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, price, category } = req.body;

  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with id ${id} not found`
    });
  }

  // Update fields
  books[bookIndex] = {
    ...books[bookIndex],
    title: title !== undefined ? title.trim() : books[bookIndex].title,
    author: author !== undefined ? author.trim() : books[bookIndex].author,
    price: price !== undefined ? Number(price) : books[bookIndex].price,
    category: category !== undefined ? category : books[bookIndex].category
  };

  res.status(200).json({
    success: true,
    message: `Book with id ${id} updated successfully`,
    data: books[bookIndex]
  });
});

// 5. DELETE: DELETE /api/books/:id
app.delete('/api/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with id ${id} not found`
    });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: `Book with id ${id} deleted successfully`,
    data: deletedBook
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Mini-Project CRUD REST API running at http://localhost:${PORT}`);
});
