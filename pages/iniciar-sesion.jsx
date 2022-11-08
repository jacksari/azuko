import React from 'react';
import Link from "next/link";
import BtnPrimary from "../components/layout/BtnPrimary";

function IniciarSesion() {
    return (
        <main className="bg-hero-login bg-center bg-cover bg-no-repeat flex items-center justify-center h-screen w-full bg-opacity-20">
            <div className="bg-white shadow px-6 py-6 rounded">
                <Link href="/">
                    <a className="m-0 p-0 text-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/img/login2.svg" className="text-center m-auto object-contain h-8" alt=""/>
                    </a>
                </Link>
                <form className="flex flex-col">
                    <input type="email" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="correo@correo.com"/>
                    <input type="password" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="contraseña"/>
                    <div className="mt-4"/>
                    <BtnPrimary
                        title="Iniciar sesión"
                    />
                </form>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <p className="text-sm text-primary-500 font-medium">¿Has olvidado tu contraseña?</p>
                    <a href="#" className="text-sm text-gray-500 font-semibold">Recuperar contraseña</a>
                </div>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-500">Prefiero iniciar sesion con:</p>
                    <div className="flex mt-2">
                        <button className="flex items-center justify-center mx-2">
                            <img src="https://res.cloudinary.com/mikunaalli/image/upload/v1636670947/micole/FB_cs5rcs.png" alt=""/>
                        </button>
                        <button className="flex items-center justify-center mx-2">
                            <img src="https://res.cloudinary.com/mikunaalli/image/upload/v1636670947/micole/logos_google-gmail_kubwpl.png" alt=""/>
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex flex-col justify-center items-center">
                    <p className="text-sm text-primary-500 font-medium">No tengo cuenta, deseo </p>
                    <a href="#" className="text-sm text-gray-500 font-semibold">Registrarme ahora</a>
                </div>
            </div>
        </main>
    );
}

export default IniciarSesion;
