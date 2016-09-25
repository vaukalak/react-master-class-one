import undoable from 'redux-undo';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CHANGE_PRIORITY } from '../constants/ActionTypes';
import todo from './todo';

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        return [
          ...state,
          todo(undefined, action),
        ];
      }
    case TOGGLE_TODO:
    case CHANGE_PRIORITY:
      {
        return state.map(t => {
          if (t.id === action.payload.id) {
            return todo(t, action)
          } else {
            return t;
          }
        });
      }
    case DELETE_TODO:
      {
        return state.filter(t => t.id !== action.payload.id);
      }
    default:
      return state;
  }
};

export default undoable(todosReducer);
