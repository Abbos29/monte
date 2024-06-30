import s from './Partners.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const Partners = () => {
    return (
        <section className={s.partners}>
            <div className="container">
                <h3 className={s.title}>Our valued partners</h3>

                <Swiper
                    className={s.swiperContainer}
                    spaceBetween={40}
                    slidesPerView={2}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{

                        480: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 70,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 150,
                        },
                    }}
                >

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-1.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-2.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-3.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-4.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-5.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-6.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} style={{ width: '75px', margin: '0 auto', display: 'block' }} src="/parnter-7.svg" alt="icon" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className={s.swiper_img} src="/parnter-8.svg" alt="icon" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Partners