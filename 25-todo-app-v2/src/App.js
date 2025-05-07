import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
   const [todos, setTodos] = useState([]);

   const addTodoHandler = (text) => {
      const newTodo = { text: text, isCompleted: false, id: 0 };
      setTodos([...todos, newTodo]);
   };

   const deleteTodoHandler = (index) => {
      setTodos(todos.filter((_, idx) => idx !== index));
   };

   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm addTodo={addTodoHandler} />
         <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
   );
}

export default App;
