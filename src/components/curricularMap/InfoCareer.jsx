import React from 'react'
import informatica from "./../../assets/unsij/carreras/informatica.jpg"
import PropTypes from "prop-types";

export const InfoCareer = ({data}) => {
    const {mission, vision, objective} = data; // Aquí desestructuramos data para acceder a las propiedades

    return (
        <div className='bg-gray-300'>
            <section>
                <div className='flex flex-wrap lg:items-center p-12'>
                    <div className="lg:w-1/2">
                        <img src={informatica} alt=""/>
                    </div>

                    <div className='lg:w-1/2'>
                        <h2 className='lg:ml-12 lg:text-3xl font-bold mt-5 mb-5'>{mission.title}</h2>
                        <p className='lg:ml-12 mb-5 lg:text-xl bg-gray-100 rounded-xl px-2 py-1 text-justify shadow-md'>
                            {mission.content}
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-wrap lg:items-center p-12 '>
                    <div className='lg:w-1/2'>
                        <h2 className='lg:ml-12 lg:text-3xl font-bold mt-5 mb-5'>{vision.title}</h2>
                        <p className='lg:ml-12 mb-5 lg:text-xl bg-gray-100 rounded-xl px-2 py-1 text-justify shadow-md'>
                            {vision.content}
                        </p>
                    </div>

                    <div className="lg:w-1/2 bg-gray-50 ">
                        <img src={informatica} alt=""/>
                    </div>
                </div>
            </section>

            <section>
                <div className='flex flex-wrap lg:items-center p-12'>
                    <div className="lg:w-1/2 bg-gray-50">
                        <img src={informatica} alt=""/>
                    </div>

                    <div className='lg:w-1/2'>
                        <h2 className='lg:ml-12 lg:text-3xl font-bold mt-5 mb-5'>{objective.title}</h2>
                        <p className='lg:ml-12 mb-5 lg:text-xl bg-gray-100 rounded-xl px-2 py-1 text-justify shadow-md'>
                            {objective.content}
                        </p>
                    </div>
                </div>
            </section>
        </div>

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