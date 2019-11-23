import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

// import firebase from 'firebase/app';
// import 'firebase/auth';

class MyNavbar extends React.Component {

    state = {
        isOpen : false
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
      }
    
    logMeOut = (e) => {
        console.error("you tried to log out")
        // e.preventDefault();
        // firebase.auth().signOut();
    }  

    logMeIn = (e) => {
        console.error("you tried to log in")
    }

    render() {
        const { authed } = this.props;
        const buildNavbar = () => {
            if (authed) {
                return (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink tag={RRNavLink} to='/Home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={RRNavLink} to='/MyProfile'>My Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink onClick={this.logMeOut}>Logout</NavLink>
                    </NavItem>
                </Nav>
                )
            }
            else {
                return (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink tag={RRNavLink} to='/Home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink onClick={this.logMeIn}>Log In</NavLink>
                        </NavItem>
                    </Nav>
                )
            }
          };
        return (
            <div className="MyNavbar">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">StudentLoans</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {buildNavbar()}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MyNavbar;