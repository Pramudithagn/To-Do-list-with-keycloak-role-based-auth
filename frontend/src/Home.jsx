// import './App.css'
// import Todo from './components/Todo'

// function App() {
//   return (
//     <>
//       <Todo/>
//     </>
//   )
// }

// export default App
 
//=============================================================

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTodos, addTodo, deleteTodo, toggleTodo } from '../src/redux/actions';

// function App() {
//   const [newTodo, setNewTodo] = useState('');
//   const todos = useSelector(state => state.todos.todos);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   const handleAddTodo = () => {
//     dispatch(addTodo(newTodo));
//     setNewTodo('');
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleToggleTodo = (id, completed) => {
//     dispatch(toggleTodo(id, !completed));
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <span
//               style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//               onClick={() => handleToggleTodo(todo.id, todo.completed)}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//=============================================================

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from '../src/redux/actions';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import { BsPlus } from 'react-icons/bs';

function Home() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id, completed) => {
    dispatch(toggleTodo(id, !completed));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h1 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal TODO APP</h1>
      
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodo}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <FilterButtons />
      </div>

      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Home;
