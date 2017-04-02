import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';

import './Navbar.css';

const PublicLinks = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Link to="/signup">Sign Up</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">Log In</Link>
    </Menu.Item>
  </Menu.Menu>
);

let UserLinks = ({ name, dispatch }) => (
  <Menu.Menu position='right'>
    <Dropdown
      item
      text={`Welcome, ${name}`
    }>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to='/dashboard'>Dashboard</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to='/' onClick={() => dispatch(logoutUser())}>Sign out</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Menu>
)
UserLinks = connect()(UserLinks);

const Navbar = ({ user, authenticated }) => (
  <div>
    <div className='gradient'/>
    <Menu
      id='nav'
      fluid
    >
      <Container>
        <Menu.Item header>
          <Link to="/">Trove</Link>
        </Menu.Item>
        { authenticated
          ? <UserLinks name={user.firstName}/>
          : <PublicLinks />
        }
      </Container>
    </Menu>
  </div>
);

export default Navbar;
