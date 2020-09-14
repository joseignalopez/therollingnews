import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardNew = (props) => {
  return (
    <div className="cardNew-container">
      <Link to={`/${props.nombreCategoria}/nota/${props.noticia.Id}`}>
        <Card style={{ width: "21rem" }} className="cardNew-card">
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
          <Card.Footer className="cardNew-cardFooter">
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Link>
    </div>
  );
};

export default CardNew;
