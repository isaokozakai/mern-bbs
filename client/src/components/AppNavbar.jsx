import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>
              {user ? `Welcome ${user.name}` : ''}
            </strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </>
    );

    const guestLinks = (
      <>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </>
    );

    return (
      <Navbar color="dark" dark expand="sm" className="sticky-top">
        <Container className="px-md-5">
          <NavbarBrand href="/" onClick={() => sessionStorage.clear()}>
            <h1 className="m-0 h2">sharedlist</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);