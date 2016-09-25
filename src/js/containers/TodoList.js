import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';
import Todo, { todoPropShape } from './Todo';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo: Actions.addTodo,
};

const TodoList = ({ todos, addTodo }) => (
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
    <br />
    <button type="button" onClick={() => addTodo('new todo')}>
      add
    </button>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoPropShape).isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

