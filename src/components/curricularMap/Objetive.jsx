import React from 'react'
import objetiveImg from "../../assets/unsij/general/objetive.png";
import PropTypes from "prop-types";

export const Objetive = ({objetive}) => {
    return (
        <div className="bg-gray-900 border-t-2 border-unsij-black-50">
            <div className="grid max-w-screen-2xl px-2 md:px-8 py-4 mx-auto gap-8 md:grid-cols-7 lg:grid-cols-12">
                <div className="mt-0 md:col-span-3 lg:col-span-5 flex items-center justify-center">
                    <img src={objetiveImg} alt="Objetivo logo" className="w-32 md:w-52 lg:w-80"/>
                </div>
                <div className="mr-auto place-self-center md:col-span-4 lg:col-span-7">
                    <h1 className="max-w-2xl mb-2 text-4xl font-extrabold leading-none tracking-tight
                    md:text-5xl xl:text-6xl text-white text-center lg:text-start">
                        {objetive.title}
                    </h1>
                    <p className="max-w-3xl text-start lg:text-start mb-2 font-light
            text-lg md:text-lg lg:text-xl text-gray-400"
                    >
                        {objetive.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

Objetive.propTypes = {
    objetive: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired
}
export default Objetive