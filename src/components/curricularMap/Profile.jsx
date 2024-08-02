import React from 'react';
import PropTypes from "prop-types";
import {GoDotFill} from "react-icons/go";

const Profile = ({data}) => {
    // console.log(data);

    return (
        <div className='bg-gray-900 max-w-7xl mx-auto py-2 lg:py-4 font-roboto'>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                {data.title}
            </h1>
            <div className='text-base md:text-xl lg:text-2xl text-white text-start px-8'>
                {data.introduction}
            </div>
            <ul className="py-4 px-6 ml-0 md:ml-8 lg:ml-16">
                {Object.entries(data.options).map(([key, value]) => (
                    <li key={key} className="flex items-center justify-start bg-gray-900 py-1 md:py-2 lg:py-3">
                        <div className="flex items-center justify-center mr-3 text-gray-300">
                            <GoDotFill size={20}/>
                        </div>
                        <span className="text-base md:text-base lg:text-2xl text-gray-300">{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Validación de PropTypes
Profile.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        conclusion: PropTypes.string,
        options: PropTypes.objectOf(PropTypes.string).isRequired
    }).isRequired
};

export default Profile;