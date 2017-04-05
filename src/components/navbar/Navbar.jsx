import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import UserNav from './UserNav';
import PublicNav from './PublicNav';

import './Navbar.css';

const Navbar = ({ authenticated }) => (
  <div>
    <div className='gradient'/>
    <Menu
      id='nav'
      fluid
    >
      <Container style={{ width: '1400px'}}>
        <Menu.Item header>
          <Link to="/">
            <h2 id='nav-title'>Trove</h2>
          </Link>
        </Menu.Item>
        { authenticated
          ? <UserNav/>
          : <PublicNav />
        }
      </Container>
    </Menu>
  </div>
);

Navbar.propTypes = {
  authenticated: React.PropTypes.bool.isRequired,
  logoutUser: React.PropTypes.func.isRequired,
  user: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Navbar);
