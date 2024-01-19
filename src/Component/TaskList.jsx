// TaskList.js
import React from 'react';
import './Style.css';
import useTaskStore from '../Store/taskStore';

const TaskList = () => {
  const { tasks, removeTask, clearTasks } = useTaskStore();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <p>{task.time}</p>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearTasks}>Clear All Tasks</button>
    </div>
  );
};

export default TaskList;
