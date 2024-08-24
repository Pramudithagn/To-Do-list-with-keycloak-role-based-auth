// import { useSelector } from "react-redux";
// import TodoItem from "./TodoItem";

// const TodoList = () => {
//   const filteredTodos = useSelector((state) => {
//     const todos = state.todos;
//     const filter = state.filter;
//     const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

//     return todos.filter((todo) => {
//       const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
//         (filter === 'INCOMPLETE' && !todo.completed) ||
//         filter === 'ALL';

//       const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

//       return matchesFilter && matchesSearch;
//     });
//   });

//   console.log('Filtered Todos:', filteredTodos);

//   return (
//     <ul>
//       <li className="my-2 text-sm italic">All Your Notes Here...</li>
//       {filteredTodos.map((todo, index) => (
//         <TodoItem key={index} todo={todo} index={index} />
//       ))}
//     </ul>
//   );
// };

// export default TodoList;


import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
