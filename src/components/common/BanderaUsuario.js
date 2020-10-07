import React from 'react';
import BotonIngresar from './BotonIngresar';
import BotonGreetings from './BotonGreetings'

const BanderaUsuario = () => {
    const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <BotonGreetings/>;
      }
      return <BotonIngresar />;
};

export default BanderaUsuario;