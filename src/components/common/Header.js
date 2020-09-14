import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/"> <img src="logo.jpg" alt="logo" className="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact={true} to="/" className="nav-link" activeClassName="active" >Inicio</NavLink>
            <NavLink exact={true} to=""  className="nav-link" activeClassName="active">Secciones</NavLink>
            <NavLink exact={true} to="/login/ingresar"  className="nav-link" activeClassName="active">Ingresar</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div> 
  );
};

export default Header;
