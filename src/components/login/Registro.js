import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./style/login.css";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import Alert from "react-bootstrap/Alert";
import { faDiceThree } from "@fortawesome/free-solid-svg-icons";

const Registro = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [repContraña, setRepContraseña] = useState("");
  const [error, setError] = useState(false);
  const [errorTxt, setErrorTxt] = useState(
    "Se debe completar todos los campos"
  );
  const [terminos, setTerminos] = useState(false);
  const [validarCorreo, setValidarCorreo] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);
  const [localidad, setLocalidad] = useState("");
  const [codPostal, setCodPostal] = useState(0);
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [usuario, setUsuario] = useState("");

  const aceptarTerminos = (e) => {
    setTerminos(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const condicion =
      nombre === "" ||
      apellido === "" ||
      (email === "") === true ||
      contraseña === "" ||
      terminos === false ||
      repContraña === "" ||
      localidad === "" ||
      codPostal === "" ||
      telefono === "" ||
      direccion === "" ||
      usuario === "";
    if (condicion) {
      setError(true);
      return;
    }

    if (contraseña !== repContraña) {
      setErrorTxt("Las contraseñas NO coinciden");
      setError(true);
      return;
    }
    setError(false);
    const usuarioNuevo = {
      nombre,
      apellido,
      direccion,
      localidad,
      codPostal,
      telefono,
      correo: email,
      perfil: "publico",
      usuario,
      contrasenia: contraseña,
      estado: false,
    };
    try {
      const resultado = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Administracion/Usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuarioNuevo),
        }
      );
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
    if (input !== "" && expresion.test(input)) {
      setValidarCorreo(true);
      setErrorCorreo(false);
    } else {
      setValidarCorreo(false);
      setErrorCorreo(true);
    }
  };

  return (
    <div className="py-2">
      <div className="fixed-bg d-none d-md-block d-lg-block">
        <img
          src={process.env.PUBLIC_URL + "/bglogin.jpg"}
          className="bglogin"
        ></img> 
      </div>
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-12 col-md-8 col-lg-8 my-3">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Registrarse</Card.Title>
              <Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="d-flex" >
                    <Form.Control className="mr-1" controlId="formBasicNombre"
                      onChange={(e) => setNombre(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Nombre"
                      name="nombre"
                    />
                    <Form.Control className="ml-1" controlId="formBasicApellido"
                      onChange={(e) => setApellido(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Apellido"
                      name="apellido"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicDireccion">
                    <Form.Control
                      onChange={(e) => setDireccion(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Direccion"
                      name="Direccion"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicLocalidad">
                    <Form.Control
                      onChange={(e) => setLocalidad(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Localidad"
                      name="localidad"
                    />
                  </Form.Group>

                  <Form.Group className="d-flex">
                    <Form.Control className="mr-1" controlId="formBasicCodPostal"
                      onChange={(e) => setCodPostal(e.target.value)}
                      type="number"
                      placeholder="Ingrese su Codigo Postal"
                      name="codPostal"
                    />
                     <Form.Control className="ml-1" controlId="formBasicTelefono"
                      onChange={(e) => setTelefono(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Telefono"
                      name="telefono"
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
                    {errorCorreo ? (
                      <Alert className="mt-4" variant={"danger"}>
                        Debe ingresar una dirección de Correo Válida.
                      </Alert>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formBasicUsuario">
                    <Form.Control
                      onChange={(e) => setUsuario(e.target.value)}
                      type="text"
                      placeholder="Ingrese su Usuario"
                      name="usuario"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex my-4" >
                    <Form.Control className="mr-1" controlId="formBasicPassword"
                      onChange={(e) => setContraseña(e.target.value)}
                      type="password"
                      placeholder=" Ingrese una Contraseña"
                      name="password"
                    />
                     <Form.Control className="ml-1" controlId="formBasicRepeatPassword"
                      onChange={(e) => setRepContraseña(e.target.value)}
                      type="password"
                      placeholder=" Repita la Contraseña"
                      name="repeatPassword"
                    />
                  </Form.Group>
{/* 
                  <Form.Group
                    className="my-4"
                    
                  >
                    <Form.Control controlId="formBasicRepeatPassword"
                      onChange={(e) => setRepContraseña(e.target.value)}
                      type="password"
                      placeholder=" Repita la Contraseña"
                      name="repeatPassword"
                    />
                  </Form.Group> */}
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      onChange={aceptarTerminos}
                      className="text-muted"
                      type="checkbox"
                      label="Estoy de Acuerdo con los Términos y Condiciones"
                    />
                  </Form.Group>
                  {error ? (
                    <Alert className="mt-4" variant={"danger"}>
                      {errorTxt}
                    </Alert>
                  ) : null}
                  <Button
                    className="mb-3 text-white amarillo"
                    type="submit"
                    size="lg"
                    block
                  >
                    Registrarme
                  </Button>
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
              <div className="d-flex justify-content-around mt-4">
              <Link className="text-secondary" to="error404/Error404">
                    ¿Necesitás ayuda?
                  </Link>

                <p className="text-secondary">¿Ya tenés una cuenta?</p>
                <div>
                <Link className="text-danger" to="/login/ingresar">
                  Ingresar
                </Link>
              </div>
              </div>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Registro);
