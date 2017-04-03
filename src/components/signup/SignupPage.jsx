import React from 'react';
import { Grid } from 'semantic-ui-react';
import SignupForm from './SignupForm';

const SignupPage = () => (
  <Grid.Row centered={true}>
    <Grid.Column
      computer={4}
      tablet={6}
      mobile={12}
      textAlign="center"
    >
      <SignupForm />
    </Grid.Column>
  </Grid.Row>
);

export default SignupPage;
