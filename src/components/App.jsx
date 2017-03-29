import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import LoginForm from './LoginForm';
import SignupFormContainer from '../containers/SignupFormContainer';

const temp = () => (
  <div>
    <h1>Trove</h1>
  </div>
);

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={temp}/>
      <Route path="signup" component={SignupFormContainer}/>
      <Route path="login" component={LoginForm}/>
    </Route>
  </Router>
);

export default App;
