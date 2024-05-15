import React, {useState} from 'react';
import {GoDotFill} from "react-icons/go";
import PropTypes from "prop-types";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";

const FieldOfAction = ({data}) => {
    const sections = ['companies', 'sector', 'independent', 'education', 'postgraduate'];
    const [currentSection, setCurrentSection] = useState(0); // Estado para mantener el índice de la sección actualmente mostrada

    const nextSection = () => {
        setCurrentSection((prevIndex) => (prevIndex === sections.length - 1 ? 0 : prevIndex + 1)); // Avanzar al siguiente índice de sección
    };

    const prevSection = () => {
        setCurrentSection((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1)); // Retroceder al índice de sección anterior
    };

    return (
        <div className="min-h-screen">
            <div
                className='pt-4 w-[98%] lg:max-w-7xl mx-auto text-unsij-daintree-950 px-8 flex flex-col items-center justify-center pb-2'>
                <span className='text-xl lg:text-3xl font-bold'>{data.title}</span>
                <p className='text-base md:text-2xl text-center'>{data.introduction}</p>
            </div>

            {/* Botones */}
            <div className="flex justify-center items-center gap-4 text-black pb-2">
                <button
                    className="border border-unsij-black-950 p-2 rounded-xl hover:border-orange-500 transition-colors group"
                    onClick={prevSection} // Llamar a la función prevSection al hacer clic
                >
                    <GrLinkPrevious className='w-8 h-4 lg:w-16 lg:h-4'/>
                </button>
                <button
                    className="border border-unsij-black-950 p-2 rounded-xl hover:border-orange-500 transition-colors group"
                    onClick={nextSection} // Llamar a la función nextSection al hacer clic
                >
                    <GrLinkNext className='w-8 h-4 lg:w-16 lg:h-4'/>
                </button>
            </div>


            <div className='bg-gray-900'>
                <div className="bg-gray-900">
                    <div className="relative flex">
                        {/* Fondo izquierdo */}
                        <div className="min-h-[80vh] lg:w-[25%]"></div>
                        {/* Fondo derecho */}
                        <div className="hidden min-h-[80vh] w-3/4 bg-gray-800 lg:block" style={{clipPath: 'circle(77.5% at 78% 51%)'}}></div>
                        {/* Contenedor principal */}
                        <div className="container flex flex-col justify-center w-full px-4 md:px-10 py-5 mx-auto lg:absolute lg:inset-x-8">

                            {/* Mostrar solo la sección correspondiente al índice actual */}
                            <div key={sections[currentSection]} className='flex flex-col items-center'>

                                <h1 className="text-xl lg:my-8 lg:text-3xl font-bold text-white text-center">
                                    {data[sections[currentSection]].title}
                                </h1>

                                <div className="flex flex-col items-center justify-center lg:flex-row lg:items-stretch lg:justify-center">
                                    <img className="mt-8 lg:mt-32 object-fit object-center w-full lg:w-[32rem] rounded-2xl drop-shadow-5xl mb-4 lg:mb-0" src="https://img.freepik.com/foto-gratis/toma-interior-hombre-feliz-estudiante-cabello-rizado-vestido-casualmente-sentado-cafeteria-trabajando-tecnologias-modernas-mientras-estudia-mirando-sonrisa-cuaderno-recibiendo-mensaje-amigo_273609-7468.jpg" alt="" />
                                    <div className="lg:px-10">
                                        <ul className="text-gray-400">
                                            {Object.entries(data[sections[currentSection]]).map(([key, value]) => (
                                                key !== 'title' && (
                                                    <li key={key}>
                                                        <p className="mt-6 text-lg md:text-2xl leading-[140%] flex flex-row items-center justify-start">
                                                            <strong className='mr-2'><GoDotFill className='w-16'/></strong>{value}
                                                        </p>
                                                    </li>
                                                )
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

FieldOfAction.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        companies: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        sector: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        independent: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        education: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        postgraduate: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
}

export default FieldOfAction;
