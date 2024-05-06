import React from 'react'

import forestalImage from "../../assets/unsij/carreras/forestal.jpg";
import biologiaImage from "../../assets/unsij/carreras/biologia.jpg";
import informaticaImage from "../../assets/unsij/carreras/informatica.jpg";
import turismoImage from "../../assets/unsij/carreras/turismo.jpg";
import ambientalImage from "../../assets/unsij/carreras/ambiental.jpg";

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/swiper-bundle.css';


// import required modules
import {Autoplay, FreeMode, Navigation, Pagination} from 'swiper/modules';
import {FaFacebookF} from "react-icons/fa";
import {Link} from "react-router-dom";

const programsData = {
    program: [
        {
            id: 1,
            "infoColor": "#18592F",
            nombre: 'Ingeniería Forestal',
            informacion: 'Formación para liderar la gestión sostenible de bosques. Oportunidades emocionantes en entidades gubernamentales, ONGs y emprendimiento. Únete para explorar, conservar y liderar el cambio hacia un futuro sustentable y dinámico.',
            imagen: forestalImage,
            facebook: "https://www.facebook.com/p/Ingenier%C3%ADa-Forestal-UNSIJ-100085260390818/",
        }, {
            id: 2,
            "infoColor": "#32A643",
            nombre: 'Licenciatura en Biología',
            informacion: 'Formamos líderes en conocimiento de la vida, conservación de la biodiversidad e investigación. Únete para contribuir al desarrollo sustentable y explorar la fascinante ciencia de la vida.',
            imagen: biologiaImage,
            facebook: "https://www.facebook.com/InformaticaUNSIJ/?locale=es_LA",
        }, {
            id: 3,
            "infoColor": "#023E73",
            nombre: 'Ing. en Desarrollo de Software y Sistemas Inteligentes',
            informacion: 'Forma líderes analíticos y emprendedores capaces de desarrollar sistemas, administrar recursos informáticos y contribuir al cambio tecnológico. Únete para transformar el futuro.',
            imagen: informaticaImage,
            facebook: "https://www.facebook.com/InformaticaUNSIJ/?locale=es_LA",
        }, {
            id: 4,
            "infoColor": "#124022",
            nombre: 'Licenciatura en Ciencias Ambientales para el desarrollo comunitario',
            informacion: 'Analiza ecosistemas, propone soluciones sostenibles y aplica técnicas de remediación. Plan de estudios integral y amplio campo de acción. Únete para liderar el cambio hacia un futuro ambientalmente consciente.',
            imagen: ambientalImage,
            facebook: "https://www.facebook.com/Licenciatura.en.Ciencias.Ambientales.UNSIJ/?locale=es_LA",
            planEstudios: "Programa de estudios"
        }, {
            id: 5,
            "infoColor": "#275D8C",
            nombre: 'Licenciatura en Administración Turística',
            informacion: 'Formamos líderes en Administración Turística para dirigir, innovar y promover destinos. Únete para explorar el mundo del turismo y contribuir al desarrollo sostenible de comunidades locales.',
            imagen: turismoImage,
            facebook: "https://www.facebook.com/turismoUNSIJ/",
        },
    ]
}
export const Courses = () => {
    return (
        <div
            className="backdrop-filter backdrop-brightness-200 rounded-3xl contrast-105 px-8 w-full min-h-[35vh] gap-5 flex-wrap flex justify-center items-center">
            {/* Personalización de botones de navegación */}
            <style>
                {`
                    .swiper-button-prev,
                    .swiper-button-next {
                        color: #FFFFFF;
                        padding: 10px 10px;
                        border-radius: 5px;
                        cursor: pointer;
                        background-color: #F18208;
                        opacity: 0.4;
                    }

                        .swiper-button-prev:hover,
                        .swiper-button-next:hover {
                            background-color: #A15500;
                            color: #FFFFFF;
                            opacity: 1;
                        }
                `}
            </style>

            <Swiper
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
                loop={true}
                navigation={true}
                watchSlidesProgress={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                className="max-w-[100%]"
            >

                {programsData.program.map((program) => (
                    <SwiperSlide key={program.id}>
                        <div
                            className="w-full mx-auto group relative items-center justify-center rounded-lg
                            overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black">
                            <div className="h-96 w-92">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                                    src={program.imagen}
                                    alt={program.nombre}
                                />
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                            </div>
                            <div
                                className="absolute inset-0 flex translate-y-[50%] flex-col mt-20 items-center justify-start
                                px-9 text-center transition-all duration-500 group-hover:-translate-y-20">
                                <h1 className="font-dmserif text-lg font-bold text-white">{program.nombre}</h1>
                                <p className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    _______________________________________
                                </p>
                                <p className="mt-2 mb-3 text-sm md:text-base text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {program.informacion}
                                </p>
                            </div>
                            <div
                                className="absolute inset-x-0 bottom-1  flex y-[50%] items-center justify-center px-10 text-center">
                                <div
                                    className="m-2 justify-betwen flex space-x-4  items-center justify-center text-center">
                                    {program.facebook && (
                                        <a role='button' href={program.facebook} target="_blank"
                                           rel="noopener noreferrer"
                                           className="inset-0 rounded-full p-2 bg-blue-700 hover:bg-blue-900">
                                            <FaFacebookF className='text-3xl text-white'/>
                                        </a>
                                    )}
                                    <Link
                                        to={`/curricular/${program.id}`}
                                        className="text-md rounded-xl text-white bg-orange-600 px-2 py-2 hover:bg-orange-700">
                                        Plan de estudios
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )


}

export default Courses
