import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

const NavBar = () => (
  <div>
    <div style={{
      background: 'linear-gradient(to left, #5f2c82 , #49a09d)',
      minHeight: '3px'
    }}/>
    <Menu
      pointing
      secondary
      fluid
      style={{
        marginTop: 0,
        marginBottom: 20
      }}
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

export default NavBar;
