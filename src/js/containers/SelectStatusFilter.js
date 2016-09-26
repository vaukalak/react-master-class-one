import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as Actions from '../actions/Actions';

const mapStateToProps = (status, ownProps) => ({
  currentFilter: ownProps.params.statusFilter || 'allStatuses',
});
const mapDispatchToProps = {
  selectFilter: Actions.selectStatusFilter,
};

const SelectStatusFilter = ({ currentFilter, selectFilter }) => (
  <div>
    {['active', 'done', 'allStatuses'].map(
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

SelectStatusFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  selectFilter: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectStatusFilter)
);
