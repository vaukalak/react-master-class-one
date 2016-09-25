import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import TodoList from './containers/TodoList';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <TodoList />
      <DevTools />
    </div>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
