import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    if (!title) return alert("Debes agregar una tarea"); // Validación básica

    const newTask = {
      title,
      completed: false,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/tasks`, newTask);
      addTask(response.data);
      setTitle('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default TaskForm;
