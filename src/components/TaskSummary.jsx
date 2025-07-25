import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const TaskSummary = () => {

    const navigate = useNavigate();
    const {state} = useLocation();
    const tasks = state?.tasks ||[];
    const completed = tasks.filter((t) => t.completed);
    const incomplete = tasks.filter((t)=> !t.completed);

    return (
      <div className="min-h-screen bg-gray-100 p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to To-Do
      </button>

      <h2 className="text-2xl font-bold text-center mb-6">🧾 Task Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-700">✅ Completed</h3>
          <table className="w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="p-3">Task</th>
              </tr>
            </thead>
            <tbody>
              {completed.map((task) => (
                <tr key={task.id}>
                  <td className="p-3 border-t">{task.text}</td>
                </tr>
              ))}
              {completed.length === 0 && (
                <tr><td className="p-3 text-gray-500 italic">No completed tasks.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-red-700">❌ Incomplete</h3>
          <table className="w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-red-100 text-left">
                <th className="p-3">Task</th>
              </tr>
            </thead>
            <tbody>
              {incomplete.map((task) => (
                <tr key={task.id}>
                  <td className="p-3 border-t">{task.text}</td>
                </tr>
              ))}
              {incomplete.length === 0 && (
                <tr><td className="p-3 text-gray-500 italic">No incomplete tasks.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );


};


export default TaskSummary ;