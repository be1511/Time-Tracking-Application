import React, { useState, useEffect } from 'react';
import './Timer.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useTaskStore from '../Store/taskStore';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleClose = () => {
    setShow(false);
    setNewTask('');
  };

  const handleShow = () => setShow(true);

  const handleAddTask = () => {
    const task = {
      id: new Date().getTime(),
      title: newTask,
      time: formatTime(time)
    };
    addTask(task);
    setIsRunning(false);
    setTime(0);
    handleClose();
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  // const handleSave = () => {
  //   setTasks((prevTasks) => [...prevTasks, formatTime(time)]);
  //   setIsRunning(false);
  //   setTime(0);
  // };

  return (
    <div className="timer-container">
      <div className="digital-clock">{formatTime(time)}</div>
      <div className="button-container">
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleShow}>Save</button>
      </div>
      {/* <div className="task-list">
        <h3>Saved Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div> */}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTask">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Timer;
