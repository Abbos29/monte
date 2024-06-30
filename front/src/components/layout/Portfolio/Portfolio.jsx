import { useState } from 'react'
import Card from '../../ui/Card/Card'
import s from './Portfolio.module.scss'

import cardsData from './cardsData.js'

const Portfolio = () => {

    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    const filteredCards = selectedCategory === 'All'
        ? cardsData
        : cardsData.filter(card => card.category === selectedCategory)


    return (
        <section className={s.portfolio}>
            <div className="container">
                <div className={s.top}>
                    <h2>Explore Our Property Portfolio</h2>

                    <div className={s.btns}>
                        <button 
                            className={selectedCategory === 'All' ? s.active : ''} 
                            onClick={() => handleCategoryChange('All')}
                        >
                            All
                        </button>
                        <button 
                            className={selectedCategory === 'Apartments' ? s.active : ''} 
                            onClick={() => handleCategoryChange('Apartments')}
                        >
                            Apartments
                        </button>
                        <button 
                            className={selectedCategory === 'Villas' ? s.active : ''} 
                            onClick={() => handleCategoryChange('Villas')}
                        >
                            Villas
                        </button>
                        <button 
                            className={selectedCategory === 'For Rent' ? s.active : ''} 
                            onClick={() => handleCategoryChange('For Rent')}
                        >
                            For Rent
                        </button>
                    </div>
                </div>

                <div className={s.wrapper}>

                    {filteredCards.map((card) => (
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
