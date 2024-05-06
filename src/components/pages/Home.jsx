import React from "react";
import Hero from "../Hero";
import NavBar from "../navigationBar/NavBar.jsx";
import AdmissionProcess from "../stepper/AdmissionProcess.jsx";
import ScholarShips from "../ScholarShips.jsx";
import EducativeOffer from "../educativeOffer/EducativeOffer.jsx";
import CollegeLife from "../collegeLife/CollegeLife.jsx";

export const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <AdmissionProcess/>
            <EducativeOffer/>
            <ScholarShips/>
            <CollegeLife/>
        </>
    );
};
export default Home;
