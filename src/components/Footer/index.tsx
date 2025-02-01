import Image from 'next/image';
import logo from '@/assets/img/bottom_logo.png';
import facebookIcon from '@/assets/icons/facebook.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import xIcon from '@/assets/icons/x.svg';

import phone from '@/assets/icons/phone.svg';
import envelope from '@/assets/icons/envelope.svg';

export const Footer = () => {

    return <footer className="bg-primary-dark pt-14 md:pt-32 lg:pt-24">
        <div className="px-5 grid grid-cols-1 gap-10 pb-14 max-w-[1140px] mx-auto md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:pb-24">

            <div className="w-[254px] mx-auto md:w-full">
                <Image src={logo} alt="logo" className="mb-5" />
                <p className="text-white text-base font-normal font-['Montserrat'] leading-normal">Run your accounting firm your way.</p>

                <ul className="flex gap-2 mt-8">
                    <li>
                        <a href="">
                            <Image src={facebookIcon} alt="facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Image src={linkedinIcon} alt="linkedint"/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Image src={xIcon} alt="x"/>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="w-[254px] mx-auto md:w-full">
                <h3 className="text-white text-xl font-bold font-['Montserrat'] leading-7 mb-5">Pages</h3>
                <ul>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Benefits</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Testimonials</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Features</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Pricing</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Integration</a>
                    </li>
                </ul>
            </div>

            <div className="w-[254px] mx-auto md:w-full">
                <h3 className="text-white text-xl font-bold font-['Montserrat'] leading-7 mb-5">Other</h3>
                <ul>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">About Us</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Contact Us</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Privacy Policy</a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">Terms of Service</a>
                    </li>
                </ul>
            </div>

            <div className="w-[254px] mx-auto md:w-full">
                <h3 className="text-white text-xl font-bold font-['Montserrat'] leading-7 mb-5">Contact Information</h3>
                <ul>
                    <li className="mb-3">
                        <a href="" className="flex items-center gap-3 text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">
                            <Image src={phone} alt="phone" />
                            Sales: 1-866-404-5146
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="flex items-center gap-3 text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">
                            <Image src={phone} alt="phone" />
                            Support: 1-877-325-2985
                        </a>
                    </li>
                    <li className="mb-3">
                        <a href="" className="flex items-center gap-3 text-white text-base font-normal font-['Montserrat'] leading-normal transition duration-300 hover:text-primary">
                            <Image src={envelope} alt="envelope" />
                            Contact us
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="h-0.5 w-full border-t border-white/40"/>

        <div className="py-5">
            <p className="text-center text-white text-xs font-normal font-['Montserrat'] leading-7">Copyright © 2024 Mango. All rights reserved.</p>
        </div>
    </footer>
}