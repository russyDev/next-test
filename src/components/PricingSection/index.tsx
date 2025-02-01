'use client'

import {Pagination} from 'swiper/modules';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {PriceType} from "@/components/PricingSection/type";
import {Pricing} from "@/components/PricingSection/Pricing";

import './styles.css';

const pricingData: PriceType[] = [
    {
        subTitle: 'Essential Tools for Professionals',
        name: 'basic',
        price: '35',
        title: 'Time & Billing',
        features: [
            "Unlimited Storage",
            "Time Tracking",
            "User Dashboards",
            "Activity & User Rates",
            "Manual, Batch & Recurring Invoicing",
            "User Permissions",
            "Branded Invoicing",
            "Comprehensive Reporting",
            "To-Do Lists",
            "WIP",
            "Google Calendar Integration",
            "Integrated Payments",
            "eSignatures",
            "Engagement Letters",
            "Client Portal"
        ]
    },
    {
        subTitle: 'Great for Growing Businesses',
        name: 'plus',
        price: '55',
        title: 'Project Management',
        features: [
            "Everything in Basic",
            "Comprehensive Dashboards",
            "Customized Reports for Projects & Tasks",
            "Quick Project Creation with Templates",
            "Customized Workflows",
            "Quick Tagging & Note Taking",
            "Project Budgeting",
            "E-mail Notifications",
            "Automations & Reminders",
            "Company Dashboards"
        ]
    },
    {
        subTitle: 'Our Most Popular Tool',
        name: 'pro',
        price: '69',
        title: 'Document Management',
        features: [
            "Everything in Plus",
            "Capacity Planning",
            "Outlook Plug-in",
            "Chrome Integration",
            "IR Compliant eSign w / KBA",
            "Password-less File Sharing",
            "Unlimited Document Storage",
            "Secure File Sharing",
            "Bank Level Security",
            "File Versioning",
            "QuickBooks Online & QuickBooks Desktop",
            "Email Automation"
        ]
    }
]
export const PricingSection = () => {

    return <section className="pricing-section px-5 pt-25 pb-[78px] bg-primary-dark">
        <div className="m-auto md:max-w-[1120px] lg:max-w-[1170px]">
            <h2 className="text-center text-white text-xl font-semibold leading-7 mb-4">Pricing</h2>
            <h3 className="text-center text-white text-5xl font-bold capitalize leading-[56px] sm:px-25 mb-5">Pick a
                plan that works for you</h3>
            <p className="text-center text-white text-xl font-light font-[Roboto] leading-7 sm:px-8 mb-12">Mango offers
                simple and straightforward pricing for practice management …and legal accounting.</p>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                loop={true}
                autoHeight={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        loop: false,
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="!pb-20"
            >
                {pricingData.map((price) => (
                    <SwiperSlide key={price.name}>
                        <Pricing price={price}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="text-white text-xl font-light font-[Roboto] leading-7 text-center mt-8">*All plans are per
                user, billed annually</p>
        </div>
    </section>
}