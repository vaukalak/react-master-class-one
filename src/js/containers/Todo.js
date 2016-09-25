import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';

export const todoPropShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  priority: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
});

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = {
  deleteTodo: Actions.deleteTodo,
  toggleTodo: Actions.toggleTodo,
  changePriority: Actions.changePriority,
};

const Del = ({ isDeleted, children }) => (
  isDeleted ? <del>{children}</del> : children
);

Del.propTypes = {
  isDeleted: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const Todo = ({ todo, deleteTodo, toggleTodo, changePriority }) => (
  <div>
    <input
      type="checkbox"
      checked={todo.isComplete}
      onChange={() => toggleTodo(todo.id)}
    />
    <Del isDeleted={todo.isComplete}>
      <span style={{ marginRight: '10px' }}>{todo.name}</span>
    </Del>
    <button type="button" onClick={() => deleteTodo(todo.id)}>
      remove
    </button>
    {['high', 'medium', 'low'].map(
      p => (
        <input
          key={`radio_${p}`}
          type="radio"
          checked={todo.priority === p}
          onChange={() => changePriority(todo.id, p)}
        />
      )
    )}
  </div>
);

Todo.propTypes = {
  todo: todoPropShape.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
