import './card_styles.css'
import './title_styles.css'
import axios from 'axios';
import { useState, useEffect } from 'react';


const Card = ({ id }) => {

    const urlForm = "https://pokeapi.co/api/v2/pokemon-form/" + id;

    const [poke, setPoke] = useState();

    useEffect(() => {
        axios.get(urlForm)
            .then((response) => {
                setPoke(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(poke)

    return (
        <>
            <section className='containercard'>
                <section className='secciontexto'>
                    <span className='nombre'>{poke?.name}</span>
                    <span className='fondotexto'><mark>"  Grass  "</mark></span>
                    <span className='fondotexto'><mark>"  Poison  "</mark></span>
                </section>
                <section className='seccionimg'>
                    <div className='numero'><span>#000</span></div>
                    <img src={poke?.sprites.front_default} className="imgpoke" alt="poke" />
                </section>
            </section>
        </>
    )
}

export default Card