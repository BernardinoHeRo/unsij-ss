import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import ScrollToTopButton from "../ScrollTopButton.jsx";

export const LayoutIndex = () => {
    return (
        <>
            <Outlet/>
            <Footer/>
        </>
    );
};
export default LayoutIndex;
