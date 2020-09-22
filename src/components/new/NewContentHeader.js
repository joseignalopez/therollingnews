import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import {faFacebookSquare, faInstagramSquare, faTwitterSquare} from "@fortawesome /free-brands-svg-icons"; */
/* import {faEnvelope} from '@fortawesome/free-solid-svg-icons' */
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { instagram } from '@fortawesome/free-solid-svg-icons';


const NewContentHeader = (props) => {
  return (
    <div>
      <h5 className="card-text type-Future">
        <small className="text-muted">
          BreadCurm - <Link to={"/"}>Home</Link> -
          <Link to="/{props.categoria}">{props.categoria}</Link>
        </small>
      </h5>{" "}
      <h1 className="type-Future font-weight-bolder">{props.titulo}</h1>
      <div className="d-flex justify-content-between">
        <p className="card-text type-Future">
          <small className="text-muted">{props.fecha}</small>
        </p>
        <div>
          <p className="type-Future">COMPARTIR</p>
          <Link variant="light" to={`/error`}>
            <FontAwesomeIcon icon={["fab", "fa-facebook"]}></FontAwesomeIcon>
            <FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
            <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
            <FontAwesomeIcon icon={["fab", "whatsapp"]}></FontAwesomeIcon>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentHeader;
