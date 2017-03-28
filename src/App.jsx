import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';

const App = () => (
  <div>
    <NavBar />
    <Container>
      <Route path="/signup" component={SignUpForm}/>
      <Route path="/login" component={LogInForm}/>
    </Container>
  </div>
);

export default App;
