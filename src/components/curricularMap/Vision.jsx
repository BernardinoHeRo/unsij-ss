import React from 'react';
import visionImage from './../../assets/unsij/general/vision.png';
import PropTypes from 'prop-types';

export const Vision = ({vision}) => {
    return (
        <div className="bg-gray-900 max-w-7xl mx-auto py-2 lg:py-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                {vision.title}
            </h1>
            <div className="grid md:grid-cols-3">
                <p className="md:col-span-2 text-start text-sm md:text-base lg:text-2xl text-gray-400 px-4">
                    {vision.content}
                </p>
                <div className="md:col-span-1 flex items-center justify-center">
                    <img src={visionImage} alt="Vision image" className="w-20 md:w-28 lg:w-48"/>
                </div>
            </div>
        </div>
    );
};

Vision.propTypes = {
    vision: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default Vision;
