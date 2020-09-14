import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import "./style/noticias.css";

const ListaNoticias = () => {
  return (
    <section className="container my-4">
        <div className="row">
            <h1 className="text-center col-12">Lista de Noticias</h1>
            <Button className="boton ml-auto my-3" href="/admin/agregarnoticia">Agregar noticia</Button>{' '}
        </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {/* aquí agregar la función para mapear los elementos de la lista */}
        </tbody>
      </Table>
    </section>
  );
};

export default ListaNoticias;
