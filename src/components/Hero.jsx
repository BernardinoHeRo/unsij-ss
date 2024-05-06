import React from "react";
import backgroundImage from "../assets/unsij/background/unsij.jpeg";
import Divider from "./Divider.jsx"; // Ruta de tu imagen de fondo
import logo from '../assets/unsij/logo/unsij.png'

export const Hero = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "85vh",
        textAlign: "center", // Alineación del texto
        padding: "0 20px", // Espaciado interno (horizontal)
        position: "relative" // Para manejar la superposición de texto
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Fondo semi-transparente para el texto
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    };

    const textStyle = {
        color: "white", // Color del texto
        fontSize: "48px", // Tamaño de fuente
        fontWeight: "bold", // Peso de la fuente
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Sombra suave detrás del texto
        padding: "20px", // Espaciado interno para el texto
        maxWidth: "80%" // Ancho máximo del texto
    };

    const navbarHeight = window.innerHeight * 0.08;
    return (
        <>
            <div id="index" style={divStyle} className='md:bg-fixed'>
                {/* Capa de superposición con fondo semi-transparente */}
                <div style={overlayStyle}>
                    <h1
                        className="text-unsij-black-50 text-[100px] md:text-[130px] lg:-mt-32 font-serif
                font-bold [text-shadow:_0_5px_0_rgb(0_59_31_/_80%)]"
                    >
                        UNSIJ
                    </h1>
                    <p
                        className="text-unsij-black-50 text-[16px] md:text-[25px] 2xl:text-[30px]
                font-bold -mt-6 lg:-mt-10 font-serif [text-shadow:_0_3px_0_rgb(0_59_31_/_80%)]"
                    >
                        "Educación con calidad y compromiso social"
                    </p>
                    <a
                        href="#"
                        className="mt-2 bg-unsij-green-800 text-white font-bold py-2 px-4 rounded-md uppercase
                       hover:transform hover:scale-105 hover:border-2"
                    >
                        <p className='[text-shadow:_0_2px_0_rgb(0_0_0_/_100%)]'>Nuestra historia</p>
                    </a>
                </div>
            </div>
            <Divider
                text="Explora la UNSIJ"
                url="admission"
                navbarHeight={navbarHeight}
            />
        </>
    );
};

export default Hero;
