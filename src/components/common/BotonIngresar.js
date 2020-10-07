import React from 'react';

const BotonIngresar = (props) => {
    return (
        <FontAwesomeIcon key="15" icon={faUser} /> {props.sesion.usuario}
    );
};

export default BotonIngresar;