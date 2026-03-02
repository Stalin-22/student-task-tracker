require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// Routes
app.get('/', (req, res) => {
  res.send("Student Task Tracker API is running");
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };
  tasks.push(task);
  res.status(201).json(task);
});

// ✅ Define port AFTER everything
const port = process.env.PORT || 5000;

// ✅ Listen at the end
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});