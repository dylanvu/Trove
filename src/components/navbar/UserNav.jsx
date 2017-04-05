import React from 'react';
import { Menu } from 'semantic-ui-react';
import AddBookmark from './AddBookmark';
import UserDropdown from './UserDropdown';

const UserNav = () => (
  <Menu.Menu position='right'>
    <AddBookmark/>
    <UserDropdown/>
  </Menu.Menu>
);

export default UserNav;
