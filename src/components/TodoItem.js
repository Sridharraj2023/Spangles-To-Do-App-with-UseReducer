import React, { useState } from 'react';
import { toast } from 'react-toastify';

function TodoItem({ todo, dispatch }) {
  // Local state for managing edit mode and edited text
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Handle saving edited text
  const handleEdit = () => {
    if (editText.trim() !== '') {
      dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: editText } });
      toast.success('To-Do updated!');
      setIsEditing(false); // Exit edit mode
    }
  };

  // Handle toggling completed state
  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    toast.success(todo.completed ? 'Marked as incomplete' : 'Marked as complete');
  };

  // Handle delete
  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
    toast.info('To-Do deleted');
  };

  return (
    // Bootstrap list item with flex styling for content alignment
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow rounded-3 py-3">
      {isEditing ? (
        <>
          {/* Input field for editing the todo text */}
          <input
            type="text"
            className="form-control me-2"
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          {/* Save button */}
          <button className="btn btn-success btn-sm me-2" onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          {/* Todo text, click to toggle completion */}
          <span
            onClick={handleToggle}
            style={{ cursor: 'pointer' }}
            className={`flex-grow-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
          >
            {todo.text}
          </span>

          {/* Edit and Delete buttons */}
          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
