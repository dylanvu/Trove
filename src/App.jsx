import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

const App = () => (
  <div>
    <NavBar />
    <Grid container={true}>
      <Grid.Row centered={true}>
        <Grid.Column computer={6} mobile={16}>
          <Route path="/register" component={RegistrationForm}/>
          <Route path="/login" component={LoginForm}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default App;
