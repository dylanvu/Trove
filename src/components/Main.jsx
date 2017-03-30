import React from 'react';
import { Grid } from 'semantic-ui-react';
import Navbar from './Navbar';

const Main = ({ children }) => (
  <div>
    <Navbar />
    <Grid container={true}>
      {children}
    </Grid>
  </div>
);

export default Main;
