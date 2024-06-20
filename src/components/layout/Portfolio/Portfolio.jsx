import Card from '../../ui/Card/Card'
import s from './Portfolio.module.scss'

import cardsData from './cardsData.js'

const Portfolio = () => {
    return (
        <section className={s.portfolio}>
            <div className="container">
                <div className={s.top}>
                    <h2>Explore Our Property Portfolio</h2>

                    <div className={s.btns}>
                        <button className={s.active}>Apartments</button>
                        <button className=''>Villas</button>
                        <button className=''>For Rent</button>
                    </div>
                </div>

                <div className={s.wrapper}>

                    {cardsData.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>

                <div className={s.bottom}>
                    <div></div>

                    <button className={s.all_btn}>All Properties</button>

                    <div className={s.bottom_btns}>
                        <p>Dont Miss Out on Hot Deals! <br />
                            Follow Us on Social Media</p>

                        <a href="#">
                            <img src="/icon-yt.svg" alt="icon" />
                        </a>

                        <a href="#">
                            <img src="/icon-insta.svg" alt="icon" />
                        </a>

                        <a href="#">
                            <img src="/icon-tt.svg" alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
