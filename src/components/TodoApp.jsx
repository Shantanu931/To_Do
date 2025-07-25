import React, { useState , useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';



const TodoApp = () => {
    const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
  });
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  const addTask = (text) => {
    if (text.trim() === '') return;
    setTasks((prevTasks) => [...prevTasks, {
         id: Date.now(), 
         text ,
        completed : false ,          // new variable checking if task is completed or not
        },]);     //addition of prevlist into new list , date.mpw gives unique value
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) =>{
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id? {...task,completed:!task.completed}:task
)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          📝 To-Do App
        </h1>
        <TodoInput onAdd={addTask} />
        <TodoList
         tasks={tasks}
          onDelete={removeTask}
          onToggle = {toggleComplete}/> 
        <button onClick= {()=> navigate('/summary',{state : {tasks}})}
         className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
         >
        📊 View Task Summary
         </button>
        
       
      </div>
    </div>
  );
};

export default TodoApp;
