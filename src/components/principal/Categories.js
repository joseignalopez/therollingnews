import React from "react";
import CategoryNew from "./CategoryNew";
import defaultNew from "../../defaultNew";

const Categories = (props) => {
  const noticias = defaultNew;
  return (
    <div>
      {props.categorias.map((valueCategory, i) => (
        <CategoryNew
          key={i}
          noticiasDeCategoria={noticias.filter(
            (n) => n.Categoria === valueCategory
          )}
          nombreCategoria={valueCategory}
        ></CategoryNew>
      ))}
    </div>
  );
};

export default Categories;
