import './card_styles.css'
import './title_styles.css'
import poke from '../assets/001.png'



const Card = () => {




return (
    <>
        <article className='grancontainer'>
            <div className='containercard'>
                <section className='secciontexto'>
                    <span className='nombre'>Bulbasaur</span>
                    <span className='fondotexto'><mark>"  Grass  "</mark></span>
                    <span className='fondotexto'><mark>"  Poison  "</mark></span>
                </section>
                <section className='seccionimg'>
                    <div className='numero'><span>#000</span></div>
                    <img src={poke} className="imgpoke" alt="poke" />
                </section>
            </div>
        </article>


    </>
)
}

export default Card