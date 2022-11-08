import React from 'react';
import {BsMap, BsSuitHeart} from "react-icons/bs";
import {FiUsers} from "react-icons/fi";

function HeaderSchool(props) {
    return (
        <header className="h-header-school flex flex-col bg-school-details">
            <div className="relative bg-primary-200 h-full">
                <div className="absolute left-0 bottom-0 w-full bg-red-500 h-20">
                    <div className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center justify-end h-full">
                        <div className="ml-2 h-10 w-10 bg-primary-900 flex items-center justify-center rounded-full text-white bg-opacity-60">
                            <BsMap/>
                        </div>
                        <div className="ml-2 h-10 w-10 bg-primary-900 flex items-center justify-center rounded-full text-white bg-opacity-60">
                            <BsMap/>
                        </div>
                        <div className="ml-2 h-10 w-10 bg-primary-900 flex items-center justify-center rounded-full text-white bg-opacity-60">
                            <BsMap/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full mx-auto max-w-7xl sm:px-6 lg:px-8 h-52 flex flex-col justify-center">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="text-primary_dark-500 text-2xl font-semibold">Colegio Los Alamos</h1>
                        <div className="flex items-center">
                            <p className="text-base text-gray-500 mr-4">Calle Estados Unidos 721, Jesus María</p>
                            <div className="flex items-center">
                                <p className="mr-2 bg-primary_dark-500 text-white text-xs font-normal px-4 py-1 rounded">5 vacantes</p>
                                <p className="mr-2 bg-primary_dark-500 text-white text-xs font-normal px-4 py-1 rounded">2do grado</p>
                                <p className="mr-2 bg-primary_dark-500 text-white text-xs font-normal px-4 py-1 rounded">2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full ml-2">
                                <BsSuitHeart/>
                            </div>
                            <p className="text-gray-500 font-normal text-sm ml-2">Compartir</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-white p-2 rounded-full ml-2">
                                <BsSuitHeart/>
                            </div>
                            <p className="text-gray-500 text-sm ml-2">Compartir</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center text-sm text-gray-500 mr-4">
                            <FiUsers size="1.2rem"/>
                            <p className="text-sm mt-1">332 alumnos</p>
                        </div>
                        <div className="flex flex-col items-center text-sm text-gray-500 mr-4">
                            <FiUsers size="1.2rem"/>
                            <p className="text-sm mt-1">332 alumnos</p>
                        </div>
                        <div className="flex flex-col items-center text-sm text-gray-500 mr-4">
                            <FiUsers size="1.2rem"/>
                            <p className="text-sm mt-1">332 alumnos</p>
                        </div>
                        <div className="flex flex-col items-center text-sm text-gray-500 mr-4">
                            <FiUsers size="1.2rem"/>
                            <p className="text-sm mt-1">332 alumnos</p>
                        </div>
                        <div className="flex flex-col items-center text-sm text-gray-500 mr-4">
                            <FiUsers size="1.2rem"/>
                            <p className="text-sm mt-1">332 alumnos</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="font-bold text-primary_dark-500 text-2xl">S/ 620/mes</p>
                        <p className="text-sm text-gray-500">Cuota de ingreso: S/ 3,000</p>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default HeaderSchool;
