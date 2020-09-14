import React from "react";
import NewRelatedCard from "./NewRelatedCard";

const NewRelated = (props) => {
  return (
    <div className="ml-4">
      <h1>Relacionadas</h1>
      <div className="overflow-auto mt-4 mb-5 border border-light d-flex">
        {
          props.noticiasRelacionadas.map((nota)=> <NewRelatedCard noticia = {nota}></NewRelatedCard>)
        }
        
      </div>
    </div>
  );
};

export default NewRelated;
