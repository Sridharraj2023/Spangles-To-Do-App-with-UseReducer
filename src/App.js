import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todoReducer from './reducer/todoReducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = [];

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React To-Do List with UseReducer</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;

