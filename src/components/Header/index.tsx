'use client'

import Image from "next/image";
import logo from "@/assets/img/logo.png";
import Link from "next/link";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {MobileMenu} from "@/components/MobileMenu";
import slide1 from "@/assets/img/header_slider/1.png";
import slide2 from "@/assets/img/header_slider/2.png";
import slide3 from "@/assets/img/header_slider/3.png";
import slide4 from "@/assets/img/header_slider/4.png";
import promo from "@/assets/img/header_promo.png";

export const Header = () => {

    return <header className="flex flex-col p-3 pb-24 items-center bg-primary-dark">
        <div className="max-w-[574px] flex items-center justify-between w-full md:max-w-(--max-width)">
            <Image src={logo} alt="logo"/>
            <div className="flex gap-3 items-center">
                <Link className="btn" href="">Schedule a Demo</Link>
                <MobileMenu />
            </div>
        </div>

        <div className="w-full max-w-(--max-width) flex flex-col items-center md:flex-row md:justify-between md:items-center md:gap-8">

            <div className="max-w-[414px] pt-[120px] mb-8 md:max-w-full md:pb-32">
                <h1 className="text-white text-title font-bold capitalize font-inter mb-[19px]">
                    Effortless accounting practice management
                </h1>
                <p className="text-white font-normal text-xl font-[Roboto] mb-[28px]">
                    Build the best version of your accounting firm. Simplify management—from client communication to reporting—all in one place.
                </p>
                <Link className="btn text-xl px-10 py-[25px] mb-10" href="">Schedule a Demo</Link>
                <div className="max-w-full w-[320px] overflow-hidden flex justify-start px-10 md:w-[300px] md:px-0 lg:w-[500px]">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={40}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                loop: false
                            },
                            768: {
                                slidesPerView: 4,
                                loop: false,
                                spaceBetween: 10
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image src={slide1} alt="slide1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={slide2} alt="slide2"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={slide3} alt="slide3"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={slide4} alt="slide4"/>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
            {/*<div className="mr-14.5 md:mr-7.5 md:mt-6">
                <Image
                    src={promo}
                    alt="header-promo"
                    className="mr-14.5 md:mr-7.5 md:mt-6"
                />
            </div>*/}
            <Image
                src={promo}
                alt="header-promo"
                className="mr-14.5 md:mr-7.5 md:mt-6"
            />
        </div>
    </header>
}