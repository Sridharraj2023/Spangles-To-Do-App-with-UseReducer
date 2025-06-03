import React, { useState } from 'react';
import { toast } from 'react-toastify';


function TodoForm({ dispatch }) {
  // Local state for input text and error message
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Basic validation for empty input
    if (text.trim() === '') {
       toast.error('To-Do cannot be empty.');
      return;
    }

    // Dispatch action to add a new todo
    dispatch({
      type: 'ADD_TODO',
      payload: { id: Date.now(), text, completed: false },
      
    });

    toast.success('To-Do added successfully!');

    // Reset input and error
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3 rounded-3">
      <input
        type="text"
        className="form-control shadow"
        placeholder="Add a to-do"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Add</button>

      {/* Show error if input is empty */}
      {error && <div className="alert alert-danger p-2">{error}</div>}
    </form>
  );
}

export default TodoForm;
