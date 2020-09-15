import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import './Moneda.css'

const Precio = () => {
  //state
  const [precio, setprecio] = useState([]);

  useEffect(() => {
    consultarDolar();
    setInterval(consultarDolar, 900000); //cada media hora
  }, []);

  const consultarDolar = async () => {
    const respuesta = await fetch("https://dolarapi.casalox.com/api/v1/dolar");
    const data = await respuesta.json();
    console.log(data);
    setprecio(data);
  };

  return (
    <div className="d-flex container justify-content-center ">
      <section className="row ">
        <Card className="col-sm-12 col-md-4 col-lg-4 col-xl-4 borde contenedorfijo">
          <Card.Body className="p-0 text-center">
            <p className="p-0 m-0"><strong>Dolar</strong>:{" "}
              {precio[0] && precio[0].sellPrice}/{precio[0] && precio[0].buyPrice}</p>
            <Card.Text className="p-0 m-0">
              
            </Card.Text>
            <Card.Text></Card.Text>
            
          </Card.Body>
        </Card>

        <Card className="col-sm-12 col-md-4 col-lg-4 col-xl-4 borde contenedorfijo">
          <Card.Body className="p-0 text-center">
            <p className="p-0 m-0"><strong>Blue</strong>:{" "}
              {precio[1] && precio[1].sellPrice}/{precio[1] && precio[1].buyPrice}</p>
  
          </Card.Body>
        </Card>

        <Card className="col-sm-12 col-md-4 col-lg-4 col-xl-4 borde contenedorfijo">
          <Card.Body className="p-0 text-center">
            <p className="p-0 m-0"><strong>Real</strong>:{" "}
              {precio[7] && precio[7].sellPrice}/{precio[7] && precio[7].buyPrice}</p>

            
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Precio;
