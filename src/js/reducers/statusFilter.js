import { SELECT_STATUS_FILTER } from '../constants/ActionTypes';

export default (state = 'allStatuses', action) => {
  switch (action.type) {
    case SELECT_STATUS_FILTER:
      {
        return action.payload;
      }
    default:
      {
        return state;
      }
  }
};
