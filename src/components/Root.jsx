import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Landing from './Landing';
import LoginForm from './login/LoginPage';
import SignupPage from './signup/SignupPage';
import Dashboard from './Dashboard';
import wrapAuth from '../utils/wrapAuth';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/dashboard" component={wrapAuth(Dashboard)}/>
    </Route>
  </Router>
);

export default Root;
