import React, {Component} from 'react';
import Layout from "../components/layout/Layout";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";

class EnviarFormulario extends Component {
    render() {
        return (
            <Layout>
                <Seo
                    title="Estamos donde más nos necesitas"
                />
                <NavFixed/>

                <div className="bg-gray-100 py-16">
                    <div className="w-full mx-auto max-w-6xl sm:px-6 lg:px-8">
                        <div className="flex flex-col">
                            <label >Nombre del programa</label>
                            <input type="email" className="focus:outline-none border border-gray-300 px-6 py-2 rounded mt-4" placeholder="Escriba aquí el nombre del programa"/>
                        </div>
                        <div className="flex flex-col mt-4">
                            <label >Fecha de emisión</label>
                            <input type="date" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" />
                        </div>
                    </div>
                </div>


                <input type="email" className="focus:outline-none border border-gray-300 px-6 py-2 rounded w-72 mt-4" placeholder="correo@correo.com"/>
                <h1>Version 2</h1>

            </Layout>
        );
    }
}

export default EnviarFormulario;