import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';
import reducers from '../reducers';

const session = window.location.href.match(
  /[?&]debug_session=([^&#]+)\b/
);
const enhancer = compose(
  DevTools.instrument(),
  persistState(session)
);

export default function configureStore() {
  const store = createStore(reducers, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('../reducers').default)
    );
  }
  return store;
}
