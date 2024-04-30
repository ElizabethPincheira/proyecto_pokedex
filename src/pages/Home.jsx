import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Title from '../componentes/title/Title';
import Card from '../componentes/card/Card';


const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

export const Home = () => {



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




