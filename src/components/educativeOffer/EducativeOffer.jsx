import React from 'react'
import Courses from "./Courses.jsx";

export const EducativeOffer = () => {
    const navbarHeight = window.innerHeight * 0.08;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    return (
        <>
            <div id="offer" className='flex flex-col items-center pb-8 z-30'>
                <h1 className="mt-8 text-white font-bold text-3xl md:text-4xl 2xl:text-5xl pb-2">
                    Oferta educativa
                </h1>
                <p className='px-1 md:px-16 lg:px-32 text-center text-sm md:text-lg lg:text-xl py-2 md:py-4 lg:py-8 font-medium text-white'>
                    La excelencia académica y la diversidad se unen para ofrecerte una experiencia educativa
                    incomparable. Descubre nuestro abanico de programas educativos, encontrarás el camino perfecto para alcanzar tus metas profesionales. ¡Únete a
                    nosotros y haz realidad tus sueños!</p>
                <div className='w-[95%] mx-auto'>
                    <Courses/>
                </div>
            </div>
        </>
    )
}
export default EducativeOffer