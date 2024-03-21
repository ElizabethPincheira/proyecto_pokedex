import './App.css';
import Card from './componentes/Card';
import Title from './componentes/Title';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

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
      <article className='grancontainer'>
        {pokemones.map((pokemon, index) => (
          <Card key={index}
            id={index + 1} />
        ))}
      </article>
    </>
  )
}

export default App