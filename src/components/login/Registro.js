import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './style/login.css';

  return (
    <div className="py-5">
      <div className="fixed-bg">
        <img
          src={process.env.PUBLIC_URL + "/bglogin.jpg"}
          className="bglogin"
        ></img>
      </div>
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-10 col-md-4 col-lg-5 mt-5">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Registrarse</Card.Title>
              <Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicNombre">
                    <Form.Control
                      onChange={(e) => setNombre(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Nombre completo"
                      name="nombre"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicApellido">
                    <Form.Control
                      onChange={(e) => setApellido(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Apellido"
                      name="apellido"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onBlur={(e) => validarEmail(e.target.value)}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Ingrese un Email"
                      name="email"
                    />
                    {
                      // alerta en caso de no completar los datos al intentar el submit
                      errorCorreo ? (
                        <Alert className="mt-4" variant={"danger"}>
                          Debe ingresar una dirección de Correo Válida.
                        </Alert>
                      ) : null
                    }
                  </Form.Group>
                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder=" Ingrese una Contraseña"
                      name="password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      onChange={aceptarTerminos}
                      className="text-muted"
                      type="checkbox"
                      label="Estoy de Acuerdo con los Términos y Condiciones"
                    />
                  </Form.Group>
                  {
                    // alerta en caso de no completar los datos al intentar el submit
                    error ? (
                      <Alert className="mt-4" variant={"danger"}>
                        Se debe completar todos los campos
                      </Alert>
                    ) : null
                  }
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
                <Card.Link className="text-secondary" href="/error404/error404">
                  ¿Ya tenés una cuenta?
                </Card.Link>
              </div>
              <div className="mb-4">
                <Card.Link className="text-danger" href="/login/ingresar">
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

export default withRouter(Registro);
