const express = require('express'); 
const app = express(); 
app.use(express.json()); 
let tasks = []; 
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
res.json(task); 
}); 
app.put('/tasks/:id', (req, res) => { 
const task = tasks.find(t => t.id == req.params.id); 
if (task) { 
task.completed = true; 
res.json(task); 
} else { 
res.status(404).send("Task not found"); 
} 
}); 
app.delete('/tasks/:id', (req, res) => { 
tasks = tasks.filter(t => t.id != req.params.id); 
res.send("Task deleted"); 
}); 
app.listen(5000, () => {
  console.log("Server running on port 5000");
});