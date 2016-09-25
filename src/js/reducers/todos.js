import undoable from 'redux-undo';
import { TOGGLE_TODO, CHANGE_PRIORITY } from '../constants/ActionTypes';
import todo from './todo';
import createArrayReducer from './arrayReducer';

const todosReducer = createArrayReducer('TODO', [TOGGLE_TODO, CHANGE_PRIORITY], todo);

export default undoable(todosReducer);
