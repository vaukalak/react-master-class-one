import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo, { todoPropShape } from './Todo';

const selectTodosByPriority = (todos, priority) => {
  if (priority === 'allPriorities') {
    return todos;
  }
  return todos.filter(t => t.priority === priority);
};

const mapStateToProps = state => ({
  todos: selectTodosByPriority(
    state.todos.present,
    state.priorityFilter
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

