import React from 'react';
import TodoItem from './TodoItem';


function TodoList({ todos, dispatch }) {
  // Show a message when the to-do list is empty
  if (todos.length === 0) {
    return <p className="empty-msg">No To-Dos yet. Add one!</p>;
  }

  return (
    <ul className="list-group">
      {/* Render each todo item using the TodoItem component */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TodoList;

