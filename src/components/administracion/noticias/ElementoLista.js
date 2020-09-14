import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ElementoLista = (props) => {
  return (
    <tr>
      <td>{props.noticia.id} </td>
      <td>{props.noticia.titulo}</td>
      <td>{props.noticia.categoria}</td>
      <td>
        <span className="mx-2 destacar"><FontAwesomeIcon icon={faCheckCircle} size="2x"></FontAwesomeIcon></span>
        <span className="mx-1"><a className="editar" href=""><FontAwesomeIcon icon={faEdit} size="2x"></FontAwesomeIcon></a></span>
        <span className="mx-1 eliminar"><FontAwesomeIcon icon={faTrashAlt} size="2x"></FontAwesomeIcon></span>
      </td>
    </tr>
  );
};

export default ElementoLista;
