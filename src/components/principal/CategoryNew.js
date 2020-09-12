import React, { Fragment } from "react";
import CardNew from "./CardNew";
import CardDeck from 'react-bootstrap/CardDeck'
import './style/category.css';

const CategoryNew = (props) => {
  return (
    <Fragment>
      <div className="border-bottom mb-3 pb-2">

      <h2 className="mt-2 mb-3 font-weight-bolder">{props.nombreCategoria}</h2>
      <CardDeck className="mb-3 categoryNew-cardDeck">
        {props.noticiasDeCategoria.map((noticia, i) => (
          <CardNew key={i} noticia={noticia}></CardNew>
        ))}
      </CardDeck>
      </div>
    </Fragment>
  );
};

export default CategoryNew;
