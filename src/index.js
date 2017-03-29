import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './components/App';
import rootReducer from './reducers/rootReducer';
import './index.css';
import '../semantic/dist/semantic.min.css';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppComponent />
  </Provider>
);

const rootEl = document.getElementById('root');

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(wrapApp(NextApp, store), rootEl);
  });
}
