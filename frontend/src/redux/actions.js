// // actions.js
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   REMOVE_TODO,
//   MARK_COMPLETED,
//   MARK_INCOMPLETE,
//   FILTER_TODOS,
//   MARK_ALL_COMPLETED,
//   UPDATE_SEARCH_TERM,
// } from './actionTypes';

// export const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: { text },
// });

// export const toggleTodo = (id) => ({
//   type: TOGGLE_TODO,
//   payload: { id },
// });

// export const removeTodo = (id) => ({
//   type: REMOVE_TODO,
//   payload: { id },
// });

// export const markCompleted = (id) => ({
//   type: MARK_COMPLETED,
//   payload: { id },
// });

// export const markIncomplete = (id) => ({
//   type: MARK_INCOMPLETE,
//   payload: { id },
// });

// export const filterTodos = (filter) => ({
//   type: FILTER_TODOS,
//   payload: { filter },
// });

// export const markAllCompleted = () => ({
//   type: MARK_ALL_COMPLETED,
// });

// export const updateSearchTerm = (searchTerm) => ({
//   type: UPDATE_SEARCH_TERM,
//   payload: { searchTerm },
// });

//=====================================================================================

// import axios from 'axios';
// import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS } from '../redux/actionTypes';

// // Fetch all todos
// export const fetchTodos = () => async (dispatch) => {
//   const response = await axios.get('http://localhost:8080/api/todos');
//   dispatch({ type: FETCH_TODOS, payload: response.data });
// };

// // Add a new todo
// export const addTodo = (text) => async (dispatch) => {
//   const response = await axios.post('http://localhost:8080/api/todos', { text, completed: false });
//   dispatch({ type: ADD_TODO, payload: response.data });
// };

// // Delete a todo by ID
// export const deleteTodo = (id) => async (dispatch) => {
//   await axios.delete(`http://localhost:8080/api/todos/${id}`);
//   dispatch({ type: DELETE_TODO, payload: id });
// };

// // Toggle todo completion status
// export const toggleTodo = (id, completed) => async (dispatch) => {
//   const response = await axios.put(`http://localhost:8080/api/todos/${id}/status?completed=${completed}`);
//   dispatch({ type: TOGGLE_TODO, payload: response.data });
// };

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS } from '../redux/actionTypes';
import api from '../../src/api';

// Fetch all todos
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await api.get('/admin/todos');
    dispatch({ type: FETCH_TODOS, payload: response.data });
  } catch (error) {
    console.error('Failed to fetch todos:', error);
  }
};

// Add a new todo
export const addTodo = (text) => async (dispatch) => {
  try {
    const response = await api.post('/admin/todos', { text, completed: false });
    dispatch({ type: ADD_TODO, payload: response.data });
  } catch (error) {
    console.error('Failed to add todo:', error);
  }
};

// Delete a todo by ID
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.delete(`/user/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: id });
  } catch (error) {
    console.error('Failed to delete todo:', error);
  }
};

// Toggle todo completion status
export const toggleTodo = (id, completed) => async (dispatch) => {
  try {
    const response = await api.put(`/admin/todos/${id}/status`, null, {
      params: { completed }
    });
    dispatch({ type: TOGGLE_TODO, payload: response.data });
  } catch (error) {
    console.error('Failed to toggle todo status:', error);
  }
};
