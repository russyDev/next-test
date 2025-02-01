import {FC} from "react";
import Link from "next/link";
import classNames from "classnames";
import {PriceType} from "@/components/PricingSection/type";

type Props = {
    price: PriceType
}

/*
'': price.name === 'basic',
'': price.name === 'plus',
'': price.name === 'pro',
*/

export const Pricing: FC<Props> = ({price}) => {

    const description = {
        basic: <p className="text-xl font-bold mb-2 ">Standard features</p>,
        plus: <p className="text-xl font-bold mb-2">+ Includes all Basic features</p>,
        pro: <p className="text-xl font-bold mb-2 text-white">+ Include all <span
            className="text-btn-green">Plus</span> features</p>
    }

    return <div className="h-full max-w-[370px] pt-10 mx-auto">
        <div className={classNames('h-full flex flex-col text-primary-dark px-7.5 py-6 rounded-xl shadow-lg relative', {
            'bg-white border border-white': price.name === 'basic' || price.name === 'plus',
            'bg-transparent border border-primary': price.name === 'pro',
        })}>
            <div className="grow">
                <div className="w-full h-[42px] flex items-center justify-center absolute top-[-20px] left-0">
                    <div className={classNames('w-[278px] h-[42px] rounded m-auto flex items-center justify-center', {
                        'border-[.4px] border-primary-dark bg-white': price.name === 'basic',
                        'bg-btn-green text-white': price.name === 'plus',
                        'bg-primary text-white': price.name === 'pro',
                    })}>
                        <div className="text-center text-[15px] font-normal">{price.subTitle}</div>
                    </div>
                </div>

                <div className="flex justify-between pt-3 pb-4">
                    <h4 className={classNames('text-center capitalize text-[40px] font-bold', {
                        'text-btn-green': price.name === 'plus',
                        'text-primary': price.name === 'pro',
                    })}>{price.name}</h4>
                    <div className={classNames('pt-1', {
                        'text-white': price.name === 'pro',
                    })}>
                        <span className="inline-block text-5xl font-bold leading-[60px]">${price.price}</span>
                        <span className="text-base font-normal font-['Poppins']">/ month</span>
                    </div>
                </div>

                <p className={classNames('text-xl font-bold', {
                    'text-btn-green': price.name === 'plus',
                    'text-white': price.name === 'pro',
                })}>{price.title}</p>
                <hr className="my-2 mb-3 border-gray-400"/>
                {description[price.name]}

                <ul className="space-y-2 text-sm mb-5">
                    {price.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 mb-[.4px]">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className={classNames('mt-2', {
                                'stroke-800': price.name === 'basic',
                                'stroke-btn-green': price.name === 'plus',
                                'stroke-primary': price.name === 'pro',
                            })}>
                                <path d="M14 2L5.75 10L2 6.36364" strokeWidth="2" strokeLinecap="square"
                                      strokeLinejoin="round"/>
                            </svg>
                            <span className={classNames('text-[17px] font-semibold font-[Roboto] leading-[25px]', {
                                'text-[#0f1b24]': price.name === 'basic' || price.name === 'plus',
                                'text-white': price.name === 'pro',
                            })}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Link className={classNames({
                'btn-secondary': price.name === 'basic',
                'btn-large': price.name === 'plus',
                'btn-pro': price.name === 'pro',
            })} href="">Schedule a Demo</Link>
        </div>
    </div>
}