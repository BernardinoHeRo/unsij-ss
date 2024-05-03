import React, {useState} from "react";
import ImportantDates from "./ImportantDates.jsx";
import Requirements from "./Requirements.jsx";
import Process from "./Process.jsx";
import Exam from "./Exam.jsx";
import Course from "./Course.jsx";
import {Promotion} from "../Promotion.jsx";

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
            <Promotion/>
            <div className="w-full flex flex-col items-center justify-center pt-2">
                <h1 className="font-bold text-3xl md:text-4xl 2xl:text-5xl pb-2">
                    Proceso de admisión {anio}
                </h1>
                <div className="flex flex-row gap-4 pb-4">
                    {/* Mapear los botones del stepper */}
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            className="text-unsij-black-50 font-bold rounded-lg px-4 md:px-6 lg:px-8 2xl:px-10 text-2xl"
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
