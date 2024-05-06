import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from "../Footer.jsx";
import NavBarCollege from "../navigationBar/NavBarCollege.jsx";

export const LayoutCurricular = () => {
    return (
        <>
            <NavBarCollege/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default LayoutCurricular