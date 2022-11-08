import React from "react";
import BtnPrimary from "../layout/BtnPrimary";
import { RiArrowDownSLine } from "react-icons/ri";

const HeaderHome = () => {
  return (
    <header className="flex flex-col bg-gray-100 h-screen">
      <div className="relative bg-white flex-1 bg-hero-header bg-no-repeat bg-center bg-cover">
        <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white text-center">
            ¡Te llevamos todos los alimentos frescos que necesitas durante el
            mes!
          </h1>
          <h2 className="py-2 text-white text-2xl font-normal">
            ¡Despreocúpate!
          </h2>

          <h3 className="py-2 text-white text-4xl font-normal">Planifica tu compra de alimentos al mes o al año.</h3>

          <div className=" p-3 mt-10 rounded flex shadow-2xl">
            <BtnPrimary title="¡Encuentra tu membresia ideal!" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
