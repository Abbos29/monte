import s from './Card.module.scss'

const Card = ({ title, location, items, bgImg }) => {
    return (
        <div className={s.card} style={{backgroundImage:`url(${bgImg})`}}>
            <div className={s.card_top}>
                <h4>{title}</h4>
                <button>
                    <img src="/arrow-icon.svg" alt="arrow" />
                </button>
            </div>

            <div className={s.card_box}>
                <div className={s.card_location}>
                    <img src="/location-icon.svg" alt="icon-location" />
                    <p>{location}</p>
                </div>

                <div className={s.card_grid}>
                    {items.map((item, index) => (
                        <div key={index} className={s.card_item}>
                            <p>{item.text}</p>
                            <b>{item.from}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card