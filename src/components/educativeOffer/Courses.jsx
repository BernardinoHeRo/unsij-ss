import React from 'react';
import {FaFacebook, FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import forestalImage from "../../assets/unsij/carreras/forestal.jpg";
import biologiaImage from "../../assets/unsij/carreras/biologia.jpg";
import informaticaImage from "../../assets/unsij/carreras/informatica.jpg";
import turismoImage from "../../assets/unsij/carreras/turismo.jpg";
import ambientalImage from "../../assets/unsij/carreras/ambiental.jpg";

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
        <div className="flex flex-wrap justify-center md:gap-4 xl:gap-8 mx-auto max-w-[100%]">
            {programsData.program.map((program) => (
                <div key={program.id}
                     className="bg-white shadow-md shadow-white rounded-lg tracking-wide w-full sm:max-w-[350px] mb-8 xl:mb-2">
                    <div className="md:flex-shrink-0">
                        <img src={program.imagen} alt={program.nombre}
                             className="w-full h-72 rounded-lg rounded-b-none object-cover"/>
                    </div>
                    <div className="p-2 py-4 flex flex-col justify-around h-[300px]">
                        <h2 className="font-bold text-xl text-gray-800 tracking-normal text-center mb-2">{program.nombre}</h2>
                        <p className="text-sm text-gray-800 flex-grow text-center">
                            {program.informacion}
                        </p>
                        <div className="flex items-center justify-between px-4">
                            <Link to={`/curricular/${program.id}`}
                                  className="text-base rounded-lg text-white bg-orange-600 px-4 py-2 hover:bg-orange-700">
                                Plan de estudios
                            </Link>
                            <a href={program.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="w-10 h-10 text-blue-700"/>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Courses;
