import React from 'react';
import { Link } from 'react-router';
import { Dropdown, Menu } from 'semantic-ui-react';

const UserNav = ({ name, onClick }) => (
  <Menu.Menu position='right'>
    <Dropdown
      item
      text={`Welcome, ${name}`}
    >
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to='/dashboard'>Dashboard</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to='/' onClick={onClick}>Sign out</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Menu>
);

UserNav.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default UserNav;
