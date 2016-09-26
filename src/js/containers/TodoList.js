import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Todo, { todoPropShape } from './Todo';
import { selectTodosByPriority, selectTodosByStatus } from '../selectors';

const mapStateToProps = (state, ownProps) => ({
  todos: selectTodosByStatus(
    selectTodosByPriority(
      state.todos.present,
      ownProps.router.params.priorityFilter
    ),
    ownProps.router.params.statusFilter
  ),
});

const mapDispatchToProps = {};

const TodoList = ({ todos }) => (
  <div>
    <div style={{ height: '200px', overflow: 'scroll' }}>
      {todos.map(
        (todo, i) => (
          <Todo
            key={`todo_${todo.id}`}
            todo={todo}
          />
        )
      )}
    </div>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoPropShape).isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);

