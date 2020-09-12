import React, { Fragment } from "react";
import CardNew from "./CardNew";
import CardDeck from 'react-bootstrap/CardDeck'

const CategoryNew = (props) => {
  return (
    <Fragment>
      <h2>{props.nombreCategoria}</h2>
      <CardDeck className="mb-3">
        {props.noticiasDeCategoria.map((noticia) => (
          <CardNew key={noticia.id} noticia={noticia}></CardNew>
        ))}
      </CardDeck>
    </Fragment>
  );
};

export default CategoryNew;
