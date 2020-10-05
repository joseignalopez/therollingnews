import React from "react";
import Button from "react-bootstrap/Button";
import './style/admin.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faNewspaper, faList,faUserCog,faPlusSquare} from "@fortawesome/free-solid-svg-icons";

const Administrar = () => {
  return (
    
    <div className="container bg-dark-transparent d-flex justify-content-center py-3 mb-2"  >
    <div className="row shadow text-center  "> 
       <div className="col-sm-12  text-center mb-3"><h3 className="text-center py-3 ">Bienvenidos Administrador!</h3>
         </div>
         <hr/>
         <div  className= "col-md-12 col-sm-12  mb-2 text-center ">
          <Button  variant="primary" size="lg" className=" azul" type= 'button' href="/administracion/Noticias" >
            <FontAwesomeIcon icon={faNewspaper} />{" "}
            Administrar Noticias
          </Button>{" "}
          <Button  variant="primary" size="lg" className= "azul" type= 'button' href="/administracion/Noticia" >
            <FontAwesomeIcon icon={faPlusSquare} />{" "}
            Agregar Noticia 
          </Button></div>
        
        <br/>
       <div className="col-md-12 col-sm-12 text-center mb-2">
          <Button  variant="primary" size="lg" className=" azul" type='button' href="/administracion/Categorias">
            <FontAwesomeIcon icon={faList} />{" "}
            Administrar Categorias
          </Button>{" "}
          <Button  variant="primary" size="lg" type= 'button' className="azul" href="/administracion/Categoria" >
            <FontAwesomeIcon icon={faPlusSquare} />{" "}
            Agregar categoria 
          </Button></div>
          <br/>
          <div className="col-sm-12  text-center ">
          <Button  variant="primary" size="lg" type='button' className="azul" >
            <FontAwesomeIcon icon={faUserCog} />{" "}
            Administrar Usuarios
          </Button></div>
        </div>
    </div>
    
  );
};

export default Administrar;
