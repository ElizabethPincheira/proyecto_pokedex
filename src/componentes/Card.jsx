import './card_styles.css'
import poke from '../assets/001.png'

const Card = () => {
    return (
        <>
            <header>
                <h1>Pokedex</h1>
            </header>


            <article>
                <section>
                    <header>
                        <div><p>#000</p></div>
                        <div><p>Pokemon</p></div>
                    </header>
                    <div className='container'>
                        <div><p>elemento</p></div>
                        <img src={poke} className="poke" alt="poke" />
                    </div>
                </section>
            </article>
        </>
    )
}

export default Card