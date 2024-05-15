import React from 'react';
import PropTypes from "prop-types";

const Profile = ({ data }) => {
    console.log(data);

    return (
        <div className='flex flex-col items-center px-2 bg-gray-900 '>
            <span className='max-w-2xl mb-2 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white text-center lg:text-start'>{data.title}</span>
            <span className='text-lg md:text-2xl md:text-center md:pb-4 text-justify text-white'>{data.introduction}</span>

            <div class="w-screen flex-col m-auto p-8 grid grid-cols-1 md:grid-cols-2 2lg:grid-cols-3 2xl:grid-cols-4 gap-2">
                {/* Utiliza Object.entries para convertir el objeto en un array de pares [key, value] */}
                {Object.entries(data.options).map(([key, value]) => (
                    <li key={key} className={`mb-5 sm:flex-row`}>
                        <div class="relative h-full ml-0 mr-0 sm:mr-10">
                            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-900 rounded-lg"></span>
                            <div class="relative h-full p-5 bg-white border-2 border-blue-900 rounded-lg">
                                <p class="text-lg md:text-2xl md:text-center md:pb-4 text-justify text-black">{value} </p>
                            </div>
                        </div>
                    </li>
                ))}
            </div>

            <p className='text-lg md:text-2xl md:text-center md:pb-4 text-justify text-white pt-4'>{data.conclusion}</p>
        </div>

    );
}
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
