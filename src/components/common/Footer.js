import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="rojo">
      <section className="container py-4">
        <div className="text-center row text-light">
          <div className="col-sm-12 col-md-4 list-unstyled mb-4 d-flex flex-column justify-content-around">
            <li className="pb-1">
              <a href="/principal/nosotros" className="text-light">
                Acerca de nosotros
              </a>
            </li>
            <li className="py-1">
              <a href="error404/error" className="text-light">
                Términos y condiciones
              </a>
            </li>
            <li className="py-1">
              <a href="error404/error" className="text-light">
                Cookies
              </a>
            </li>
            <li className="py-1">
              <a href="error404/error" className="text-light">
                Contacto
              </a>
            </li>
            <li className="py-1">
              <a href="error404/error" className="text-light">
                Publicitar con nosotros
              </a>
            </li>
            <li className="pt-1">
              <a href="error404/error" className="text-light">
                Políticas de privacidad
              </a>
            </li>
          </div>
          <div className="col-sm-12 col-md-4 sm-mb-4">
            <img
              src={process.env.PUBLIC_URL + "/therollingthimes.png"}
              width="70%"
              alt="The Rolling Times"
            />
            <ul className="list-unstyled d-flex justify-content-center p-0 mt-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-light mr-2"
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    size="3x"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-light mx-2"
                >
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    size="3x"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-light mx-2"
                >
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    size="3x"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://gmail.com"
                  target="_blank"
                  className="text-light ml-2"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="3x"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4 list-unstyled d-flex flex-column justify-content-around">
            <li className="pb-1">
              <a href="" className="text-light">
                <b>Secciones:</b>
              </a>
            </li>
            {props.categorias.map((categoria) => (
              <li key={categoria._id} className="py-1">
                <Link to={`/Categoria/${categoria.nombre}`} className="text-light">
                  {categoria.nombre}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-center py-2 bg-dark text-light">
        &copy; Todos los derechos reservados - The Rolling Times
      </footer>
    </div>
  );
};

export default Footer;
