import React from 'react';
import Layout from "../../components/layout/Layout";
import NavFixed from "../../components/layout/NavFixed";
import Link from "next/link";
import LinkNavFixed from "../../components/layout/LinkNavFixed";
import {FaRegUser} from "react-icons/fa";
import BtnPrimary from "../../components/layout/BtnPrimary";
import {RiArrowDownSLine} from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsSuitHeart, BsArrowsAngleExpand } from "react-icons/bs";
import Seo from "../../components/layout/Seo";

function Index() {
    return (
        <Layout>
            <Seo
                title="Colegios"
            />
            <NavFixed/>

            <div className="bg-white py-8 px-8">
                <div className="w-full mx-auto max-w-full section-max">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className="bg-white rounded flex justify-between">
                                <div className="flex flex-col mr-3">
                                    <p className="font-bold text-base uppercase">Distrito</p>
                                    <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 py-1 cursor-pointer">
                                        <p className="text-sm">Selecciona un distrito</p>
                                        <RiArrowDownSLine/>
                                    </div>
                                </div>
                                <div className="flex flex-col mr-3">
                                    <p className="font-bold text-base uppercase">Grado</p>
                                    <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 py-1 cursor-pointer">
                                        <p className="text-sm">Selecciona un grado</p>
                                        <RiArrowDownSLine/>
                                    </div>
                                </div>
                                <div className="flex flex-col mr-3">
                                    <p className="font-bold text-base uppercase">Año de ingreso</p>
                                    <div className="flex items-center justify-between border-b-1 text-gray-400 font-light w-56 py-1 cursor-pointer">
                                        <p className="text-sm">Selecciona año de ingreso</p>
                                        <RiArrowDownSLine/>
                                    </div>
                                </div>
                                <div className=" flex items-center">
                                    <BtnPrimary
                                        title="Buscar"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-5">
                                <div>
                                    <p className="text-lg font-bold text-primary-900">Colegios de Jesús María</p>
                                    <p className="text-sm font-medium text-primary-900">135<span className="font-light text-gray-500"> resultados</span></p>
                                </div>
                                <div>
                                    <div className="flex items-center mr-3">
                                        <p className="font-medium text-sm mr-4">Ordenado por: </p>
                                        <div className="flex items-center justify-between border-b-1 text-gray-400 font-light py-1 cursor-pointer">
                                            <p className="text-sm">Menor precio</p>
                                            <RiArrowDownSLine/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                <article className="rounded overflow-hidden shadow">
                                    <div className="relative">
                                        <img className="h-52 w-full object-cover" src="https://d500.epimg.net/cincodias/imagenes/2020/09/11/companias/1599854091_077647_1599854270_noticia_normal.jpg" alt=""/>
                                        <div className="absolute w-full left-0 top-0 flex items-center justify-between p-3">
                                            <p className="bg-primary-500 px-4 py-2 text-xs text-white rounded-sm font-medium">Destacado</p>
                                            <p className="bg-primary-800 px-4 py-2 text-xs text-white rounded-sm font-medium">5 vacantes</p>
                                        </div>
                                        <img className="absolute -bottom-5 right-5 h-10 w-10 object-cover rounded-full border-2 border-white" src="https://kidstudia.pe/wp-content/uploads/2020/10/Logo-Trilce.jpg" alt=""/>
                                    </div>
                                    <div className=" border-b-1 border-gray-200 p-3">
                                        <h3 className="font-bold text-primary_dark-500">Colegio Isaac Newton</h3>
                                        <p className="text-sm text-gray-500 mt-1">Av. Brasil 2309</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">332 alumnos</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">Mixto</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">3 salones</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-b px-3 py-2">
                                        <div>
                                            <p className="font-bold text-primary_dark-500">S/ 620/mes</p>
                                            <p className="text-xs text-gray-500">Cuota de ingreso: S/ 3,000</p>
                                        </div>
                                        <div className="flex items-center justify-between text-gray-500">
                                            <BsArrowsAngleExpand/>
                                            <div className="bg-gray-100 p-2 rounded-full ml-2">
                                                <BsSuitHeart/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="rounded overflow-hidden shadow">
                                    <div className="relative">
                                        <img className="h-52 w-full object-cover" src="https://d500.epimg.net/cincodias/imagenes/2020/09/11/companias/1599854091_077647_1599854270_noticia_normal.jpg" alt=""/>
                                        <div className="absolute w-full left-0 top-0 flex items-center justify-between p-3">
                                            <p className="bg-primary-500 px-4 py-2 text-xs text-white rounded-sm font-medium">Destacado</p>
                                            <p className="bg-primary-800 px-4 py-2 text-xs text-white rounded-sm font-medium">5 vacantes</p>
                                        </div>
                                        <img className="absolute -bottom-5 right-5 h-10 w-10 object-cover rounded-full border-2 border-white" src="https://kidstudia.pe/wp-content/uploads/2020/10/Logo-Trilce.jpg" alt=""/>
                                    </div>
                                    <div className=" border-b-1 border-gray-200 p-3">
                                        <h3 className="font-bold text-primary_dark-500">Colegio Isaac Newton</h3>
                                        <p className="text-sm text-gray-500 mt-1">Av. Brasil 2309</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">332 alumnos</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">Mixto</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">3 salones</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-b px-3 py-2">
                                        <div>
                                            <p className="font-bold text-primary_dark-500">S/ 620/mes</p>
                                            <p className="text-xs text-gray-500">Cuota de ingreso: S/ 3,000</p>
                                        </div>
                                        <div className="flex items-center justify-between text-gray-500">
                                            <BsArrowsAngleExpand/>
                                            <div className="bg-gray-100 p-2 rounded-full ml-2">
                                                <BsSuitHeart/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="rounded overflow-hidden shadow">
                                    <div className="relative">
                                        <img className="h-52 w-full object-cover" src="https://d500.epimg.net/cincodias/imagenes/2020/09/11/companias/1599854091_077647_1599854270_noticia_normal.jpg" alt=""/>
                                        <div className="absolute w-full left-0 top-0 flex items-center justify-between p-3">
                                            <p className="bg-primary-500 px-4 py-2 text-xs text-white rounded-sm font-medium">Destacado</p>
                                            <p className="bg-primary-800 px-4 py-2 text-xs text-white rounded-sm font-medium">5 vacantes</p>
                                        </div>
                                        <img className="absolute -bottom-5 right-5 h-10 w-10 object-cover rounded-full border-2 border-white" src="https://kidstudia.pe/wp-content/uploads/2020/10/Logo-Trilce.jpg" alt=""/>
                                    </div>
                                    <div className=" border-b-1 border-gray-200 p-3">
                                        <h3 className="font-bold text-primary_dark-500">Colegio Isaac Newton</h3>
                                        <p className="text-sm text-gray-500 mt-1">Av. Brasil 2309</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">332 alumnos</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">Mixto</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">3 salones</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-b px-3 py-2">
                                        <div>
                                            <p className="font-bold text-primary_dark-500">S/ 620/mes</p>
                                            <p className="text-xs text-gray-500">Cuota de ingreso: S/ 3,000</p>
                                        </div>
                                        <div className="flex items-center justify-between text-gray-500">
                                            <BsArrowsAngleExpand/>
                                            <div className="bg-gray-100 p-2 rounded-full ml-2">
                                                <BsSuitHeart/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="rounded overflow-hidden shadow">
                                    <div className="relative">
                                        <img className="h-52 w-full object-cover" src="https://d500.epimg.net/cincodias/imagenes/2020/09/11/companias/1599854091_077647_1599854270_noticia_normal.jpg" alt=""/>
                                        <div className="absolute w-full left-0 top-0 flex items-center justify-between p-3">
                                            <p className="bg-primary-500 px-4 py-2 text-xs text-white rounded-sm font-medium">Destacado</p>
                                            <p className="bg-primary-800 px-4 py-2 text-xs text-white rounded-sm font-medium">5 vacantes</p>
                                        </div>
                                        <img className="absolute -bottom-5 right-5 h-10 w-10 object-cover rounded-full border-2 border-white" src="https://kidstudia.pe/wp-content/uploads/2020/10/Logo-Trilce.jpg" alt=""/>
                                    </div>
                                    <div className=" border-b-1 border-gray-200 p-3">
                                        <h3 className="font-bold text-primary_dark-500">Colegio Isaac Newton</h3>
                                        <p className="text-sm text-gray-500 mt-1">Av. Brasil 2309</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">332 alumnos</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">Mixto</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">3 salones</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-b px-3 py-2">
                                        <div>
                                            <p className="font-bold text-primary_dark-500">S/ 620/mes</p>
                                            <p className="text-xs text-gray-500">Cuota de ingreso: S/ 3,000</p>
                                        </div>
                                        <div className="flex items-center justify-between text-gray-500">
                                            <BsArrowsAngleExpand/>
                                            <div className="bg-gray-100 p-2 rounded-full ml-2">
                                                <BsSuitHeart/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="rounded overflow-hidden shadow">
                                    <div className="relative">
                                        <img className="h-52 w-full object-cover" src="https://d500.epimg.net/cincodias/imagenes/2020/09/11/companias/1599854091_077647_1599854270_noticia_normal.jpg" alt=""/>
                                        <div className="absolute w-full left-0 top-0 flex items-center justify-between p-3">
                                            <p className="bg-primary-500 px-4 py-2 text-xs text-white rounded-sm font-medium">Destacado</p>
                                            <p className="bg-primary-800 px-4 py-2 text-xs text-white rounded-sm font-medium">5 vacantes</p>
                                        </div>
                                        <img className="absolute -bottom-5 right-5 h-10 w-10 object-cover rounded-full border-2 border-white" src="https://kidstudia.pe/wp-content/uploads/2020/10/Logo-Trilce.jpg" alt=""/>
                                    </div>
                                    <div className=" border-b-1 border-gray-200 p-3">
                                        <h3 className="font-bold text-primary_dark-500">Colegio Isaac Newton</h3>
                                        <p className="text-sm text-gray-500 mt-1">Av. Brasil 2309</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">332 alumnos</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">Mixto</p>
                                            </div>
                                            <div className="flex flex-col items-center text-sm text-gray-500">
                                                <FiUsers size="1.2rem"/>
                                                <p className="text-sm mt-1">3 salones</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between rounded-b px-3 py-2">
                                        <div>
                                            <p className="font-bold text-primary_dark-500">S/ 620/mes</p>
                                            <p className="text-xs text-gray-500">Cuota de ingreso: S/ 3,000</p>
                                        </div>
                                        <div className="flex items-center justify-between text-gray-500">
                                            <BsArrowsAngleExpand/>
                                            <div className="bg-gray-100 p-2 rounded-full ml-2">
                                                <BsSuitHeart/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="py-6 text-center">
                                <div className="flex items-center justify-center">
                                    <p className="mx-1 bg-primary-500 font-medium h-8 w-8 flex items-center justify-center rounded-full text-white">1</p>
                                    <p className="mx-1 bg-gray-200 font-medium h-8 w-8 flex items-center justify-center rounded-full text-gray-500">2</p>
                                    <p className="mx-1 bg-gray-200 font-medium h-8 w-8 flex items-center justify-center rounded-full text-gray-500">3</p>
                                    <p className="mx-1 bg-gray-200 font-medium h-8 w-8 flex items-center justify-center rounded-full text-gray-500">4</p>

                                </div>
                                <p className="mt-4 text-primary_dark-500 text-sm">Mostrando 6 de 134 Colegios</p>

                            </div>
                        </div>
                        <div className="col-span-1 bg-gray-200 ">
                            <h2>MAPA</h2>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Index;
