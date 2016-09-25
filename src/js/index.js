import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
  <App />,
  document.getElementById('root')
);
