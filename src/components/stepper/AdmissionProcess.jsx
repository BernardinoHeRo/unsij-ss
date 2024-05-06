import React from 'react'
import Stepper from "./Stepper.jsx";
import Promotion from "./Promotion.jsx";

export const AdmissionProcess = () => {
    const navbarHeight = window.innerHeight * 0.08;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    return (
        <>
            <div id="admission" className='w-full bg-unsij-black-50'>
                <Promotion/>
                <Stepper />
            </div>
        </>
    )
}
export default AdmissionProcess