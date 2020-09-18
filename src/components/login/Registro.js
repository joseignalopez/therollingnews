import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FormControl } from "react-bootstrap";

const Registro = () => {
  return (
    <div className="bg bg-success py-5">
      {/* <div className="fixed-bg">
    <img src={process.env.PUBLIC_URL+"https://tecno.americaeconomia.com/sites/tecno.americaeconomia.com/files/styles/photo_inline/public/hombre_tablet.jpg?itok=j5mscLdz"}></img>
    </div> */}
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-10 col-md-4 col-lg-5">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Registrarse</Card.Title>
              <Card.Text>
                <Form>
                  <Form.Group controlId="formBasicNombre">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su Nombre completo"
                      name="nombre"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicApellido">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su Apellido"
                      name="apellido"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Ingrese un Email"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Control
                      type="Contraseña"
                      placeholder=" Ingrese una Contraseña"
                      name="password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      className="text-muted"
                      type="checkbox"
                      label="Estoy de Acuerdo con los Términos y Condiciones"
                    />
                  </Form.Group>

                  <Button
                    className="mb-3 text-white amarillo"
                    type="submit"
                    size="lg"
                    block
                  >
                    Registrarme
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
                    Registrarme con Google
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
                  ¿Ya tenés una cuenta?
                </Card.Link>
              </div>
              <div className="mb-4">
                <Card.Link className="text-danger" href="#">
                  Ingresar
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registro;
