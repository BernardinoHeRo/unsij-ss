import React from 'react'
import Stepper from "./stepper/Stepper.jsx";

export const AdmissionProcess = () => {
    const navbarHeight = window.innerHeight * 0.22;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    return (
        <>
            <div id="admission" className='w-full bg-unsij-black-50'>
                <Stepper />
            </div>
        </>
    )
}
export default AdmissionProcess