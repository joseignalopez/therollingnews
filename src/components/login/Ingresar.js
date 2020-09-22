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

const Ingresar = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.usuarios);
    console.log(email);
    console.log(password);
    if (password === "" || email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>Email o contraseña incorrectas</p>",
      });
      return;
    } else {
      setError(false);
      const usuarioBuscado = props.usuarios.find(
        (usuario) => usuario.correo === email
      );
      console.log(usuarioBuscado);
      if (usuarioBuscado) {
        if (
          email === usuarioBuscado.correo &&
          password === usuarioBuscado.contrasenia
        ) {
          props.sesion(usuarioBuscado);
          Swal.fire(`Bienvenido ${usuarioBuscado.nombre}!`, "", "success");
          console.log("Usuario encontrado");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error!",
          footer: "<p>Email o contraseña incorrectas</p>",
        });
      }
    }
  };

  return (
    <div className="py-5">
      <div className="fixed-bg">
        <img
          src="https://inmediaciones.org/wp-content/uploads/2019/10/smartphones.jpg"
          className="bglogin"
        ></img>
      </div>
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-10 col-md-4 col-lg-5 mt-5">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Ingresar</Card.Title>
              <Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    className="mb-3 text-white amarillo"
                    type="submit"
                    size="lg"
                    block
                  >
                    Ingresar
                  </Button>
                  <Card.Link className="text-secondary" href="/error404">
                    ¿Necesitás ayuda?
                  </Card.Link>
                  <Button
                    className="my-4 text-white rojo d-flex align-content-center justify-content-center"
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
                <Card.Link className="text-secondary" href="/error404">
                  ¿No tenés una cuenta?
                </Card.Link>
              </div>
              <div className="mb-4">
                <Card.Link className="text-danger" href="/login/registro">
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

export default withRouter(Ingresar);
