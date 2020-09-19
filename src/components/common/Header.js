import React,{useState} from "react";
import {Navbar, Nav,Form, Button }from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCaretDown,faCheckSquare,faSearch } from "@fortawesome/free-solid-svg-icons";
import SeccionesHeader from "../principal/SeccionesHeader";



/*  const categorias = [
  "Deportes",
  "Actualidad",
  "salud",
  "covid19"

]; */ 
const Header = () => {
   const [seccionVisible,setSeccionVisible]= useState(false);
 /*  const[searchTerm,setSearchTerm]= useState(""); */
  /* const [searchResultado,setSearchResultado]=useState([]); */


 /*  const handleChange = event =>{
    setSearchTerm(event.target.value);

  };
  useEffect(()=> {
    const resultado = categorias.filter(noticias=>
      noticias.toLocaleLowerCase().includes(searchTerm));
      setSearchResultado(resultado);
  },[searchTerm]);  */
 
  return (
    <Navbar variant="dark" bg="dark" className="azul" expand="lg">
      <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL+"/logo.png"}   alt="logo" className="logo"/></Navbar.Brand>
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
            {seccionVisible && <SeccionesHeader></SeccionesHeader>}
           </div>
           </Nav>   
        <Form className=""  >
        <div className="">
          <input type="text"  placeholder=" Buscar " id="icon" className="btn-sm "  />
          <Button className=" azul btn-ms"  /* onChange={handleChange} */ >
            <FontAwesomeIcon icon={faSearch} /> 
          </Button>
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
