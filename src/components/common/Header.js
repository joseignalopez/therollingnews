import React,{useState,useEffect } from "react";
import {Navbar, Nav,Form, Button }from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCaretDown,faCheckSquare,faSearch } from "@fortawesome/free-solid-svg-icons";
import SeccionesHeader from "../principal/SeccionesHeader";




  const categorias = [
  "Deportes",
  "Actualidad",
  "salud",
  "covid19"

]; 
const Header = () => {
   const [seccionVisible,setSeccionVisible]= useState(false);
   const [buscadorVisible,setBuscadorVisible]=useState(false);
   const[searchTerm,setSearchTerm]= useState("");
  const [searchResultado,setSearchResultado]=useState([]); 


  const handleChange = (e) =>{
    e.preventDefault();
    setSearchTerm(e.target.value);

  };
  useEffect(()=> {
    const resultado = categorias.filter(noticias=>
      noticias.toLocaleLowerCase().includes(searchTerm));
      setSearchResultado(resultado);
  },[searchTerm]); 
  
  return (
    <Navbar variant="dark" bg="dark" className="azul" expand="lg">
      <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL +"/logo.png"} alt="logo" className="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div  className="subnav ">
        <Nav className="mr-auto">
          <NavLink exact={true} to="/login/ingresar" className="nav-link " activeClassName="active"> <FontAwesomeIcon icon={faUser} /> Ingresar</NavLink>
          <NavLink exact={true} to="/principal/buscar" className="nav-link" activeClassName="active"> <FontAwesomeIcon icon={faCheckSquare} /> Suscribir</NavLink>
        </Nav> 
        </div>
        <Nav className="ml-auto subnav">
          <NavLink exact={true} to="/" className="nav-link " activeClassName="active">Home</NavLink>  
        <div className="subnav justify-content-center"> 
          <NavLink exact={true} to="" className="nav-link " activeClassName="active" onClick={()=>setSeccionVisible(!seccionVisible)}>Secciones<FontAwesomeIcon icon={faCaretDown} /></NavLink>
            {seccionVisible && <SeccionesHeader></SeccionesHeader>}
           </div>
           </Nav>   
        <Form className=""  action="
        ">
        <div className="">
          <input type="text"  placeholder=" Buscar " id="icon" onChange={handleChange} className="btn-sm"/>
          
          <Button className=" azul btn-ms" type="submit" onClick={()=>setBuscadorVisible(!buscadorVisible)}>
            <FontAwesomeIcon icon={faSearch} /> 
          </Button>
          </div>
        </Form>
        {buscadorVisible && <ul className="nav-link"> 
            {searchResultado.map(item=>(
              <li>{item}</li>
            ))} 
          </ul> }
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
