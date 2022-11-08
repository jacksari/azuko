import React from 'react';
import Masonry from 'react-masonry-css'
import {FiUsers} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import BtnPrimary from "../layout/BtnPrimary";

function GridSchoolDetails(props) {
    const breakpointColumnsObj = {
        default: 2,
        800: 1
    };
    return (
        <div className=" bg-school-details py-6">
            <div className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Descripción</h2>
                        <p className="text-sm text-gray-500">Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.</p>
                    </div>
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Solicita una visita</h2>
                        <div className="flex">
                            <div className="flex flex-col rounded-xl border border-primary_dark-500 px-4 py-1 mx-2 cursor-pointer">
                                <p className="text-sm text-primary_dark-500 font-medium">SÁB</p>
                                <p className="text-2xl text-primary_dark-500 font-semibold">30</p>
                                <p className="text-sm text-primary_dark-500 font-medium">OCT</p>
                            </div>
                        </div>
                        <form className=" mt-6 grid grid-cols-2 gap-4">
                            <div className="col-span-2 w-full pb-1 flex items-center">
                                <label className="text-sm text-primary_dark-500 font-semibold mr-2">Elegir hora:</label>
                                <select className="focus:outline-none border border-gray-300 px-5 py-1 rounded" name="select">
                                    <option value="value1">Value 1</option>
                                    <option value="value2" selected>Value 2</option>
                                    <option value="value3">Value 3</option>
                                </select>
                            </div>
                            <div className="col-span-2 w-full  pb-1 flex flex-col">

                            </div>
                            <div className="w-full border-b-2 border-gray-200 pb-1 flex flex-col">
                                <label className="text-sm text-primary_dark-500 font-semibold">Nombre</label>
                                <input type="text" className="focus:outline-none" placeholder="Nombre"/>
                            </div>
                            <div className="w-full border-b-2 border-gray-200 pb-1 flex flex-col">
                                <label className="text-sm text-primary_dark-500 font-semibold">Celular</label>
                                <input type="text" className="focus:outline-none" placeholder="celular"/>
                            </div>
                            <div className="w-full col-span-2 border-b-2 border-gray-200 pb-1 flex flex-col">
                                <label className="text-sm text-primary_dark-500 font-semibold">Correo</label>
                                <input type="email" className="focus:outline-none" placeholder="correo@correo.com"/>
                            </div>
                            <div className="col-span-2 w-full pb-1 text-center mt-2">
                                <BtnPrimary
                                    title="Solicitar visita"
                                />
                            </div>
                            <div className="col-span-2 w-full pb-1 text-center">
                                <p className="text-sm text-gray-500">Al enviar estás aceptando los <a className="text-primary-500" href="#">Términos y Condiciones de Uso y la Política de Privacidad</a></p>

                            </div>

                        </form>
                    </div>
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Ubicación</h2>
                        <div className="grid grid-cols-7 gap-y-4">
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Dirección:
                                <span className="text-gray-500 font-normal ml-2 text-xs">
                                    329 Queensberry Street
                                </span>
                            </p>
                            <p className="col-span-2 text-sm text-primary_dark-500 font-medium">Distrito:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Jersey City
                                </span>
                            </p>
                            <p className="col-span-2 text-sm text-primary_dark-500 font-medium">Provincia:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Greenville
                                </span>
                            </p>
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Departamento:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                     New Jersey State
                                </span>
                            </p>
                            <p className="col-span-2 text-sm text-primary_dark-500 font-medium">Zip:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    365448
                                </span>
                            </p>
                            <p className="col-span-2 text-sm text-primary_dark-500 font-medium">País:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    United States
                                </span>
                            </p>
                        </div>
                        <div className="h-72 mt-6 w-full bg-primary-300">

                        </div>
                    </div>
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Galería</h2>
                        <div className="h-80 mt-6 w-full bg-primary-300">

                        </div>
                        <div className="grid grid-cols-5 gap-2 mt-4">
                            <div className="w-full h-24 bg-primary-300">

                            </div>
                            <div className="w-full h-24 bg-primary-300">

                            </div>
                            <div className="w-full h-24 bg-primary-300">

                            </div>
                            <div className="w-full h-24 bg-primary-300">

                            </div>
                            <div className="w-full h-24 bg-primary-300">

                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Detalles del Colegio</h2>
                        <div className="grid grid-cols-10 gap-y-4">
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">RUC:
                                <span className="text-gray-500 font-normal ml-2 text-xs">
                                    20000221930
                                </span>
                            </p>
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Profesores:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    8
                                </span>
                            </p>
                            <p className="col-span-4 text-sm text-primary_dark-500 font-medium">Tipo de educación::
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Escolarizada
                                </span>
                            </p>
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Área:
                                <span className="text-gray-500 font-normal ml-2 text-xs">
                                    1560 Sq Ft
                                </span>
                            </p>
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Salones:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    6
                                </span>
                            </p>
                            <p className="col-span-4 text-sm text-primary_dark-500 font-medium">Turnos:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Mañana
                                </span>
                            </p>
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Fundación:
                                <span className="text-gray-500 font-normal ml-2 text-xs">
                                    2021-01-09
                                </span>
                            </p>
                            <p className="col-span-3 text-sm text-primary_dark-500 font-medium">Director:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Juan Perez
                                </span>
                            </p>
                            <p className="col-span-4 text-sm text-primary_dark-500 font-medium">Localidad:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Urbana
                                </span>
                            </p>
                            <p className="col-span-6 text-sm text-primary_dark-500 font-medium">Niveles:
                                <span className="text-gray-500 ml-2 text-xs font-normal">
                                    Inicial, Primaria, Secundaria
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Property Video</h2>
                        <div className="h-80 mt-6 w-full bg-primary-300">

                        </div>
                    </div>
                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Propuesta Valor Educativa</h2>
                        <p className="col-span-3 text-sm text-gray-500 font-normal">Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.
                        </p>
                        <p className="col-span-3 text-sm text-gray-500 font-normal">Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.
                        </p>
                    </div>


                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">4.67 (14 comentarios)</h2>
                        <div className=" grid grid-cols-1 gap-y-4">
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-gray-500">Nivel de enseñanza</p>
                                <div className="flex items-center">
                                    <div className="relative w-40 h-1 bg-gray-200">
                                        <div className="absolute h-1 top-0 left-0 bg-primary-300 w-28"/>
                                    </div>
                                    <p className="ml-2 font-medium">4.7</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-gray-500">Infraestructura</p>
                                <div className="flex items-center">
                                    <div className="relative w-40 h-1 bg-gray-200">
                                        <div className="absolute h-1 top-0 left-0 bg-primary-300 w-28"/>
                                    </div>
                                    <p className="ml-2 font-medium">4.7</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-gray-500">Limpieza</p>
                                <div className="flex items-center">
                                    <div className="relative w-40 h-1 bg-gray-200">
                                        <div className="absolute h-1 top-0 left-0 bg-primary-300 w-28"/>
                                    </div>
                                    <p className="ml-2 font-medium">4.7</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-gray-500">Atención al cliente</p>
                                <div className="flex items-center">
                                    <div className="relative w-40 h-1 bg-gray-200">
                                        <div className="absolute h-1 top-0 left-0 bg-primary-300 w-28"/>
                                    </div>
                                    <p className="ml-2 font-medium">4.7</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-gray-500">Ubicación</p>
                                <div className="flex items-center">
                                    <div className="relative w-40 h-1 bg-gray-200">
                                        <div className="absolute h-1 top-0 left-0 bg-primary-300 w-28"/>
                                    </div>
                                    <p className="ml-2 font-medium">4.7</p>
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-sm text-gray-500">Precio</p>
                                <div className="flex items-center">
                                    <div className="relative w-40 h-1 bg-gray-200">
                                        <div className="absolute h-1 top-0 left-0 bg-primary-300 w-28"/>
                                    </div>
                                    <p className="ml-2 font-medium">4.7</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-6">
                            <div className="">
                                <img className="h-16 w-16 object-cover rounded-full" src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                <div className="flex items-center justify-between my-4">
                                    <div>
                                        <p className="text-primary_dark-500 text-base font-medium">Jane Cooper</p>
                                        <span className="text-sm text-gray-500">April 6, 2021 at 3:21 AM</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                        </div>
                                        <p className="text-xs text-gray-500">(5 reviews)</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. </p>
                            </div>
                            <div className="">
                                <img className="h-16 w-16 object-cover rounded-full" src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                <div className="flex items-center justify-between my-4">
                                    <div>
                                        <p className="text-primary_dark-500 text-base font-medium">Jane Cooper</p>
                                        <span className="text-sm text-gray-500">April 6, 2021 at 3:21 AM</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                            <AiFillStar color="#CAB877"/>
                                        </div>
                                        <p className="text-xs text-gray-500">(5 reviews)</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500">Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded p-4 shadow mb-6">
                            <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Infraestructura</h2>
                            <div className="grid grid-cols-3 gap-y-6">
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>

                            </div>
                        </div>

                        <div className="bg-white rounded p-4 shadow mb-6">
                            <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Acreditaciones/ Certificaciones/ Asociaciones</h2>
                            <div className="grid grid-cols-2 gap-y-6">
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>
                                <div className="flex  items-center text-sm text-gray-500 mr-4">
                                    <div className="bg-gray-100 rounded-full p-2 text-primary_dark-500">
                                        <FiUsers size="1.2rem"/>
                                    </div>
                                    <p className="text-sm ml-2">332 alumnos</p>
                                </div>

                            </div>
                        </div>

                        <div className="bg-white rounded p-4 shadow mb-6">
                            <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Lugares Cercanos</h2>
                            <div className="grid grid-cols-1 gap-y-8">
                                <div>
                                    <h5 className="text-primary_dark-500 font-semibold">Centros Comerciales</h5>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">Real Plaza Salaverry (3km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">La Rambla Brasil (4 km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-primary_dark-500 font-semibold">Centros Médicos</h5>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">Hospital del Niño (2.5 km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">Clínica de la Solidaridad (1 km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-primary_dark-500 font-semibold">Seguridad</h5>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">Comisaria de Jesus María (2 km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">Estación de bomberos Jesús María (1.8 km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <p className="text-sm text-gray-500">Serenazgo  de Jesús María (2.7 km)</p>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                                <AiFillStar color="#CAB877"/>
                                            </div>
                                            <p className="text-xs text-gray-500">(5 reviews)</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded p-4 shadow mb-6">
                        <h2 className="text-lg font-bold text-primary_dark-500 mb-4">Deja tu comentario</h2>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 ">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-sm mr-2">Nivel de enseñanza</p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-sm mr-2">Atención al cliente</p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-sm mr-2">Infraestructura</p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-sm mr-2">Ubicación</p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-sm mr-2">Limpieza</p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-gray-500 text-sm mr-2">Precio</p>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                        <AiFillStar color="#CAB877"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <form className=" mt-6 grid grid-cols-2 gap-4">
                            <div className="w-full border-b-2 border-gray-200 pb-1 flex flex-col">
                                <label className="text-sm text-primary_dark-500 font-semibold">Nombre</label>
                                <input type="text" className="focus:outline-none" placeholder="Nombre"/>
                            </div>
                            <div className="w-full border-b-2 border-gray-200 pb-1 flex flex-col">
                                <label className="text-sm text-primary_dark-500 font-semibold">Correo</label>
                                <input type="email" className="focus:outline-none" placeholder="correo@correo.com"/>
                            </div>
                            <div className="col-span-2 w-full border-b-2 border-gray-200 pb-1 flex flex-col">
                                <label className="text-sm text-primary_dark-500 font-semibold">Mensaje</label>
                                <textarea className="w-full h-24 focus:outline-none" placeholder="Mensaje"/>
                            </div>
                            <div className="col-span-2 w-full pb-1">
                                <BtnPrimary
                                    title="ENVIAR COMENTARIO"
                                />
                            </div>

                        </form>
                    </div>




                </Masonry>
            </div>
        </div>
    );
}

export default GridSchoolDetails;
