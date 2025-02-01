import Image from "next/image";
import feature_1 from '@/assets/img/features/feature_1.png';
import feature_2 from '@/assets/img/features/feature_2.png';
import feature_3 from '@/assets/img/features/feature_3.png';
import feature_4 from '@/assets/img/features/feature_4.png';
import feature_5 from '@/assets/img/features/feature_5.png';
import feature_6 from '@/assets/img/features/feature_6.png';
import classNames from "classnames";
import Link from "next/link";

export const features = [
    {
        "subtitle": "Consolidate tasks and billing for efficiency",
        "title": "Streamline Workflows",
        "text": "Consolidate tasks, projects, and billing into a single platform and boost team productivity. No need for multiple tools.",
        "image": feature_1
    },
    {
        "subtitle": "Secure client portal for seamless communication",
        "title": "Centralize client communication",
        "text": "Empower clients with a secure, personalized portal to upload documents, sign agreements, and track progress.",
        "image": feature_2
    },
    {
        "subtitle": "Streamlined invoicing and payment for efficiency",
        "title": "Reduce delays and improve cash flow",
        "text": "Stop chasing clients to get paid. Generate invoices instantly, automate payment cycles, and accept payments directly within the platform.",
        "image": feature_3
    },
    {
        "subtitle": "Gain insights with customizable real-time reports",
        "title": "Run powerful reports",
        "text": "Access customizable, real-time reports to monitor financials, track team performance, and measure client progress, helping you make smarter decisions.",
        "image": feature_4
    },
    {
        "subtitle": "Easily connect Mango with your tools",
        "title": "Integrate seamlessly with existing tools",
        "text": "Connect Mango to the tools you already use, like QuickBooks and Outlook. Reduce time spent switching between systems.",
        "image": feature_5
    },
    {
        "subtitle": "Grow effortlessly with scalable operations",
        "title": "Scale as your firm grows",
        "text": "Easily uplevel your operations to match greater client loads, projects, and data.",
        "image": feature_6
    }
];


export const Features = () => {
    return <section className="px-5 pt-25 pb-[78px]">
        <div className="max-w-[452px] m-auto md:max-w-full lg:max-w-[1120px]">
            <h2 className="text-primary font-semibold text-xl mb-6 text-center md:mb-7">Features</h2>
            <h3 className="text-black text-[35px] font-bold capitalize leading-10 mb-5 text-center md:mb-7 lg:text-5xl ">Simplify
                your practice management</h3>
            <p className="inline-block text-black text-xl font-normal font-['Roboto'] leading-7 px-5 mb-12 text-center md:block md:max-w-[616px] md:m-auto md:mb-19">
                Streamline tasks, centralize documents, and make collaboration easy.
            </p>
            <div>
                {features.map((feature, key) => (
                    <div key={feature.title}
                         className={classNames('flex flex-col gap-4 mb-13 last:mb-10 md:flex-row md:justify-between md:mb-28 md:last:mb-5', {'md:flex-row-reverse': key % 2 !== 0})}>
                        <div className="md:max-w-[476px] md:w-[50%] lg:max-w-[505px]">
                            <div className="max-w-[426px] mb-5 md:max-w-full lg:mb-7">
                                <h3 className="text-primary font-semibold text-xl mb-6 capitalize">{feature.subtitle}</h3>
                                <h3 className="text-black text-[35px] font-bold capitalize leading-10 lg:text-[46px]">{feature.title}</h3>
                            </div>
                            <div className="max-w-[349px] mb-5 md:max-w-full ">
                                <p className="text-black text-xl font-normal font-['Roboto'] leading-7">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                        <div className="px-3.5 md:grow lg:max-w-[495px]">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                className="w-full max-w-[339px] md:max-w-[467px] lg:max-w-[495px] transition duration-400 hover:scale-110 "
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center pt-4">
                <Link className="btn text-xl px-10 py-[25px]" href="">Schedule a Demo</Link>
            </div>

        </div>
    </section>
};