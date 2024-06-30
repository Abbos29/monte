// import React from 'react';
import s from './Discover.module.scss';

const Discover = () => {
    return (
        <section className={s.discover}>
            <div className='container'>
                <div className={s.gridContainer}>
                    <div className={`${s.card} ${s.card1}`} style={{ backgroundImage: 'url(card-1.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Luxury Villas</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card2}`} style={{ backgroundImage: 'url(card-2.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Penthouse Suites</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card3}`} style={{ backgroundImage: 'url(card-3.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Apartments</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card4}`} style={{ backgroundImage: 'url(card-4.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Beachfront Properties</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card5}`} style={{ backgroundImage: 'url(card-5.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Golf Course Residences</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card6}`} style={{ backgroundImage: 'url(card-5.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Townhouses</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card7}`} style={{ backgroundImage: 'url(card-2.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Waterfront Homes</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card8}`} style={{ backgroundImage: 'url(card-4.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Holiday Homes</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card9}`} style={{ backgroundImage: 'url(card-3.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Commercial Spaces</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card10}`} style={{ backgroundImage: 'url(card-1.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Investment</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card11}`} style={{ backgroundImage: 'url(card-3.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Eco-friendly Properties</h3>
                        </div>
                    </div>
                    <div className={`${s.card} ${s.card12}`} style={{ backgroundImage: 'url(card-2.jpg)' }}>
                        <div className={s.cardContent}>
                            <h3>Desert Retreats</h3>
                        </div>
                    </div>
                    <div className={s.centerCard}>
                        <p>Explore Our Diverse Range of Property Types and Find Your Perfect Match</p>
                        <button>Catalog Download</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Discover;
