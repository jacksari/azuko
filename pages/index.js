import Layout from "../components/layout/Layout";
import HeaderHome from "../components/home/HeaderHome";
import WhyMicole from "../components/home/WhyMicole";
import React from "react";
import cole1 from '../public/img/cole1.svg'
import cole2 from '../public/img/cole2.svg'
import cole3 from '../public/img/cole3.svg'
import Image from 'next/image'
import image from "../assets/logo.png";
import BtnSecondary from "../components/layout/BtnSecondary";
import Seo from "../components/layout/Seo";
import NavFixed from "../components/layout/NavFixed";
import BtnPrimary from "../components/layout/BtnPrimary";

const canales = [
    {
        name: 'Panamericana',
        image: 'https://res.cloudinary.com/mikunaalli/image/upload/v1648391508/alli/Rectangle_109_z32zil.png',
        rating: 1000,
    },
    {
        name: 'RPP',
        image: 'https://res.cloudinary.com/mikunaalli/image/upload/v1648391508/alli/Rectangle_107_1_c8zbq9.png',
        rating: 1100,
    },
    {
        name: 'América TV',
        image: 'https://res.cloudinary.com/mikunaalli/image/upload/v1648391508/alli/Rectangle_106_1_i4sjt9.png',
        rating: 1140,
    },
    {
        name: 'ATV',
        image: 'https://res.cloudinary.com/mikunaalli/image/upload/v1648391508/alli/Rectangle_109_1_bylshm.png',
        rating: 1150,
    },
    {
        name: 'Global',
        image: 'https://res.cloudinary.com/mikunaalli/image/upload/v1648391508/alli/Rectangle_107_xfz9mx.png',
        rating: 1130,
    },
    {
        name: 'Latina',
        image: 'https://res.cloudinary.com/mikunaalli/image/upload/v1648391508/alli/Rectangle_106_uuuqik.png',
        rating: 1140,
    },
]

export default function Home() {
  return (
      <Layout>
          <Seo
              title="Estamos donde más nos necesitas"
          />
          <NavFixed/>
          <HeaderHome/>

          <div className="bg-gray-100 py-16">
              <div className="w-full mx-auto max-w-6xl sm:px-6 lg:px-8">
                  <h2 className="text-center font-bold text-3xl mb-12 text-black2">Los canales con más denuncias</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 m-12">
                      {
                          canales.map(item => (
                              <div key={item.image} className="bg-white p-8 md:p-16 md:pb-8 rounded text-center shadow-sm relative">
                                  <img src={item.image} alt="" className="object-cover"/>
                                  <h3 className="mt-2 text-xl text-primary-500 md:mt-4 md:text-2xl">{ item.name }</h3>
                                  <div className="h-16 w-16 flex items-center justify-center bg-primary-500 rounded-full absolute top-8 right-8">
                                      <p className=" text-white text-xl">{ item.rating }</p>
                                  </div>
                              </div>
                          ))
                      }
                  </div>

                  <div className=" p-3 mt-10 rounded flex flex-col items-center justify-center">

                      <h3 className="text-center font-bold text-3xl mb-12 text-black2">Tu denuncia cuenta, te necesitamos</h3>
                      <BtnPrimary
                          title="Ver más"
                      />
                  </div>
              </div>

          </div>

          {/*
          <div className="bg-gray-100 py-16">
              <div className="w-full mx-auto max-w-5xl sm:px-6 lg:px-8">
                  <h2 className="text-center font-bold text-3xl mb-12 text-black2">¿Por qué escoger MiCole.pe?</h2>
                  <div className="grid grid-cols-3 gap-8">
                      <div className="bg-white pt-12 pb-8 px-6 rounded text-center shadow-sm">
                          <Image
                              src={cole1}
                              alt="Picture of the author"
                              width={120}
                              height={50}
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                          />
                          <h3 className="text-lg font-semibold my-3 text-black2">Cientos de alternativas para escoger</h3>
                          <p className="font-light text-gray-500 text-sm">Encuentra una gran variedad de colegios que se acomoden a tus necesidades</p>
                      </div>
                      <div className="bg-white pt-12 pb-8 px-6 rounded text-center shadow-sm">
                          <Image
                              src={cole2}
                              alt="Picture of the author"
                              width={120}
                              height={50}
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                          />
                          <h3 className="text-lg font-semibold my-3 text-black2">Contacto directo
                              con tu colegio de interés</h3>
                          <p className="font-light text-gray-500 text-sm">Separa una cita directamente desde la plataforma con un solo click</p>
                      </div>
                      <div className="bg-white pt-12 pb-8 px-6 rounded text-center shadow-sm">
                          <Image
                              src={cole3}
                              alt="Picture of the author"
                              width={120}
                              height={50}
                              // blurDataURL="data:..." automatically provided
                              // placeholder="blur" // Optional blur-up while loading
                          />
                          <h3 className="text-lg font-semibold my-3 text-black2">Revisa recomendaciones
                              de nuestra comunidad</h3>
                          <p className="font-light text-gray-500 text-sm">Verifica miles de opiniones de otros padres de familia sobre los colegios de la plataforma</p>
                      </div>
                  </div>
              </div>

          </div>

          <div className="bg-white py-16">
              <div className="w-full mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <h2 className="text-center font-bold text-3xl mb-12 text-black2">Explora nuestras categorías de colegios</h2>
                  <div className="grid grid-cols-5 gap-4">
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                      <article className="relative rounded overflow-hidden">
                          <img src="/img/colegio1.png" alt=""/>
                          <div className="absolute h-full w-full top-0 left-0 bg-gray-800 bg-opacity-40 flex flex-col items-center justify-end pb-4">
                              <img src="/img/colegio1.svg" alt=""/>
                              <h3 className="text-white mt-6 w-2/5 text-center text-lg">Colegios
                                  Especiales</h3>
                          </div>
                      </article>
                  </div>
              </div>
          </div>

          <div className="bg-primary-500 py-16">
              <div className="w-full mx-auto max-w-6xl sm:px-6 lg:px-8">
                  <div className="text-center">
                      <h2 className="text-white text-3xl font-semibold">Inscribe tu colegio en nuestra plataforma</h2>
                      <h3 className="text-white text-md font-light mb-4 mt-2">Únete a la mayor comunidad de colegios en el Perú</h3>
                      <BtnSecondary
                          title="Regístrate gratis"
                      />
                  </div>
              </div>
          </div>

          */}



      </Layout>
  )
}
