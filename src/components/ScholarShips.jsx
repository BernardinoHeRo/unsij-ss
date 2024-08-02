import React from 'react'
import jovenes from "../assets/unsij/scholarships/JOVENES.png";
import unsij from "../assets/unsij/scholarships/LOGOv2.png";
import inpi from "../assets/unsij/scholarships/INPI.jpg";

const servicesData = [
    {
        "id": 1,
        "title": "Beca Jóvenes Escribiendo el Futuro",
        "description": "La Beca Jóvenes Escribiendo el Futuro para Educación Superior forman parte del proyecto federal de Becas Benito Juárez que busca garantizar la educación inclusiva, equitativa y de calidad en los estudiantes de todos los niveles educativos.",
        "image": jovenes
    },
    {
        "id": 2,
        "title": "Beca Colegiatura",
        "description": "Tanto para Licenciaturas y Maestrías, se determina con base en un estudio socioeconómico que los alumnos presentan previa convocatoria, la comisión de becas analiza y propone ante consejo académico los porcentajes de beca colegiatura que puede ser de 25%,50%,75% y 100%.",
        "image": unsij
    },
    {
        "id": 3,
        "title": "Beca Alimentaria",
        "description": "La Comisión de Becas realiza la asignación de esta beca, con base en el estudio socioeconómico que los alumnos presentan, beneficiando principalmente a aquellos alumnos con situación socioeconómica limitada y que procedan de comunidades alejadas a la Universidad.",
        "image": inpi
    }
];

export const ScholarShips = () => {
    return (
        <div id="ships" className="bg-gray-100 flex flex-col py-8 px-4 md:px-0">
            <h1 className="text-unsij-green-950 text-center font-extrabold text-3xl md:text-4xl 2xl:text-5xl pb-8">
                Servicios que ofrecemos
            </h1>
            <div className="flex flex-wrap justify-center md:gap-4 xl:gap-6 mx-auto max-w-[100%]">
                {servicesData.map((service) => (
                        <div key={service.id} className="bg-white shadow-md shadow-unsij-green-950 rounded-lg tracking-wide w-full sm:max-w-[350px] mb-8 xl:mb-2">
                            <div className="md:flex-shrink-0">
                                <img src={service.image} alt={service.title}
                                     className="w-full h-72 object-cover rounded-lg rounded-b-none"/>
                            </div>
                            <div className="p-2 py-4 flex flex-col justify-around h-[300px]">
                                <h2 className="text-xl sm:text-2xl text-gray-900 font-normal text-center">{service.title}</h2>
                                <p className="text-gray-500 leading-relaxed text-center">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default ScholarShips
