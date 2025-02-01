import Image from 'next/image';
import checkIcon from '@/assets/icons/list-check.svg';

export const BookingForm = () => {

    return <section className="px-5 pt-20 pb-[78px] bg-white">
        <div
            className="flex flex-col gap-17 m-auto max-w-[515px] md:gap-11 md:flex-row md:max-w-[1120px] lg:max-w-[1247px]">

            <div className="md:grow">
                <h3 className="mb-6">
                    <span className="text-black text-[54px] font-bold leading-[64px] md:text-5xl md:leading-[53px]">Get a Demo Today of </span>
                    <span className="text-primary text-[54px] font-bold leading-[64px] md:text-5xl md:leading-[53px]">Mango Software</span>
                </h3>

                <p className="text-black text-2xl font-bold leading-[29px] mb-7">Eliminate wasted time with a practice
                    management software built for busy accountants.</p>

                <ul>
                    <li className="flex gap-4 mb-3 items-start">
                        <Image src={checkIcon} alt="check" className="mt-2"/> <span
                        className="text-black text-xl font-normal font-['Roboto']">Secure File-sharing and One-Click eSignatures</span>
                    </li>
                    <li className="flex gap-4 mb-3 items-start">
                        <Image src={checkIcon} alt="check" className="mt-2"/> <span
                        className="text-black text-xl font-normal font-['Roboto']">Powerful Time and Billing tools</span>
                    </li>
                    <li className="flex gap-4 mb-3 items-start">
                        <Image src={checkIcon} alt="check" className="mt-2"/> <span
                        className="text-black text-xl font-normal font-['Roboto']">Automated, Customizable Workflows</span>
                    </li>
                    <li className="flex gap-4 items-start">
                        <Image src={checkIcon} alt="check" className="mt-2"/> <span
                        className="text-black text-xl font-normal font-['Roboto']">Robust Reporting and Analytics</span>
                    </li>
                </ul>
            </div>

            <div className="md:w-[50%] md:flex-none md:pr-10">
                <p className="text-primary text-[28px] font-bold capitalize mb-4">Schedule Demo</p>

                <form action="/">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-span-1">
                            <label htmlFor="first-name"
                                   className="block text-[#0f1b24] text-sm font-medium leading-normal mb-1">First
                                name*</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    className="w-full outline-0 bg-white border border-[#0f1b24]/10 p-3 text-xl"
                                />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="flast-name"
                                   className="block text-[#0f1b24] text-sm font-medium leading-normal mb-1">Last
                                name*</label>
                            <input type="text" id="last-name"
                                   className="w-full outline-0 bg-white border border-[#0f1b24]/10 p-3 text-xl"/>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="email"
                                   className="block text-[#0f1b24] text-sm font-medium leading-normal mb-1">Email*</label>
                            <input type="email" id="email"
                                   className="w-full outline-0 bg-white border border-[#0f1b24]/10 p-3 text-xl"/>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="phone"
                                   className="block text-[#0f1b24] text-sm font-medium leading-normal mb-1">Phone
                                number*</label>
                            <input type="text" id="phone"
                                   className="w-full outline-0 bg-white border border-[#0f1b24]/10 p-3 text-xl"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="company"
                                   className="block text-[#0f1b24] text-sm font-medium leading-normal mb-1">Company
                                name*</label>
                            <input type="text" id="compay"
                                   className="w-full outline-0 bg-white border border-[#0f1b24]/10 p-3 text-xl"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="about"
                                   className="block text-[#0f1b24] text-sm font-medium leading-normal mb-1">How
                                did you hear about us?*</label>
                            <input type="text" id="about"
                                   className="w-full outline-0 bg-white border border-[#0f1b24]/10 p-3 text-xl"/>
                        </div>
                    </div>

                    <button className="btn mt-10 cursor-pointer flex items-center gap-2 group">
                        <span className="uppercase">Book now</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11" height="10" viewBox="0 0 11 10"
                            fill="none"
                            className="stroke-white group-hover:stroke-btn-green transition-all duration-200"
                        >
                            <path d="M1.42578 4.75977H9.42578" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M5.42578 0.759766L9.42578 4.75977L5.42578 8.75977" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>

            </div>

        </div>
    </section>
}