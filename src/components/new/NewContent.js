import React from "react";
import NewContentHeader from "./NewContentHeader";
import {Card} from 'react-bootstrap'

const NewContent = (props) => {
  return (
    <div className="col-9 pr-5 newDetail-container_new type-Future">
      <NewContentHeader
        titulo={props.noticia.Titulo}
        categoria={props.noticia.Categoria}
        fecha={props.noticia.Fecha}
      ></NewContentHeader>
      <Card>
        <Card.Img
          variant="top"
          src={props.noticia.Imagen}
          alt={`imagen de noticia ${props.noticia.Id}`}
        />
        <Card.Body>
          <Card.Text className="type-Future">
            {props.noticia.Detalle}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewContent;
