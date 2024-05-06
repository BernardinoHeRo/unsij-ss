import React from 'react'
import jovenes from "../assets/unsij/scholarships/JOVENES.png";
import unsij from "../assets/unsij/scholarships/LOGOv2.png";
import inpi from "../assets/unsij/scholarships/INPI.jpg";

export const ScholarShips = () => {
    const navbarHeight = window.innerHeight * 0.22;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    return (
        <>
            <div id="ships"
                 className="bg-unsij-black-400 pb-8 flex flex-col items-center justify-center">
                <h1 className="mt-8 text-black font-bold text-3xl md:text-4xl 2xl:text-5xl pb-2">
                    Becas
                </h1>
                <div className="mt-8 min-h-[50vh] w-[90%] md:w-[99%] xl:max-w-[75%] mx-auto justify-center justify-items-center
                     grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white shadow-lg rounded-xl w-full">
                        <div>
                            <img src={jovenes} alt="JEEF" className="w-full h-40 sm:h-48 object-cover"/>
                        </div>
                        <div className="py-5 px-6 sm:px-8">
                            <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3 text-center">Beca
                                Jóvenes Escribiendo el Futuro</h2>
                            <p className="text-gray-500 leading-relaxed text-justify">
                                La Beca Jóvenes Escribiendo el Futuro para Educación Superior forman parte del proyecto
                                federal
                                de Becas Benito Juárez que busca garantizar la educación inclusiva,
                                equitativa y de calidad en los estudiantes de todos los niveles educativos.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl w-full">
                        <div>
                            <img src={unsij} alt="UNSIJ" className="w-full h-40 sm:h-48 object-contain"/>
                        </div>
                        <div className="py-5 px-6 sm:px-8">
                            <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3 text-center">Beca
                                Colegiatura</h2>
                            <p className="text-gray-500 leading-relaxed text-justify">
                                Tanto para Licenciaturas y Maestrías, se determina con base en un estudio socioeconómico
                                que los alumnos presentan previa convocatoria, la comisión de becas analiza y
                                propone ante consejo académico los porcentajes
                                de beca colegiatura que puede ser de 25%,50%,75% y 100%.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl w-full">
                        <div>
                            <img src={inpi} alt="INPI" className="w-full h-40 sm:h-48 object-cover"/>
                        </div>
                        <div className="py-5 px-6 sm:px-8">
                            <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3 text-center">Beca
                                Alimentaria</h2>
                            <p className="text-gray-500 leading-relaxed text-justify">
                                La Comisión de Becas realiza la asignación de esta beca,
                                con base en el estudio socioeconómico que los alumnos presentan, beneficiando
                                principalmente a aquellos
                                alumnos con situación socioeconómica limitada y que procedan de comunidades alejadas a
                                la Universidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ScholarShips