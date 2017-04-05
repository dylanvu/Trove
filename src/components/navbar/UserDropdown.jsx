import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { logoutUser } from '../../actions/auth';

const UserDropdown = ({ firstName, logoutUser }) => (
  <Dropdown
    item
    text={`Welcome, ${firstName}`}
  >
    <Dropdown.Menu>
      <Dropdown.Item>
        <Link to='/dashboard'>Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to='/' onClick={logoutUser}>Sign out</Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

const mapStateToProps = (state) => ({
  firstName: state.auth.user.firstName
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(UserDropdown);
