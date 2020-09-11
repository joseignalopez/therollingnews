import React, { Fragment } from "react";
import CardNew from "./CardNew";

const CategoryNew = (props) => {
  return (
    <Fragment>
      <h2>{props.nombreCategoria}</h2>
      {
        props.noticiasDeCategoria.map(noticia=><CardNew key={noticia.id} noticia={noticia}></CardNew>)
      }
    </Fragment>
  );
};

export default CategoryNew;
