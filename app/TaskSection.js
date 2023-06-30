"use client";
import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: newTask, completed: false },
    ]);
    setNewTask('');
  };

  const handleTaskDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="inline-block items-center mb-4">
        <h2 className="text-5xl text-center font-serif text-black shadow-black shadow-md font-bold mb-4">Task Manager</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search tasks"
          className="mr-2  text-teal-600 rounded px-4 py-2 border-green-300 border-4  focus:outline-none"
        />
      </div>
      <form onSubmit={handleTaskSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow mr-2  text-teal-600 border-green-300 border-4 rounded px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white-600 rounded px-4 py-2"
        >
          Add Task
        </button>
      </form>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`${
              task.completed ? 'line-through text-gray-500' : ''
            } flex items-center justify-between mb-2`}
          >
            {task.name}
            <div className='border-3 border-red-600'>
              <button
                onClick={() => handleTaskDelete(task.id)}
                className="text-red-500 p-2 rounded-lg hover:text-red-600 shadow-lg shadow-red-500 m-5 "
              >
                Delete
              </button>
              {!task.completed && (
                <button
                  onClick={() => handleTaskComplete(task.id)}
                  className="text-green-800 p-2 rounded-lg hover:text-green-600 ml-10 shadow-lg shadow-lime-400"
                >
                  Complete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
