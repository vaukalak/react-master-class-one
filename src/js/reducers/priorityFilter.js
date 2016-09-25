import { SELECT_PRIORITY_FILTER } from '../constants/ActionTypes';

export default (state = 'allPriorities', action) => {
  switch (action.type) {
    case SELECT_PRIORITY_FILTER:
      {
        return action.payload;
      }
    default:
      {
        return state;
      }
  }
};
