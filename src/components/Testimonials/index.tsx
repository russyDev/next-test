'use client'
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

// Import Swiper React components
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';


const testimonials = [
    {
        name: 'Winai Xiong',
        position: 'EA Payroll & Tax Solution, Inc., Clovis, CA',
        text: 'Thanks again for your help, I have mentioned Mango Billing to a few groups of colleagues, so hopefully they sign up soon as well. I used Jetpack Workflow, SmartCenter, ATOM and Mango beat them all in client management, time tracking and billing, and scheduling. If you guys can somehow add document management to it that will let you view, edit, save files directly in the system then you guys will definitely win over a lot of Tax and Accounting Firms.'
    },
    {
        name: 'Stephen Scott, CPA, MIM',
        position: 'Scott & Co, CPA, P.C., St Louis, Missouri',
        text: 'I implemented Mango Billing 5 months ago for our firm and wanted to drop you a line to thank you.  Over my 27 year career as a CPA we’ve used 4 different time and billing systems.  I was looking for a web based application that was easy to use.  Our previous desktop software was too cluttered with unimportant fields, verbose reports, and had occasional technical problems. I had been evaluating software for several months to replace our desktop system and was very pleased when I ran across Mango Billing.  The extensive features and simplicity are spot on for my firm.'
    },

]

export const Testimonials = () => {

    const swiperRef = useRef<SwiperRef>(null);
    const [isNavigationEnabled, setIsNavigationEnabled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 1024;
            setIsNavigationEnabled(isDesktop);
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.update();
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="testimonials-section bg-primary-dark px-5 pt-25 pb-[63px] md:pb-24">
          <div className="max-w-[1140px] mx-auto">
              <h3 className="text-center text-white text-xl font-semibold capitalize leading-7 mb-5 lg:mb-7">What Our Clients Are Saying</h3>
              <h4 className="text-center text-white text-[35px] font-bold capitalize leading-[42px] mb-5 lg:text-5xl lg:mb-7">Trusted by Industry Leaders</h4>
              <p className="max-w-[458px] text-center text-white text-xl font-normal font-['Roboto'] leading-7 ml-2 mb-7 md:max-w-full md:mb-5">Top accountants trust Mango to streamline their work and elevate client service.</p>

              <div className="relative lg:px-20">
                  <Swiper
                      ref={swiperRef}
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      navigation={{
                          enabled: isNavigationEnabled,
                          nextEl: '.button-next',
                          prevEl: '.button-prev',
                      }}
                      autoplay={{
                          delay: 4500,
                      }}
                      pagination={{
                          clickable: !isNavigationEnabled,
                          enabled: !isNavigationEnabled
                      }}
                      className="max-lg:!pb-12"
                      autoHeight={false}
                  >
                      {
                          testimonials.map((t) => (
                              <SwiperSlide key={t.name}>
                                  <div className="h-full min-h-[491.19px] flex flex-col p-14 bg-white text-center rounded-lg md:min-h-[407px] md:p-16 md:pt-15">
                                      <p className="grow text-center text-black text-xl font-normal leading-7">&#34;{t.text}&#34;</p>
                                      <div>
                                          <p className="text-center text-black text-base font-bold leading-tight">{t.name}</p>
                                          <p className="text-center text-800 text-sm font-medium font-['Roboto'] leading-normal">{t.position}</p>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))
                      }
                  </Swiper>

                  <div className="button-prev absolute left-3 top-[50%] translate-y-[-60%] hidden cursor-pointer lg:block">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.780029" width="48" height="48" rx="24" fill="white"/>
                          <path d="M29.2084 14.3633L18.7917 24.7799L29.2084 35.1966" stroke="#25CC13" strokeWidth="3.47222" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
                  <div className="button-next absolute z-10 right-3 top-[50%] translate-y-[-60%] hidden cursor-pointer lg:block ">
                      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.780029" width="48" height="48" rx="24" fill="white"/>
                          <path d="M18.7915 14.3633L29.2082 24.7799L18.7915 35.1966" stroke="#25CC13" strokeWidth="3.47222" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </div>
              </div>
              <div className="flex justify-center pt-4">
                  <Link className="btn text-xl px-10 py-[25px] lg:px-6" href="">Schedule a Demo</Link>
              </div>
          </div>
    </section>
    )
}