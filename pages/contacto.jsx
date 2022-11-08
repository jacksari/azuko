import React from 'react';
import Layout from "../components/layout/Layout";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";

function Contacto(props) {
    return (
        <Layout>
            <Seo
                title="Contacto"
            />
            <NavFixed/>
            <h1>Contacto</h1>
        </Layout>
    );
}

export default Contacto;
