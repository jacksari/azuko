import React, { useState } from 'react'
import Link from "next/link";

import {useFormik} from "formik";
import * as Yup from "yup";
import {uid} from 'uid';

export default function FormSchool() {
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            ruc: '',
            phone: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().required('El email es obligatorio'),
            ruc: Yup.string().required('El RUC es obligatorio'),
            phone: Yup.string().required('El celular es obligatorio'),
        }),
        onSubmit: (valores) => {
            console.log('enviando form', valores)
            //login(valores)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: "post",
                headers: myHeaders,
                redirect: "follow",
                body: JSON.stringify([[ uid(8), valores.name, valores.email, valores.ruc, valores.phone ]])
            };

            fetch("https://v1.nocodeapi.com/micole_v2/google_sheets/dyHxySqGFSDxChQj?tabId=data", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            setSuccess(true);
        }
        
    })
    return (
        <div className="bg-hero-landing2 bg-center bg-cover bg-no-repeat flex items-center justify-center px-4 py-40 w-full bg-opacity-20">
                <div className="bg-white shadow px-6 py-6 rounded">
                    <Link href="/">
                        <a className="m-0 p-0 text-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/img/login2.svg" className="text-center m-auto object-contain h-8" alt=""/>
                        </a>
                    </Link>
                    {
                        !success ? (
                            <form className="flex flex-col"
                                onSubmit={formik.handleSubmit}
                            >
                                <input 
                                    type="text" 
                                    className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-full lg:w-72 mt-4 text-base  focus:ring focus:border-primary-300" 
                                    placeholder="Nombre del colegio"
                                    id="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.name && formik.errors.name ? (
                                        <p className="text-red-500 ml-2 mt-2 font-bold text-xs">{formik.errors.name}</p>
                                    ) : null
                                }
                                <input 
                                    type="email" 
                                    className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-full lg:w-72 mt-4 text-base  focus:ring focus:border-primary-300" 
                                    placeholder="Ingrese su email"
                                    id="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <p className="text-red-500 ml-2 mt-2 font-bold text-xs">{formik.errors.email}</p>
                                    ) : null
                                }
                                <input 
                                    type="text" 
                                    className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-full lg:w-72 mt-4 text-base  focus:ring focus:border-primary-300" 
                                    placeholder="Ingrese su ruc"
                                    id="ruc"
                                    value={formik.values.ruc}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.ruc && formik.errors.ruc ? (
                                        <p className="text-red-500 ml-2 mt-2 font-bold text-xs">{formik.errors.ruc}</p>
                                    ) : null
                                }
                                <input 
                                    type="text" 
                                    className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-full lg:w-72 mt-4 text-base  focus:ring focus:border-primary-300" 
                                    placeholder="Ingrese su celular"
                                    id="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.phone && formik.errors.phone ? (
                                        <p className="text-red-500 ml-2 mt-2 font-bold text-xs">{formik.errors.phone}</p>
                                    ) : null
                                }
                                <div className="mt-4"/>
                                
                        
                                <button type="submit" className=" inline-flex items-center justify-center px-3 md:px-6 py-1 md:py-2  bg-primary-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary-600 active:bg-primary-600 focus:outline-none focus:border-primary-200 focus:ring focus:ring-primary-200 disabled:opacity-25 transition">
                                    Quiero inscribirme
                                </button>
                            </form>
                        ) : (
                            <div className='mt-4'>
                                <p className="text-base md:text-lg font-bold text-center">Gracias, en breve nos comunicaremos con usted.</p>
                            </div>
                        )
                    }
                </div>
            </div>
    )
}
