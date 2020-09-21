import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FormControl } from "react-bootstrap";
import "./style/login.css";

const Ingresar = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      setError(true);
      return;
    }
    setError(false);
    const usuarioBuscado = props.usuarios.find(
      (usuario) => usuario.email === email
    );
    // const usuarioEncontrado = usuarioBuscado[0];
    console.log(usuarioBuscado);
    if (
      email === usuarioBuscado.email &&
      password === usuarioBuscado.password
    ) {
      console.log("ANDA PAL ACA");
      return;
    }

    // const usuarioNuevo = {
    //   nombre,
    //   apellido,
    //   email,
    //   contraseña,
    //   claseUsuario: "publico",
    // };
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
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Contraseña"
                      name="password"
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
