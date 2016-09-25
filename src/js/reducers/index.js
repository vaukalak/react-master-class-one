import { combineReducers } from 'redux';
import todos from './todos';
import priorityFilter from './priorityFilter';
import statusFilter from './statusFilter';

export default combineReducers({
  todos,
  priorityFilter,
  statusFilter,
});
