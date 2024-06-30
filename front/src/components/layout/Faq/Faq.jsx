import { useState } from 'react'
import s from './Faq.module.scss'
import faqData from './faqData'



const Faq = () => {

    const [openAcc, setOpenAcc] = useState(null)

    const toggleAccordion = (index) => {
        if (openAcc === index) {
            setOpenAcc(null)
        } else {
            setOpenAcc(index)
        }
    }

    return (
        <section className={s.faq}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.info}>
                        <h4>Explore Our Advantages</h4>
                        <h2 className="section-title">Frequent Asked Questions</h2>
                        <p>At Monte, we offer more than just real estate services; we provide an unparalleled experience tailored to meet your needs and exceed your expectations. </p>
                    </div>

                    <div className={s.acc}>
                        {faqData.map((item, index) => (
                            <div className={s.acc_item} key={index}>
                                <div className={s.acc_top} onClick={() => toggleAccordion(index)}>
                                    <h4>{item.title}</h4>
                                    <div className={s.acc_plus}>{openAcc === index ? '-' : '+'}</div>
                                </div>
                                <div className={`${s.acc_box} ${openAcc === index ? `${s.open}` : ''}`}>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq