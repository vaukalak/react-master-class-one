import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_PRIORITY } from '../constants/ActionTypes';

export const addTodo = name => ({
  type: ADD_TODO,
  payload: name,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const changePriority = (id, value) => ({
  type: CHANGE_PRIORITY,
  payload: { id, value },
});
