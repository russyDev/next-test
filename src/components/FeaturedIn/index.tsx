'use client'
import Image from "next/image";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '@/assets/img/features_slider/1.png';
import slide2 from '@/assets/img/features_slider/2.png';
import slide3 from '@/assets/img/features_slider/3.png';
import classNames from "classnames";


export const FeaturedIn = () => {

    return <section className="featured-in pt-25 px-5 m-auto md:max-w-[1140px]">
        <h3 className="text-primary text-center font-semibold text-xl mb-7">Proudly Featured In</h3>
        <div className={classNames(
            'relative before:content-[""] before:absolute before:w-[218.39px] before:max-w-[30%] before:h-full before:z-10 before:[background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,.2)_50%,rgba(255,255,255,0)_100%)]',
            'after:content-[""] after:absolute after:top-0 after:right-0 after:w-[218.39px] after:max-w-[30%] after:h-full after:z-10 after:[background:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(0,0,0,.2)_50%,rgba(255,255,255,0)_100%)]'
        )}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        loop: false,
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <Image src={slide1} alt="Slide 1" priority/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide2} alt="Slide 2" priority/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide3} alt="Slide 3" priority/>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
}