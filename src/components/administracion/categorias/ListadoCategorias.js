import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "../style/admin.css";
import ElementoListaCat from "./ElementoListaCat";

const ListadoCategorias = (props) => {
  return (
    <section className="container my-5 px-5">
      <div className="row">
        <h1 className="text-center col-12">Lista de Categorías</h1>
        <Link
          className="azul text-white p-2 mb-3 ml-auto rounded"
          to="/Administracion/Categoria"
        >
          Agregar Categoría
        </Link>
      </div>
      <ListGroup>
        {props.categorias.map((categoria) => (
          <ElementoListaCat
            key={categoria._id}
            categoria={categoria}
            setRecargarCategorias={props.setRecargarCategorias}
          ></ElementoListaCat>
        ))}
      </ListGroup>
    </section>
  );
};

export default ListadoCategorias;
