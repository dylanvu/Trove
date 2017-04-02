import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Dashboard from '../components/Dashboard';
import wrapAuth from '../utils/wrapAuth';

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={About}/>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/dashboard" component={wrapAuth(Dashboard)}/>
    </Route>
  </Router>
);

export default App;
