import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FormControl } from "react-bootstrap";
import "./style/login.css";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";

const Registro = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [terminos, setTerminos] = useState(false);
  const [validarCorreo, setValidarCorreo] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);

  const aceptarTerminos = (e) => {
    setTerminos(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellido === "" ||
      (email === email) === true ||
      contraseña === "" ||
      terminos === false
    ) {
      setError(true);
      return;
    }
    setError(false);
    const usuarioNuevo = {
      nombre,
      apellido,
      email,
      contraseña,
      claseUsuario: "publico",
      statusLogin: false,
    };

    try {
      const resultado = await fetch("http://localhost:4000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioNuevo),
      });
      if (resultado.status === 201) {
        Swal.fire("Listo!", "Usuario Creado Correctamente", "success");
        props.history.push("/login/ingresar");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>No se pudo crear el usuario.</p>",
      });
      console.log(error);
    }
  };

  const validarEmail = (input) => {
    const expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input != "" && expresion.test(input)) {
      setValidarCorreo(true);
      setErrorCorreo(false);
    } else {
      setValidarCorreo(false);
      setErrorCorreo(true);
    }
  };

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
                      onChange={(e) => setContraseña(e.target.value)}
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

export default withRouter(Registro);
