import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ElementoLista from "./ElementoLista";
import "../style/admin.css";

const ListaNoticias = (props) => {
  console.log(props.noticias);
  return (
    <section className="container my-5 px-5">
      <div className="row">
        <h1 className="text-center col-12">Lista de Noticias</h1>
        <Link type="button " variant="primary" className="azul text-white py-2 mb-3  ml-auto rounded" to="/Administracion/Noticia">
              Agregar Noticia
            </Link>
        
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            props.noticias.map((noticia) => (
              <ElementoLista
                key={noticia._id}
                noticia={noticia}
                setRecargarNoticias={props.setRecargarNoticias}
              ></ElementoLista>
            ))
          }
        </tbody>
      </Table>
    </section>
  );
};

export default ListaNoticias;
