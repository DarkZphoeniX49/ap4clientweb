/** @format */

import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import logo from "./logobar-removebg-preview.png";
export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar
        expand='md'
        className='navbar navbar-expand-lg navbar-light bg-light'
      >
       <NavbarBrand href='' className='navbar-brand'>
          <img
            src={logo}
            alt='logo'
            style={{ width: "20%", height: "20%" }} // set width and height to 100%
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className='navbar-toggler' />
        <Collapse isOpen={this.state.isOpen} navbar className='navbar-collapse'>
          <Nav className='ml-auto navbar-nav'>
            <NavItem className='nav-item'>
              <Link to='/' className='nav-link'>
                Accueil
              </Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to='/Auth/Login' className='nav-link'>
                Connexion
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
