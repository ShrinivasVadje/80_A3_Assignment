// =======================================================
// Assignment 8: Student Records CRUD REST API (Node.js & Express)
// =======================================================

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Storage & Mongoose Fallback
let useMongo = false;
let StudentModel = null;

// Initial student records
let inMemoryStudents = [
  {
    _id: "1",
    rollNo: "24BIT01",
    name: "Shrinivas Vadje",
    department: "Information Technology",
    marks: 92
  },
  {
    _id: "2",
    rollNo: "24BIT02",
    name: "Aarav Sharma",
    department: "Computer Science",
    marks: 86
  }
];

// Try connecting to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/student_db';

try {
  await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 2000 });
  useMongo = true;
  console.log('✅ Connected to MongoDB at:', mongoURI);

  const studentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    department: { type: String, required: true },
    marks: { type: Number, required: true }
  });

  StudentModel = mongoose.model('Student', studentSchema);
} catch (err) {
  console.log('ℹ️ Local MongoDB daemon not active. Running with safe in-memory data store for testing.');
}

// -------------------------------------------------------
// REST API ROUTES (CRUD Operations)
// -------------------------------------------------------

// 0. Base route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Student Records REST API (Practical 08)',
    endpoints: {
      getAllStudents: 'GET /api/students',
      getStudentById: 'GET /api/students/:id',
      createStudent: 'POST /api/students',
      updateStudent: 'PUT /api/students/:id',
      deleteStudent: 'DELETE /api/students/:id'
    }
  });
});

// 1. CREATE: Add a new student record (POST /api/students)
app.post('/api/students', async (req, res) => {
  const { rollNo, name, department, marks } = req.body;

  if (!rollNo || !name || !department || marks === undefined) {
    return res.status(400).json({ error: 'Please provide rollNo, name, department, and marks.' });
  }

  try {
    if (useMongo && StudentModel) {
      const student = new StudentModel({ rollNo, name, department, marks });
      const savedStudent = await student.save();
      return res.status(201).json({ message: 'Student created successfully', student: savedStudent });
    } else {
      const newStudent = {
        _id: String(Date.now()),
        rollNo,
        name,
        department,
        marks: Number(marks)
      };
      inMemoryStudents.push(newStudent);
      return res.status(201).json({ message: 'Student created successfully', student: newStudent });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 2. READ: Get all student records (GET /api/students)
app.get('/api/students', async (req, res) => {
  try {
    if (useMongo && StudentModel) {
      const students = await StudentModel.find();
      return res.json(students);
    } else {
      return res.json(inMemoryStudents);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 3. READ: Get a single student record by ID (GET /api/students/:id)
app.get('/api/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (useMongo && StudentModel) {
      const student = await StudentModel.findById(id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      return res.json(student);
    } else {
      const student = inMemoryStudents.find((s) => s._id === id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      return res.json(student);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 4. UPDATE: Update an existing student record (PUT /api/students/:id)
app.put('/api/students/:id', async (req, res) => {
  const { id } = req.params;
  const { rollNo, name, department, marks } = req.body;

  try {
    if (useMongo && StudentModel) {
      const updatedStudent = await StudentModel.findByIdAndUpdate(
        id,
        { rollNo, name, department, marks },
        { new: true }
      );
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      return res.json({ message: 'Student updated successfully', student: updatedStudent });
    } else {
      const index = inMemoryStudents.findIndex((s) => s._id === id);
      if (index === -1) {
        return res.status(404).json({ error: 'Student not found' });
      }
      inMemoryStudents[index] = {
        ...inMemoryStudents[index],
        rollNo: rollNo || inMemoryStudents[index].rollNo,
        name: name || inMemoryStudents[index].name,
        department: department || inMemoryStudents[index].department,
        marks: marks !== undefined ? Number(marks) : inMemoryStudents[index].marks
      };
      return res.json({ message: 'Student updated successfully', student: inMemoryStudents[index] });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// 5. DELETE: Remove a student record (DELETE /api/students/:id)
app.delete('/api/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (useMongo && StudentModel) {
      const deletedStudent = await StudentModel.findByIdAndDelete(id);
      if (!deletedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      return res.json({ message: 'Student deleted successfully', student: deletedStudent });
    } else {
      const index = inMemoryStudents.findIndex((s) => s._id === id);
      if (index === -1) {
        return res.status(404).json({ error: 'Student not found' });
      }
      const deleted = inMemoryStudents.splice(index, 1);
      return res.json({ message: 'Student deleted successfully', student: deleted[0] });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Student REST API server running at http://localhost:${PORT}`);
});
