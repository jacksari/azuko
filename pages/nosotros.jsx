import React from 'react';
import Layout from "../components/layout/Layout";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";

function Nosotros(props) {
    return (
        <Layout>
            <Seo
                title="Nosotros"
            />
            <NavFixed/>
            <h1>Nosotros</h1>
        </Layout>
    );
}

export default Nosotros;
