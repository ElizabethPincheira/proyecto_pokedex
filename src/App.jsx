import './App.css';
import Card from './componentes/Card';
import Title from './componentes/Title';
import axios from 'axios';
import { useState, useEffect } from 'react';

// aqui llega la url
const URL = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setPokemones(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  
  return (
    <>
      <Title />
      {pokemones.map((pokemon, index) => (
        <Card key={index} 
        id = {index+1} />
      ))}
    </>
  );
}

export default App;