import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reducer from './reducers';
import './index.css';
import '../semantic/dist/semantic.min.css';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const wrapApp = (AppComponent, reduxStore) => (
  <BrowserRouter>
    <Provider store={reduxStore}>
      <AppComponent />
    </Provider>
  </BrowserRouter>
);

const rootEl = document.getElementById('root');

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(wrapApp(NextApp, store), rootEl);
  });
}
