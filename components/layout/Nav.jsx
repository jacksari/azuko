import React from 'react';
import LinkNav from "./LinkNav";
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";

import * as Scroll from "react-scroll";

const Nav = () => {
    let Li      = Scroll.Link;
    return (
        <nav className="flex flex-col absolute  w-full bg-primary-500 shadow-md z-50">
            <div className="py-4 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-between">
                <div className=" md:flex md:justify-start hidden md:flex-1">
                    <LinkNav
                        href="/"
                        text="Home"
                    />
                    <LinkNav
                        href="/nosotros"
                        text="Nosotros"
                    />
                    <LinkNav
                        href="/blogs"
                        text="Blog"
                    />

                    <LinkNav
                        href="/comunidad"
                        text="Comunidad"
                    />
                </div>
                <div className="flex items-center mr-2 md:mr-0">
                    <div className="mx-2 hidden md:block">
                        <FaRegUser color="#fff" size="1.2rem"/>
                    </div>
                    <Li
                        className="cursor-pointer ml-4 inline-flex items-center px-3 md:px-6 py-1 md:py-2 bg-white border border-white rounded font-semibold text-xs text-primary-500 shadow uppercase tracking-widest hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:border-primary-100 focus:ring focus:ring-primary-200 disabled:opacity-25 transition"
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
    )
}

export default Nav;
