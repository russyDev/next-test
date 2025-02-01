'use client'
import Image from "next/image";

import {Pagination, Autoplay} from 'swiper/modules';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './styles.css';

import slide_1 from '@/assets/img/leaders/leader_1.png';
import slide_2 from '@/assets/img/leaders/leader_2.png';
import slide_3 from '@/assets/img/leaders/leader_3.png';
import classNames from "classnames";

export const Leaders = () => {

    return <section className="px-5 pt-14 pb-16 bg-primary md:pb-[67px] md:pt-28 lg:pt-25">
        <div
            className="flex flex-col justify-center items-center gap-5 m-auto text-center overflow-hidden md:flex-row md:max-w-[1120px] lg:max-w-[1170px] lg:items-start">
            <h3 className="text-white text-[35px] font-semibold capitalize md:max-w-[439px] md:text-left lg:text-5xl ">Recognized By Industry Leaders</h3>
            <Swiper
                id="leader-slider"
                slidesPerView={2}
                spaceBetween={1}
                loop={true}
                autoHeight={false}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3500,
                }}
                breakpoints={{
                    768: {
                        loop: false,
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className={classNames(
                    "flex-none w-[395px] relative lg:w-[535px]",
                    "before:content-[''] before:absolute before:top-0 before:left-0 before:z-[2] before:bg-gradient-to-l before:from-transparent before:to-primary before:w-25 before:h-full",
                    "after:content-[''] after:absolute after:top-0 after:right-0 after:z-[2] after:bg-gradient-to-l after:from-primary after:to-transparent after:w-25 after:h-full"
                )}
            >
                <SwiperSlide>
                    <Image src={slide_1} alt="leader_1"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_2} alt="leader_2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_3} alt="leader_3"/>
                </SwiperSlide>
            </Swiper>


        </div>
    </section>
}