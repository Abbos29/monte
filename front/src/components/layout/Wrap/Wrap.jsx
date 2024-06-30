import s from './Wrap.module.scss'

const Wrap = () => {
    return (
        <section className={s.wrap}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.inner}>
                        <button>
                            <img src="/wrap-icon-1.svg" alt="icon" />
                        </button>

                        <button>
                            <img src="/wrap-icon-2.svg" alt="icon" />
                        </button>
                    </div>

                    <div className={s.box}>
                        <marquee direction="left">
                            <li>Apartments with an initial payment from $25,000</li>
                        </marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wrap