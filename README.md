# 📝 React To-Do List App with useReducer, Bootstrap, and Toasts

This is a clean, responsive To-Do List application built with **React**, using **useReducer** for state management and styled with **Bootstrap 5**. It also includes **react-toastify** for toast notifications on all key actions.

## 🚀 Live Demo

[Click here to view the deployed app](https://your-netlify-link.netlify.app)

## 📦 Features

### ✅ Core Functionalities

- **Add a To-Do**
  - Enter text and hit "Add"
  - Validates empty inputs and shows error message if blank

- **Edit a To-Do**
  - Click "Edit", update the text, and hit "Save"
  - Uses toast to confirm successful update

- **Delete a To-Do**
  - Instantly remove a To-Do from the list
  - Shows toast notification on deletion

- **Toggle Completion**
  - Click the text to mark it as complete/incomplete
  - Line-through style and toast confirms status change

### 🛠️ State Management

- Uses **`useReducer`** to manage To-Do list actions:
  - `ADD_TODO`
  - `DELETE_TODO`
  - `TOGGLE_TODO`
  - `EDIT_TODO`

### 💄 UI Styling

- Bootstrap 5 for responsive, clean UI
- Custom shadows, spacing, and radius using Bootstrap utility classes

### 🔔 Toast Notifications

- `react-toastify` integrated for alerts:
  - On adding, editing, deleting, and toggling todos
  - Positioned at top-center with auto-dismiss

## 🗂️ Folder Structure

client/
├── public/
├── src/
│ ├── components/
│ │ ├── TodoForm.js
│ │ ├── TodoItem.js
│ │ └── TodoList.js
│ ├── reducer/
│ │ └── todoReducer.js
│ ├── App.js
│ ├── App.css
│ └── index.js
└── README.md 


## 🧩 Libraries Used

- React
- Bootstrap
- React Toastify

## 🛠️ Installation

```bash
cd client
npm install
npm start

🚀 Deployment
Frontend deployed to Netlify

Build with:

bash
Copy
Edit
npm run build
Drag the /build folder into Netlify

🤝 Author
Sridhar R.
GitHub: @Sridharraj2023
