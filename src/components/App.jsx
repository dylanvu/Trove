import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navbar from './navbar/Navbar';
import wrapAuth from '../utils/wrapAuth';

const WrappedNav = wrapAuth(Navbar);

const App = ({ children }) => (
  <div>
    <WrappedNav />
    <Container style={{ width: '1400px'}}>
      <Grid>
        {children}
      </Grid>
    </Container>
  </div>
);

App.propTypes ={
  children: React.PropTypes.element.isRequired
};

export default App;
