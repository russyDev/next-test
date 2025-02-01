'use client'

import classNames from "classnames";
import Image from "next/image";
import logo from "@/assets/img/logo.png";
import {Navigation} from "@/components/Navigation";
import Link from "next/link";
import {Hamburger} from "@/components/Hamburger";
import {useEffect, useState} from "react";

export const HeaderMenu = () => {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const element = document.querySelector('html') as HTMLElement;
        if (openMenu) {
            element.classList.add('overflow-hidden')
        } else {
            element.classList.remove('overflow-hidden')
        }
    }, [openMenu]);

    return <div className={classNames(
        "w-full sticky top-0 bg-primary-dark p-3 z-30",
        {
            "bg-primary-dark fixed top-0 left-0 w-full p-3 h-screen z-30": openMenu
        }
    )}>
        <div className="max-w-[574px] mx-auto flex items-center justify-between w-full md:max-w-(--max-width)">
            <div className="flex gap-0">
                <a href=""><Image src={logo} alt="logo"/></a>
                <Navigation className="hidden lg:inline-flex gap-6"/>
            </div>

            <div className="flex gap-3 items-center">
                <Link className="btn" href="">Schedule a Demo</Link>
                <Hamburger onClick={() => {
                    setOpenMenu(!openMenu);
                }}
                />
            </div>
        </div>

        {openMenu && <Navigation className="mt-20"/>}

    </div>
}