import {FC} from "react";
import classNames from "classnames";

type Props = {
    className?: string;
}

export const Navigation:FC<Props> = ({className}) => {

    return <ul className={classNames(className)}>
        <li>
            <a className="block py-3 font-['Roboto'] text-2xl text-white text-center transition duration-300 hover:text-primary leading-normal md:text-[15px]"
               href="">Benefits</a>
        </li>
        <li>
            <a className="block py-3 font-['Roboto'] text-2xl text-white text-center transition duration-300 hover:text-primary leading-normal md:text-[15px]"
               href="">Testimonials</a>
        </li>
        <li>
            <a className="block py-3 font-['Roboto'] text-2xl text-white text-center transition duration-300 hover:text-primary leading-normal md:text-[15px]"
               href="">Features</a>
        </li>
        <li>
            <a className="block py-3 font-['Roboto'] text-2xl text-white text-center transition duration-300 hover:text-primary leading-normal md:text-[15px]" href="">Pricing</a>
        </li>
        <li>
            <a className="block py-3 font-['Roboto'] text-2xl text-white text-center transition duration-300 hover:text-primary leading-normal md:text-[15px]"
               href="">Integration</a>
        </li>
    </ul>
}