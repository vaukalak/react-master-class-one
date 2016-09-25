import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

const mapStateToProps = state => ({
  hasPast: state.todos.past.length > 0,
  hasFuture: state.todos.future.length > 0,
});

const mapDispatchToProps = {
  undo: UndoActionCreators.undo,
  redo: UndoActionCreators.redo,
};

const UndoRedo = ({ undo, redo, hasPast, hasFuture }) => (
  <div>
    <button
      type="button" onClick={() => undo()}
      disabled={!hasPast}
    >
      undo
    </button>
    <button
      type="button" onClick={() => redo()}
      disabled={!hasFuture}
    >
      redo
    </button>
  </div>
);

UndoRedo.propTypes = {
  hasPast: PropTypes.bool.isRequired,
  hasFuture: PropTypes.bool.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);
