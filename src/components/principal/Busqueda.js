import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import {Form, Button} from "react-bootstrap";



const categoria = [
  'Actualidad',
  'espectaculo',
  'covid19'
];

const Busqueda = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange= (e)=> {
    e.preventDefault();

   if(!searchTerm){
      return setSearchTerm({error:'por favor escriba texto valido'})
    }
   fetch(searchTerm)
    setSearchTerm(e.target.value);
  }; 
  useEffect(()=> {
    const results = categoria.filter(categoria  => categoria.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  },[searchTerm]);

  return (
    <div>
      <Form >
    <input
    type="text"
    placeholder=" Buscar "
    value={searchTerm} onChange={handleChange}
    className="btn-sm "
  />
  <Button className=" azul btn-ms" type='submit' >
    <FontAwesomeIcon icon={faSearch} />
  </Button>
{<ul> 
  {searchResults.map(item=>(
    <li>{item}</li>
  ))} 
</ul> }
</Form>
</div>
  );
};

export default Busqueda;