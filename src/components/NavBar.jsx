import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

import './Navbar.css';

const Navbar = () => (
  <div>
    <div className='gradient'/>
    <Menu
      id='nav'
      pointing
      secondary
      fluid
    >
      <Container>
        <Menu.Item header>
          <Link to="/">Trove</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">Log In</Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
);

export default Navbar;
