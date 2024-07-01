import React from 'react';

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'task-completed' : ''}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-buttons">
        <button className="btn btn-danger" onClick={() => deleteTask(task._id)}>Eliminar</button>
        <button className="btn btn-primary" onClick={() => completeTask(task._id)}>
          {task.completed ? 'Hecho' : 'Por hacer'}
        </button>
      </div>
    </li>
  );
};

export default Task;

