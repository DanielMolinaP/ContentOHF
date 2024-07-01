import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './componets/TaskList';
import TaskForm from './componets/TaskForm';
import './App.css'; // Archivo para estilos personalizados

const API_BASE_URL = 'http://localhost:5000'; // Reemplaza con la URL de tu API backend

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  // Función para obtener las tareas desde el backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    }
  };

  // Función para agregar una nueva tarea
  const addTask = async (newTask) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/tasks`, newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    }
  };

  // Función para eliminar una tarea
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/tasks/${taskId}`);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    }
  };

  // Función para marcar una tarea como completada
  const completeTask = async (_id) => {
    try {
      await axios.put(`${API_BASE_URL}/api/tasks/${_id}`);
      const updatedTasks = tasks.map((task) => {
        if (task.id === _id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error completing task:', error);
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Lista de Tareas</h3>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
