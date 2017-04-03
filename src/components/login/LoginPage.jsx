import React from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <Grid.Row centered={true}>
    <Grid.Column
      computer={4}
      tablet={6}
      mobile={12}
      textAlign="center"
    >
      <LoginForm />
    </Grid.Column>
  </Grid.Row>
);

export default LoginPage;
