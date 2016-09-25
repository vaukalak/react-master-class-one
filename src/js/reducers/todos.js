import undoable from 'redux-undo';
import { ADD_TODO, DELETE_TODO } from '../constants/ActionTypes';

const initialState = [];
let todoId = 0;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        todoId += 1;
        return [
          ...state,
          {
            name: `${action.payload} ${todoId}`,
            id: todoId,
          },
        ];
      }
    case DELETE_TODO:
      {
        return state.filter(t => t.id !== action.payload);
      }
    default:
      return state;
  }
};

export default undoable(todoReducer);
