import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../style/admin.css";
import ElementoListUsu from "./ElementoListUsu";

const ListadoUsuarios = (props) => {
  return (
    <section className="container my-5 px-5">
      <div className="row">
        <h1 className="text-center col-12">Lista de Usuarios</h1>
      </div>
      <ListGroup>
        {props.usuario.map((usuario) => (
          <ElementoListUsu
            key={usuario._id}
            usuario={usuario}
            setRecargarUsuarios={props.setRecargarUsuarios}
          ></ElementoListUsu>
        ))}
      </ListGroup>
    </section>
  );
};

export default ListadoUsuarios;
