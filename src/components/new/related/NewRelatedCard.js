import React from "react";
import {Card} from "react-bootstrap";

const NewRelatedCard = (props) => {
  return (
    <div className="cardNew-container">
      <Card style={{ width: "21rem" }} className="cardNew-card mr-2">
        <Card.Img
          variant="top"
          src={props.noticia.Imagen}
          className="cardNew-img"
        />
        <Card.Body>
          <Card.Title className="font-weight-bolder type-Future">
            {props.noticia.Titulo}
          </Card.Title>
          <Card.Text className="type-Future">
            {props.noticia.DetalleCorto}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewRelatedCard;
