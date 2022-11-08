import React from 'react';
import Link from "next/link";
import {FiSend, FiMail, FiPhone, FiMapPin} from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer(props) {
    return (
        <footer className=" flex flex-col absolute  w-full bg-primary-400">
            <div className="py-10 md:py-16 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col w-full md:w-1/1 lg:w-1/4 pr-12 px-10 md:px-4 mb-6 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-3">Contáctanos</h3>
                    <p className="flex items-center mb-3">
                        <FiMapPin color="#fff" size="1.2rem"/>
                        <span className="ml-4 text-white text-sm font-light">Av. Principal 123, Lima</span>
                    </p>
                    <p className="flex items-center mb-3">
                        <FiPhone color="#fff" size="1.2rem"/>
                        <span className="ml-4 text-white text-sm font-light">+51 999 999 999</span>
                    </p>
                    <p className="flex items-center mb-3">
                        <FiMail color="#fff" size="1.2rem"/>
                        <span className="ml-4 text-white text-sm font-light">allitv2022@gmail.com</span>
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="https://www.facebook.com/Micole.peru" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaFacebookF color="#fff" size="1.2rem"/>
                        </a>
                        <a href="#" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaTwitter color="#fff" size="1.2rem"/>
                        </a>
                        <a href="#" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaInstagram color="#fff" size="1.2rem"/>
                        </a>
                        <a href="#" className="mr-6 hover:bg-white hover:bg-opacity-25 p-2 rounded transition">
                            <FaLinkedinIn color="#fff" size="1.2rem"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/1 lg:w-1/4 px-10 md:px-4 mb-6 md:mb-0">
                    <h3 className="text-white text-lg font-medium mb-3">Menú</h3>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Inicio
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Nosotros
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Blog
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Contáctanos
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-sm font-light my-2">
                            Terminos y Condiciones
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col w-full md:w-1/1 lg:w-2/4 px-10 md:px-4 mb-6 md:mb-0 grid grid-cols-2 gap-4  justify-items-center">
                    <img
                        className="object-contain h-32 object-center text-center"
                        src="https://res.cloudinary.com/mikunaalli/image/upload/v1648389002/alli/lllllllllllllllllll-removebg-preview_1_gw5ede.png"
                        alt="Concor TV"/>
                    <img
                        className="object-contain h-32 object-center text-center"
                        src="https://res.cloudinary.com/mikunaalli/image/upload/v1648389002/alli/convoca_logo_principal_2021_1_k3tjef.png"
                        alt="Convoca"/>
                    <img
                        className="object-contain h-32 object-center text-center"
                        src="https://res.cloudinary.com/mikunaalli/image/upload/v1648389002/alli/logo-observatorio_1_czjn8r.png"
                        alt="Obvervatorio de medios"/>
                    <img
                        className="object-contain h-32 object-center text-center"
                        src="https://res.cloudinary.com/mikunaalli/image/upload/v1648389002/alli/calandria-logotipo2x_1_l2lhrz.png"
                        alt="Xalandria"/>
                </div>
            </div>
            <div className="border-t-1 border-footer ">
                <div className="py-8 w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start md:justify-between">
                    <p className="text-white text-xs md:text-sm font-light text-center px-2 md:px-0">© { new Date().getFullYear()} Desarrollado por Alli - Todos los derechos reservados.</p>
                    <div className="text-center">
                        <Link href="/nosotros">
                            <a className="text-white text-xs md:text-sm font-light my-2 md:mx-2">Nosotros</a>
                        </Link>
                        <Link href="/blogs">
                            <a className="text-white text-xs md:text-sm font-light my-2 md: mx-2">blog</a>
                        </Link>
                        <Link href="/terminos-condiciones">
                            <a className="text-white text-xs md:text-sm font-light my-2 md:mx-2">Términos y condiciones</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
