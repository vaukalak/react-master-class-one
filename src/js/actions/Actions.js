import { ADD_TODO, DELETE_TODO } from '../constants/ActionTypes';

export const addTodo = name => ({
  type: ADD_TODO,
  payload: name,
});

export const deleteTodo = name => ({
  type: DELETE_TODO,
  payload: name,
});
