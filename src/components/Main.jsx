import React from 'react';
import { Grid } from 'semantic-ui-react';
import Navbar from './Navbar';
import wrapAuth from '../utils/wrapAuth';

const WrappedNav = wrapAuth(Navbar);

const Main = ({ children }) => (
  <div>
    <WrappedNav />
    <Grid container={true}>
      {children}
    </Grid>
  </div>
);

export default Main;
