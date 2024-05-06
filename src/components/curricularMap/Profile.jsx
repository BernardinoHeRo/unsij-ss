import React from 'react';
import PropTypes from "prop-types";
import {GoDotFill} from "react-icons/go";

const Profile = ({data}) => {
    console.log(data);

    return (
        <div className='flex flex-col items-center px-2 font-serif'>
            <span className='text-lg md:text-2xl font-bold pb-4'>{data.title}</span>
            <span className='text-lg md:text-2xl md:text-center md:pb-4 text-justify'>{data.introduction}</span>
            <ul className="flex flex-col justify-start border border-gray-500 rounded-lg">
                {/* Utiliza Object.entries para convertir el objeto en un array de pares [key, value] */}
                {Object.entries(data.options).map(([key, value], index) => (
                    <li key={key} className={`pt-2 ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
                        <p className="text-lg md:text-2xl leading-[140%] flex flex-row items-center justify-start">
                            <strong className='mr-2'>
                                <GoDotFill/> </strong>{value}</p>
                    </li>
                ))}
            </ul>
            <p className='pt-2 text-center text-lg md:text-2xl pb-8'>{data.conclusion}</p>
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
