import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';

export const todoPropShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = {
  deleteTodo: v => Actions.deleteTodo(v),
};

const Todo = ({ todo: { name, id }, deleteTodo }) => (
  <div>
    <span style={{ marginRight: '10px' }}>{name}</span>
    <button type="button" onClick={() => deleteTodo(id)}>
      remove
    </button>
  </div>
);

Todo.propTypes = {
  todo: todoPropShape.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
