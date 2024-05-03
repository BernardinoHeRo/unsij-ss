import React from 'react'
import Divider from "./Divider.jsx";

export const ScholarShips = () => {
    const navbarHeight = window.innerHeight * 0.22;
    const minHeight = `calc(100vh - ${navbarHeight}px)`;
    return (
        <>
            <div id="ships" style={{minHeight}} className='bg-unsij-daintree-600'>
               <h1 className="text-center text-black text-xl md:text-3xl 2xl:text-4xl font-bold pb-8">
                  Becas
               </h1>
            </div>
        </>
    )
}
export default ScholarShips