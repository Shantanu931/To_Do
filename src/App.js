//import logo from './logo.svg';
//import './App.css';
import TodoApp from './components/TodoApp';
import { Routes, Route } from 'react-router-dom';
import TaskSummary from './components/TaskSummary';
function App() {
  return (
   <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/summary" element={<TaskSummary />} />
    </Routes>
);}

export default App;

   

