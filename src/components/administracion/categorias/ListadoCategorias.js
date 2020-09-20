import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../style/admin.css";
import ElementoListaCat from "./ElementoListaCat";

const ListadoCategorias = (props) => {
  console.log(props.categorias)
  return (
    <section className="container my-5 px-5">
      <div className="row">
        <h1 className="text-center col-12">Lista de Categorías</h1>
        <Button className="boton ml-auto my-3" href="/Administracion/Categoria">
          Agregar categoría
        </Button>{" "}
      </div>
      <ListGroup>
        {
          // dibujar filas de la lista
          props.categorias.map((categoria) => (
            <ElementoListaCat
              key={categoria._id}
              categoria={categoria}
              setRecargarCategorias={props.setRecargarCategorias}
            ></ElementoListaCat>
          ))
        }
      </ListGroup>
    </section>
  );
};

export default ListadoCategorias;
