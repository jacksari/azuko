import React from 'react';
import Layout from "../../components/layout/Layout";
import Seo from "../../components/layout/Seo";
import NavFixed from "../../components/layout/NavFixed";

function Index() {
    return (
        <Layout>
            <Seo
                title="Blogs"
            />
            <NavFixed/>
            <h1>Blogs</h1>
        </Layout>
    );
}

export default Index;
