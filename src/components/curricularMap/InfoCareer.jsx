import React from 'react'
import PropTypes from "prop-types";
import Mission from "./Mission.jsx";
import Vision from "./Vision.jsx";
import Objetive from "./Objetive.jsx";
import Main from "./Main.jsx";


export const InfoCareer = ({data}) => {
    const {mission, vision, objective} = data; // Aquí desestructuramos data para acceder a las propiedades

    return (
        <>
            <Mission mission={mission}/>
            <Vision vision={vision}/>
            <Objetive objetive={objective}/>
        </>

    )
}
InfoCareer.propTypes = {
    data: PropTypes.shape({
        mission: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        }),
        vision: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        }),
        objective: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    }).isRequired
};

export default InfoCareer