import './App.css'
import Card from './componentes/Card'
import  Title  from './componentes/Title'
import { pokeapi } from './componentes/api/pokeapi'
import axios from 'axios'



function App() {

  pokeapi.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  .then( resp => {
      console.log( resp.data );
  })

  return (
    <>
      <Title/>
      <Card />
    </>
  )
}

export default App
