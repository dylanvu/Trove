import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

const PublicNav = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Link to="/signup">Sign Up</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">Log In</Link>
    </Menu.Item>
  </Menu.Menu>
);

export default PublicNav;
