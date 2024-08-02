import React from 'react'
import missionImg from './../../assets/unsij/general/mission.png'
import PropTypes from "prop-types";

export const Mission = ({mission}) => {
    return (
        <div className="bg-gray-900 max-w-7xl mx-auto py-2 lg:py-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                {mission.title}
            </h1>
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-1 flex items-center justify-center">
                    <img src={missionImg} alt="Misión image" className="w-20 md:w-28 lg:w-48"/>
                </div>

                <p className="md:col-span-2 text-start text-sm md:text-base lg:text-2xl text-gray-400 px-4"
                >
                    {mission.content}
                </p>
            </div>
        </div>
    )
}

Mission.propTypes = {
    mission: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired
}
export default Mission