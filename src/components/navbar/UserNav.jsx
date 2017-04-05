import React from 'react';
import { Menu } from 'semantic-ui-react';
import AddBookmark from './AddBookmark';
import UserDropdown from './UserDropdown';

const UserNav = ({ name, onClick }) => (
  <Menu.Menu position='right'>
    <AddBookmark/>
    <UserDropdown/>
  </Menu.Menu>
);

UserNav.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default UserNav;
