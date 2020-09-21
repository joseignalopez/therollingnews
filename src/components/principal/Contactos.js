import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from 'react-router-dom';


const Contactos = (props) => {
  const [nomApe, setNomApe] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [error, setError] = useState(false);
  const [terminos, setTerminos] = useState(false);
  const [validarCorreo, setValidarCorreo] = useState(false);
  const [errorCorreo, setErrorCorreo] = useState(false);


  const aceptarTerminos = (e) => {
    setTerminos(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(
      nomApe.trim()  === "" ||
      email.trim()   === "" ||
      consulta.trim() === ""||
      terminos === false
    ){
      setError(true);
      return;
    }
    setError(false);
    const datos ={
      nomApe,
      email,consulta  
    };
    const validarEmail = (input) =>{
      const expresion =  /\w+@\w+\.[a-z]{2,}$/;
      if (input != "" && expresion.test(input)) {
        setValidarCorreo(true);
        setErrorCorreo(false);
      } else {
        setValidarCorreo(false);
        setErrorCorreo(true);
      }
    };

    try{ 
      
      const resultado = await fetch(
        "http://localhost:4000/principal/contactos",
        {
          method="POST",
          headers:{
            "Content-Type": "application/json",
          }
        }
        );
      if (resultado.status === 201) {
        props.setConsulta(true)
        Swal.fire("Listo!", "La Consulta fue enviada correctamente", "success")
        props.history.push("/principal/contactos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row text-center shadow">
        <div className="col-sm-12 col-md-6 text-center mt-3 mb-3">
          <img
            className="w-100"
            src={process.env.PUBLIC_URL + "/therollingthimes.png"} alt="The Rolling Thimes"
            
          ></img>
        </div>
        <div className="col-sm-12 col-md-6  text-center mb-3 mt-3">
          <h5>Envianos tu consulta</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="text" placeholder="Juan Perez" onChange={(e)=>setNomApe(e.target.value)}/>
            
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="juanperez@gmail.com" onChange={(e)=> setEmail(e.target.value)} onBlur={(e)=> validarEmail(e.target.value)}/>
              {
                      // alerta en caso de no completar los datos al intentar el submit
                      errorCorreo ? (
                        <Alert className="mt-4" variant={"danger"}>
                          Debe ingresar una dirección de Correo Válida.
                        </Alert>
                      ) : null
                    }
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Consulta</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese su consulta" onChange={(e)=> setConsulta(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
               onChange={aceptarTerminos}
                type="checkbox"
                label="Acepto Terminos y condiciones"
              />
            </Form.Group>
            {
          // alerta en caso de no completar los datos al intentar el submit
          error ? (
            <Alert className="mt-4" variant={"danger"}>
              Se debe ingresar todos los campos
            </Alert>
          ) : null
        }
            <Button variant="primary" className=" azul" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default  withRouter(Contactos);
