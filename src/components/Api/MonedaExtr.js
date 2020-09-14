import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
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
    <div className="d-flex container-fluid justify-content-center">
      <section className="row">
        <Card className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <Card.Body className="p-0 text-center">
            <h5 className="p-0 m-0">{precio[0] && precio[0].type}</h5>
            <Card.Text className="p-0 m-0">
              {precio[0] && precio[0].sellTitle}:{" "}
              {precio[0] && precio[0].sellPrice}
            </Card.Text>
            <Card.Text></Card.Text>
            {precio[0] && precio[0].buyTitle}: {precio[0] && precio[0].buyPrice}
          </Card.Body>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <Card.Body className="p-0 text-center">
            <h5 className="p-0 m-0">{precio[1] && precio[1].type}</h5>

            <Card.Text className="p-0 m-0">
              {precio[1] && precio[1].sellTitle}:{" "}
              {precio[1] && precio[1].sellPrice}
            </Card.Text>
            <Card.Text>
              {precio[1] && precio[1].buyTitle}:{" "}
              {precio[1] && precio[1].buyPrice}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <Card.Body className="p-0 text-center">
            <h5 className="p-0 m-0">{precio[6] && precio[6].type}</h5>

            <Card.Text className="p-0 m-0">
              {precio[6] && precio[6].sellTitle}:{" "}
              {precio[6] && precio[6].sellPrice}
            </Card.Text>
            <Card.Text>
              {precio[6] && precio[6].buyTitle}:{" "}
              {precio[6] && precio[6].buyPrice}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <Card.Body className="p-0 text-center">
            <h5 className="p-0 m-0">{precio[7] && precio[7].type}</h5>

            <Card.Text className="p-0 m-0">
              {precio[7] && precio[7].sellTitle}:{" "}
              {precio[7] && precio[7].sellPrice}
            </Card.Text>

            <Card.Text>
              {precio[7] && precio[7].buyTitle}:{" "}
              {precio[7] && precio[7].buyPrice}
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default Precio;
