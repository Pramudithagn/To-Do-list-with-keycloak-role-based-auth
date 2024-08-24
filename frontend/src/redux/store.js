// import { createStore } from 'redux';
import todoReducer from '../redux/reducer';
import {legacy_createStore , combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
    todos: todoReducer
  });

// const store = createStore(todoReducer);
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;
