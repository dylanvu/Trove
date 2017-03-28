import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Menu
    stackable
    pointing
    secondary
    fluid
  >
    <Container>
      <Menu.Item header>
        <NavLink to="/">Trove</NavLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <NavLink to="/signup">Sign Up</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">Log In</NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default NavBar;
