import React from 'react';
import NavFixed from "../../../../components/layout/NavFixed";
import Layout from "../../../../components/layout/Layout";
import { BsMap } from "react-icons/bs";
import HeaderSchool from "../../../../components/school/HeaderSchool";
import GridSchoolDetails from "../../../../components/school/GridSchoolDetails";


function Index() {

    return (
        <Layout>
            <NavFixed/>

            <HeaderSchool/>
            <GridSchoolDetails/>

        </Layout>
    );
}

export default Index;
