import React,{useState/* ,useEffect  */} from "react";
import {Navbar, Nav,Form, Button }from "react-bootstrap";
import { NavLink,Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCaretDown,faCheckSquare, faSearch} from "@fortawesome/free-solid-svg-icons";
import SeccionesHeader from "../principal/SeccionesHeader";
import Busqueda from "../principal/Busqueda";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import warning from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import { render } from "@testing-library/react";



const Header = (props) => {
/*   const nuevoSuscriptor = {
    nombreSuscriptor,
    apellidoSuscriptor,
    direccionSuscriptor,
    localidadSuscriptor,
    codigoPostalSuscriptor,
    telefonoSuscriptor,
    emailSuscriptor
  }; 
 */

   const [seccionVisible,setSeccionVisible]= useState(false);

  return (
    <Navbar variant="dark" bg="dark" className="azul" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            className="logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div  className="subnav ">
        <Nav className="mr-auto">
          <NavLink exact={true} to="/login/ingresar" className="nav-link " activeClassName="active"> <FontAwesomeIcon icon={faUser} /> Ingresar</NavLink>
          <NavLink exact={true} to="" className="nav-link" activeClassName="active"> <FontAwesomeIcon icon={faCheckSquare} /> Suscribir</NavLink>
        </Nav> 
        </div>
        <Nav className="ml-auto subnav">
          <NavLink exact={true} to="/" className="nav-link " activeClassName="active">Home</NavLink>  
        <div className="subnav justify-content-center"> 
          <NavLink exact={true} to="" className="nav-link " activeClassName="active" onClick={()=>setSeccionVisible(!seccionVisible)}>Secciones<FontAwesomeIcon icon={faCaretDown} /></NavLink>
            {seccionVisible && <SeccionesHeader categorias = {props.categorias}></SeccionesHeader>}
           </div>
           </Nav>   
        <Form className="">
        <div className="">
          <input type="text"  placeholder=" Buscar " className="btn-sm"/>
          <Button className=" azul btn-ms" type="submit">
            <FontAwesomeIcon icon={faSearch} /> 
          </Button>
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
 
};

export default Header;
