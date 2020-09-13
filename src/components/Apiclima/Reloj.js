import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const Reloj = () => {
  const [hora, setReloj] = useState();

  useEffect(() => {
    const intervale = () => {
      const element = (
        <div className="box-reloj">
          <h1 className="text-dark"> {new Date().toLocaleTimeString()}</h1>
        </div>
      );
      setReloj(element);
    };

    setInterval(intervale, 1000);
  }, []);

  return (
    <Card>
      <Card.Body>
        <>
          <h1>{hora}</h1>
        </>
      </Card.Body>
    </Card>
  );
};
export default Reloj;
