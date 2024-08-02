import React, {useState} from "react";
import ImportantDates from "./content/ImportantDates.jsx";
import Requirements from "./content/Requirements.jsx";
import Process from "./content/Process.jsx";
import Exam from "./content/Exam.jsx";
import Course from "./content/Course.jsx";
import {Promotion} from "./Promotion.jsx";

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const anio = new Date().getFullYear();

    // Estilos para los botones
    const buttonStyles = {
        common: {
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "0.5rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1.5rem"
        },
        active: {
            backgroundColor: "#FC4B08"
        },
        inactive: {
            backgroundColor: "#003b1f",
            color: "white"
        }
    };

    // Definir los pasos y su contenido asociado
    const steps = [
        {content: <ImportantDates/>},
        {content: <Requirements/>},
        {content: <Process/>},
        {content: <Exam/>},
        {content: <Course/>}
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-3xl md:text-5xl 2xl:text-6xl pb-4">
                    Proceso de admisión {anio}
                </h1>
                <div className="flex flex-row gap-1 md:gap-4 xl:gap-2 pb-4">
                    {/* Mapear los botones del stepper */}
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            className="text-unsij-black-50 font-amsi-pro rounded-r-2xl py-2 px-6 md:px-6 lg:px-8 2xl:px-6 text-2xl"
                            style={{
                                ...(currentStep === index
                                    ? buttonStyles.active
                                    : buttonStyles.inactive)
                            }}
                            onClick={() => setCurrentStep(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            {/* Mostrar el contenido del paso actual */}
            <div className="w-[95%]">{steps[currentStep].content}</div>
        </div>
    );
};

export default Stepper;
