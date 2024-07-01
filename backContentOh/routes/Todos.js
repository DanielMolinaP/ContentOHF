const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Obtener todas las tareas
router.get('/tasks', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send('Error al obtener las tareas');
  }
});

// Agregar una nueva tarea
router.post('/tasks', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send('El título es requerido');
  try {
    const newTodo = new Todo({
      title
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(500).send('Error al agregar la tarea');
  }
});

// Marcar una tarea como completada
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).send('Tarea no encontrada');
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send('Error al actualizar la tarea');
  }
});

// Eliminar una tarea
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.send('Tarea eliminada');
  } catch (err) {
    res.status(500).send('Error al eliminar la tarea');
  }
});

module.exports = router;
