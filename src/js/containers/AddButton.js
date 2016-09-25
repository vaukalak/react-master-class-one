import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';

const mapStateToProps = s => s;

const mapDispatchToProps = {
  addTodo: Actions.addTodo,
};

const AddButton = ({ addTodo }) => (
  <button type="button" onClick={() => addTodo('new todo')}>
    add
  </button>
);

AddButton.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);

