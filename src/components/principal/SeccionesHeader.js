import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const SeccionesHeader = (props) => {
  console.log(props.categorias);
  return (
    <div className="subnav-content d-flex justify-content-center">
      <ListGroup horizontal className="d-flex flex-lg-row justify-content-between">
      {props.categorias.map((categoria) => (
          <ListGroup.Item key={categoria._id} className="nav-item bg-transparent active">
            <Link onClick={() => props.setSeccionVisible(!props.seccionVisible)} to={`/Categoria/${categoria.nombre}`} className="nav-link">
              {categoria.nombre}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SeccionesHeader;
