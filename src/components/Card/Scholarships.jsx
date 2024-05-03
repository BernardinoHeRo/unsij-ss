import React from 'react'

import inpi from "../../assets/unsij/scholarships/INPI.jpg";
import jovenes from "../../assets/unsij/scholarships/JOVENES.png";
import unsij from "../../assets/unsij/scholarships/LOGOv2.png";

export const Scholarships = () => {
  return (
    <div class="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
            <div class="min-h-screen max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
                <div class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-5 lg:order-none">
                    <div>
                        <img src={jovenes} alt="Photography" class="w-full h-40 sm:h-48 object-cover" />
                    </div>
                    <div class="py-5 px-6 sm:px-8">
                        <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3 text-center">Beca Jóvenes Escribiendo el Futuro</h2>
                        <p class="text-gray-500 leading-relaxed text-justify">
                            La Beca Jóvenes Escribiendo el Futuro para Educación Superior forman parte del proyecto federal 
                            de Becas Benito Juárez que busca garantizar la educación inclusiva, 
                            equitativa y de calidad en los estudiantes de todos los niveles educativos.
                        </p>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none">
                    <div>
                        <img src={unsij} alt="Abstract Design" class="w-full h-40 sm:h-48 object-cover" />
                    </div>
                    <div class="py-5 px-6 sm:px-8">
                        <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3 text-center">Beca Colegiatura</h2>
                        <p class="text-gray-500 leading-relaxed text-justify">
                            Tanto para Licenciaturas y Maestrías, se determina con base en un estudio socioeconómico
                            que los alumnos presentan previa convocatoria, la comisión de becas analiza y 
                            propone ante consejo académico los porcentajes
                            de beca colegiatura que puede ser de 25%,50%,75% y 100%.
                        </p>
                    </div>
                </div>
                <div class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-3 md:row-start-1 md:col-start-2 lg:order-none">
                    <div>
                        <img src={inpi} alt="Web Design" class="w-full h-40 sm:h-48 object-cover" />
                    </div>
                    <div class="py-5 px-6 sm:px-8">
                        <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3 text-center">Beca Alimentaria</h2>
                        <p class="text-gray-500 leading-relaxed text-justify">
                            La Comisión de Becas realiza la asignación de esta beca,
                            con base en el estudio socioeconómico que los alumnos presentan, beneficiando principalmente a aquellos
                            alumnos con situación socioeconómica limitada y que procedan de comunidades alejadas a la Universidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
