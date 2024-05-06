import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import dataCareers from "../curricularMap/DataCareers.js";
import Footer from "../Footer.jsx";
import InfoCareer from "../curricularMap/InfoCareer.jsx";
import Profile from "../curricularMap/Profile.jsx";
import FieldOfAction from "../curricularMap/FieldOfAction.jsx";
import Plan from "../curricularMap/Plan.jsx";
import NavBarCollege from "../navigationBar/NavBarCollege.jsx";

const CurricularMap = () => {
    const [activeComponent, setActiveComponent] = useState('InfoCareer'); // Componente inicialmente activo
    // Usa el hook useParams para obtener el id de la URL
    const {idCarrer} = useParams();
    // Busca el objeto correspondiente al id en el array dataCareers
    const career = dataCareers.find(career => career.id === parseInt(idCarrer));
    // Ref para el contenedor
    const contentRef = useRef(null);
    // Verifica si se encontró la carrera
    if (!career) {
        return <div>No se encontró la carrera</div>;
    }
    // Extrae el contenido de la carrera
    const {
        title,
        color,
        headOfDepartment,
        email,
        mission,
        vision,
        objective,
        admissionProfile,
        graduateProfile,
        fieldOfAction,
        planEstudios
    } = career.content;
// Función para cambiar el componente activo
    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // Al montar el componente, establece 'InfoCareer' como el componente activo
        setActiveComponent('InfoCareer');
        // Calcular la posición de desplazamiento
        const scrollPosition = contentRef.current.offsetTop - (window.innerHeight * 0.30);

        // Hacer scroll hacia el contenedor con desplazamiento suave
        window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
        });
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

    return (
        <>
            <NavBarCollege
                onComponentChange={handleComponentChange}
                activeComponent={activeComponent}
                color={color}/>
            <div className='w-full bg-white flex flex-col items-center justify-center '>
                <span className='text-2xl font-bold py-2'>Plan de estudios</span>
                <span className='text-lg md:text-2xl text-center font-bold'>{title}</span>
                <span className='text-base md:text-xl'>{headOfDepartment}</span>
                <span className='text-base md:text-xl pb-4'>{email}</span>

                <div ref={contentRef}>
                    {/* Renderizar el componente activo basado en el estado */}
                    {activeComponent === 'InfoCareer' && <InfoCareer data={{mission, vision, objective}}/>}
                    {activeComponent === 'AdmissionProfile' && <Profile data={admissionProfile}/>}
                    {activeComponent === 'GraduateProfile' && <Profile data={graduateProfile}/>}
                    {activeComponent === 'FieldOfAction' && <FieldOfAction data={fieldOfAction}/>}
                    {activeComponent === 'Plan' && <Plan data={planEstudios}/>}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CurricularMap;
