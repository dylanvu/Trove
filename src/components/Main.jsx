import React from 'react';
import { Grid } from 'semantic-ui-react';
import NavBar from './NavBar';

const Main = ({ children }) => (
  <div>
    <NavBar />
    <Grid container={true}>
      {children}
    </Grid>
  </div>
);

export default Main;
