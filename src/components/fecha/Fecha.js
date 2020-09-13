import React, { useEffect, useState } from "react";

const Fecha = () => {
  const [fechaje, setFechaje] = useState("");

  useEffect(() => {
    const f = new Date();

    const showDate =
      f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

    setFechaje(showDate);
  }, []);

  return (
    <div className="text-center">
      <h1>{fechaje}</h1>
    </div>
  );
};

export default Fecha;
