import React,{useState,useEffect} from "react";
import {Navbar, Nav,Form, Button }from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCaretDown,faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import SeccionesHeader from "../principal/SeccionesHeader";
import ReactDOM from 'react-dom';



const categorias = [
  "Deportes",
  "Actualidad",
  "salud",
  "covid19"

];
const Header = () => {
  const [seccionVisible,setSeccionVisible]= useState(false);
  const[searchTerm,setSearchTerm]= useState("");
  const [searchResultado,setSearchResultado]=useState([]);


  const handleChange = event =>{
    setSearchTerm(event.target.value);

  };
  useEffect(()=> {
    const resultado = categorias.filter(noticias=>
      noticias.toLocaleLowerCase().includes(searchTerm));
      setSearchResultado(resultado);
  },[searchTerm]);

  return (
    <Navbar variant="dark" bg="dark" className="azul" expand="lg">
      <Navbar.Brand href="#home"><img src="/logo.jpg" alt="logo" className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div  className="subnav ">
        <Nav className="mr-auto">
          <NavLink exact={true} to="/principal" className="nav-link " activeClassName="active"> <FontAwesomeIcon icon={faUser} /> Ingresar</NavLink>
          <NavLink exact={true} to="/" className="nav-link" activeClassName="active"> <FontAwesomeIcon icon={faCheckSquare} /> Suscribir</NavLink>
        </Nav> 
        </div>
        <Nav className="ml-auto subnav">
          <NavLink exact={true} to="/" className="nav-link " activeClassName="active">Home</NavLink>  
        <div className="subnav"> 
          <NavLink exact={true} to="/secciones" className="nav-link " activeClassName="active" onClick={()=>setSeccionVisible(!seccionVisible)}>Secciones<FontAwesomeIcon icon={faCaretDown} /></NavLink>
            {seccionVisible && <SeccionesHeader></SeccionesHeader>}
           </div>
           </Nav>  
         
        <Form className=" search" inline >
        <div className="search">
          <input type="text"  placeholder=" Buscar                                                           &#xf002;" id="icon" className="placeicon" value={searchTerm} onChange={handleChange} />
          {/* <ul> 
            {searchResultado.map(item=>(
              <li>{item}</li>
            ))} 
          </ul> */}
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
