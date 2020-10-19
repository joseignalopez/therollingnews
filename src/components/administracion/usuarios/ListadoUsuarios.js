import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import "../style/admin.css";
import ElementoListUsu from "./ElementoListUsu";

const ListadoUsuarios = (props) => {
  
  return (
    <section className="container my-5 px-5">
      <div className="row">
        <h1 className="text-center col-12">Lista de Usuarios</h1>
       {/*  <Button className="boton ml-auto my-3" href="/Administracion/Usuarios">
          Agregar Usuario
        </Button>{" "} */}
      </div>
      <ListGroup>
        {
          // dibujar filas de la lista
        
          props.usuario.map((usuario) => (
            <ElementoListUsu
              key={usuario._id}
              usuario={usuario}
              setRecargarUsuarios={props.setRecargarUsuarios}
            ></ElementoListUsu>
          ))
        }
      </ListGroup> 
    </section>
  );
};

export default ListadoUsuarios;
