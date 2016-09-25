import { combineReducers } from 'redux';
import todos from './todos';
import priorityFilter from './priorityFilter';

export default combineReducers({
  todos,
  priorityFilter,
});
