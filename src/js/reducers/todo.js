import { ADD_TODO, TOGGLE_TODO, CHANGE_PRIORITY } from '../constants/ActionTypes';

let todoId = 0;

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        todoId += 1;
        return {
          name: `${action.payload} ${todoId}`,
          id: todoId,
          priority: 'medium',
          isComplete: false,
        };
      }
    case CHANGE_PRIORITY:
      {
        return {
          ...state,
          priority: action.payload.value,
        };
      }
    case TOGGLE_TODO:
      {
        return {
          ...state,
          isComplete: !state.isComplete,
        };
      }
    default:
      return state;
  }
};
