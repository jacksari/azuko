import React from 'react';
import Layout from "../components/layout/Layout";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";

function TerminosCondiciones(props) {
    return (
        <Layout>
            <Seo
                title="Términos y condiciones"
            />
            <NavFixed/>
            <h1>Términos y condiciones</h1>
        </Layout>
    );
}

export default TerminosCondiciones;
