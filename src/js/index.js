import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import DevTools from './containers/DevTools';
import RootContainer from './containers/RootContainer';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <RootContainer />
      <DevTools />
    </div>
  </Provider>
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/(:priorityFilter/)(:statusFilter/)" component={App} />
  </Router>,
  document.getElementById('root')
);

let props = {
  priorityFilter: 'allPriorities',
  statusFilter: 'allStatuses',
};

store.subscribe(
  () => {
    const { priorityFilter, statusFilter } = store.getState();
    const [, session] = window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    );
    const statusFilterChanged = priorityFilter !== props.priorityFilter;
    const priorityFilterChanged = statusFilter !== props.statusFilter;
    if (statusFilterChanged || priorityFilterChanged) {
      browserHistory.push(`/${priorityFilter}/${statusFilter}/?debug_session=${session}`);
    }
    props = { priorityFilter, statusFilter };
  }
);
