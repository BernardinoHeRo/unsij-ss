import React from "react";
import Hero from "../Hero";
import NavBar from "../navigationBar/NavBar.jsx";
import AdmissionProcess from "../AdmissionProcess";
import ScholarShips from "../ScholarShips.jsx";
import EducativeOffer from "../EducativeOffer.jsx";
import CollegeLife from "./CollegeLife.jsx";

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
