'use client'
import {useState} from "react";
import classNames from "classnames";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <div
            className={classNames('hamburger p-1 lg:hidden', {open: isOpen})}
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

        {isOpen && <div className="bg-primary-dark fixed top-15 left-0 w-full h-screen pt-10">
            <ul>
                <li>
                    <a className="block py-3 text-white text-center transition duration-300 hover:text-primary"
                       href="">Benefits</a>
                </li>
                <li>
                    <a className="block py-3 text-white text-center transition duration-300 hover:text-primary"
                       href="">Features</a>
                </li>
                <li>
                    <a className="block py-3 text-white text-center transition duration-300 hover:text-primary"
                       href="">Pricing</a>
                </li>
                <li>
                    <a className="block py-3 text-white text-center transition duration-300 hover:text-primary" href="">Schedule
                        a Demo</a>
                </li>
                <li>
                    <a className="block py-3 text-white text-center transition duration-300 hover:text-primary"
                       href="">Integration</a>
                </li>
            </ul>
        </div>}

    </>
}
