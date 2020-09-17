import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Ingresar = (props) => {
  return (
    <div className="bg bg-warning py-5">
      {/* fondo de la pagina */}
      <img src="blogin.jpg"></img>
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-10 col-md-4 col-lg-5">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Ingresar</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email o Usuario" />
                  </Form.Group>
                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Control type="Contraseña" placeholder="Contraseña" />
                  </Form.Group>
                  <Button
                    className="mb-3 text-white amarillo"
                    type="submit"
                    size="lg"
                    block
                  >
                    Ingresar
                  </Button>
                  <Card.Link className="text-secondary" href="#">
                    ¿Necesitás ayuda?
                  </Card.Link>
                  <Button
                    className="my-4 text-white rojo d-flex align-content-center justify-content-center"
                    type="submit"
                    size="lg"
                    block
                  >
                    Ingresa con Google
                    <FontAwesomeIcon
                      className="mx-2 mt-1"
                      icon={faGoogle}
                      size="1x"
                    ></FontAwesomeIcon>
                  </Button>
                </Form>
              </Card.Text>
              <hr></hr>
              <div className="mt-4">
                <Card.Link className="text-secondary" href="#">
                  ¿No tenés una cuenta?
                </Card.Link>
              </div>
              <div className="mb-4">
                <Card.Link className="text-danger" href="#">
                  Registrarme ahora
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ingresar;
