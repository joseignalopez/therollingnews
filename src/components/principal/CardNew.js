import React from "react";
import { Card, Button } from "react-bootstrap";

const CardNew = (props) => {
    console.log("En cardNew")
    console.log(props)
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.noticia.Imagen} />
        <Card.Body>
  <Card.Title>{props.noticia.Titulo}</Card.Title>
          <Card.Text>
            {props.noticia.DetalleCorto}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardNew;
