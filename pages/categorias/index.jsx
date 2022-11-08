import React from 'react';
import Layout from "../../components/layout/Layout";
import Seo from "../../components/layout/Seo";
import NavFixed from "../../components/layout/NavFixed";

function Index(props) {
    return (
        <Layout>
            <Seo
                title="Categorías"
            />
            <NavFixed/>
            <h1>Categorias list</h1>
        </Layout>
    );
}

export default Index;
