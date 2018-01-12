import React, { Component } from 'react';
import { Navbar } from 'react-materialize';
import NavItem from 'react-materialize/lib/NavItem';

class Header extends Component {
  render() {
    return(
      <Navbar brand='' right>
        <NavItem>Portfolio</NavItem>
        <NavItem href='/contact/'>Contact</NavItem>
      </Navbar>  
    )  
  }
}

export default Header;