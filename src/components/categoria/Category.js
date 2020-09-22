import React from "react";
import CategoryNew from "../principal/CategoryNew";

const Category = (props) => {
    console.log("Si aacedo a category")
  return (
    <div className="p-3">
      {/* <h1>{props.categoria}</h1> */}
      {
          <CategoryNew
            noticiasDeCategoria={props.noticias}
            nombreCategoria={props.categoria}
          ></CategoryNew>
          
      }
    </div>
  );
};

export default Category;
