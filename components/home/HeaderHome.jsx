import React from 'react';
import BtnPrimary from '../layout/BtnPrimary';
import { RiArrowDownSLine } from "react-icons/ri";


const HeaderHome = () => {
    return (
        <header className="flex flex-col bg-gray-100 h-screen">

            <div className="relative bg-white flex-1 bg-hero-header bg-no-repeat bg-no-repeat bg-center bg-cover">
                <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                    <h2 className="py-2 text-white text-2xl font-normal">¡Qué Emoción!</h2>
                    <h1 className="text-5xl font-bold text-white text-center">Denuncia la violencia de género en la  televisión para una mejor calidad de programas</h1>

                    <div className=" p-3 mt-10 rounded flex shadow-2xl">

                        <BtnPrimary
                            title="¡Denuncia Ya!"
                        />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default HeaderHome;
