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
import { Navigate } from "react-router-dom";
import logo from "./logobar-removebg-preview.png";
export default class NavBarAuth extends Component {
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
    /*function unLog() {
      localStorage.clear();
      return <Navigate to='/Auth/Login' />;
    }*/

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
              <Link to='/User/BarList' className='nav-link text-right'>
                Les Bars
              </Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to='/User/Panier' className='nav-link text-right'>
                Mon Panier
              </Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to='/User/Profile' className='nav-link text-right'>
                Mon profil
              </Link>
            </NavItem>
            <NavItem className='nav-item' >
              <Link to='/Unlog' className='nav-link text-right'>Déconnexion</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
