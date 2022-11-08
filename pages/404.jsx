import React from 'react';
import Layout from "../components/layout/Layout";
import Link from 'next/link'
import LinkPrimary from "../components/layout/LinkPrimary";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";

function NotFound() {
    return (
        <Layout>
            <Seo
                title="Página no encontrada"
            />
            <NavFixed/>
            <div className="min-h-screen bg-hero-header flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-white mb-12">Página no encontrada</h1>

                <LinkPrimary
                    href="/"
                    text="Inicio"
                />
            </div>
        </Layout>
    );
}

export default NotFound;
