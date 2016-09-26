import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';

const mapStateToProps = (state, ownProps) => ({
  currentFilter: ownProps.params.priorityFilter || 'allPriorities',
});

const mapDispatchToProps = {
  selectFilter: Actions.selectPriorityFilter,
};

const SelectPriorityFilter = ({ currentFilter, selectFilter }) => (
  <div>
    {['high', 'medium', 'low', 'allPriorities'].map(
      p => (
        <div key={p}>
          <input
            checked={currentFilter === p}
            onChange={() => selectFilter(p)}
            type="radio"
          />
          <span>{p}</span>
        </div>
      )
    )}
  </div>
);

SelectPriorityFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  selectFilter: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectPriorityFilter)
);
