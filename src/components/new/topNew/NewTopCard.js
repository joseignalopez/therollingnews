import React from "react";
import { Card } from "react-bootstrap";

const NewTopCard = (props) => {
  return (
    <div className="mt-4 ">
      <div className="">
        <Card.Img src={props.imagen} className="cardNew-img"/>
        <Card.Title className="p-1 font-weight-bold">{props.titulo}</Card.Title>
        {/* <Card.Body>
        </Card.Body> */}
      </div>
    </div>
  );
};

export default NewTopCard;
