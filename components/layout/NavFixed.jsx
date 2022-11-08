import React from 'react';
import image from '../../assets/logo.svg'
import Image from 'next/image'
import BtnSecondary from "./BtnSecondary";
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";
import LinkNavFixed from "./LinkNavFixed";
import BtnPrimary from "./BtnPrimary";

import * as Scroll from "react-scroll";
import LinkNav from "./LinkNav";

const Nav = () => {
    let Li      = Scroll.Link;
    return (
        <>
            <nav className="flex flex-col fixed  w-full bg-white shadow-md z-10">
            <div className="py-4 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
                <div className=" md:flex md:justify-start hidden md:flex-1">
                    <LinkNavFixed
                        href="/"
                        text="Home"
                    />
                    <LinkNavFixed
                        href="/nosotros"
                        text="Nosotros"
                    />
                    <LinkNavFixed
                        href="/blogs"
                        text="Blog"
                    />

                    <LinkNavFixed
                        href="/comunidad"
                        text="Comunidad"
                    />
                </div>
                <div className="flex items-center mr-2 md:mr-0">
                    <div className="mx-2 hidden md:block">
                        <FaRegUser color="#3813E1" size="1.2rem"/>
                    </div>
                    <Li
                        className="ml-4 cursor-pointer inline-flex items-center justify-center px-3 md:px-6 py-1 md:py-2  bg-primary-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition"
                        activeClass="active"
                        to="enrolled"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        onSetActive={()=>{}}
                    >
                        ¡Denuncia Ya!
                    </Li>
                </div>
            </div>
        </nav>
            <nav className="flex flex-col  w-full bg-white shadow-md z-40">
                <div className="py-4 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link href="/">
                        <a className="m-0 p-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/img/logo.svg" className="ml-2 object-contain h-6 md:h-8" alt=""/>
                        </a>
                    </Link>
                    <div className="flex-1 flex justify-end">
                        <LinkNavFixed
                            href="/"
                            text="Home"
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
