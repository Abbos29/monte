import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.left}>
                        <div className={s.left_nav}>
                            <img className={s.logo} src="/logo.png" alt="logo" />

                            <div className={s.btns}>
                                <button>
                                    <img src="/nav-icon-1.svg" alt="icon" />
                                </button>
                                <button>
                                    <img src="/nav-icon-2.svg" alt="icon" />
                                </button>
                            </div>

                        </div>

                        <div className={s.left_box}>
                            <p>Building Your Dreams</p>
                            <h1>Real Estate in Dubai: Ideal for Living and Investing</h1>
                        </div>

                        <div className={s.left_nav}>
                            <div className={s.contact_btn}>
                                <img src="/phone-icon.svg" alt="icon-phone" />
                                <span>Contact Us Now</span>
                            </div>

                            <div className={s.explore_btn}>
                                <span>Explore All <br /> Our Properties</span>
                                <img src="/explore-icon.svg" alt="icon-explore" />
                            </div>
                        </div>
                    </div>

                    <div className={s.right}>
                        <div className={s.right_nav}>
                            <p>More than 1500 real estate properties</p>
                            <p>From $145,000 with a yield of 10% per annum</p>

                            <div className={s.btns}>
                                <button>
                                    <img src="/nav-icon-3.svg" alt="icon" />
                                </button>
                                <button>
                                    <img src="/nav-icon-4.svg" alt="icon" />
                                </button>
                            </div>
                        </div>

                        <div className={s.right_box}>
                            <button>
                                <span>catalog <br /> download</span>
                                <img src="/download-icon.svg" alt="icon-download" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
