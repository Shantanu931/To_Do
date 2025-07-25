import React from 'react';

const TodoList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => onToggle(task.id)}   //Toggle on Click
          className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
          ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}
        >
         
        <span
           className={`text-gray-800 flex-1 ${
                task.completed ? 'line-through opacity-50' : ''
            }`}
  >
    {task.text}
  </span>
          <button
            onClick={(e) =>{ 
                e.stopPropagation();
                onDelete(task.id)}}
            className="text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
