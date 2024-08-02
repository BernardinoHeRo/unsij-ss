import React from 'react';
import { GoDotFill } from 'react-icons/go';
import PropTypes from 'prop-types';

const FieldOfAction = ({ data }) => {
    const sections = ['companies', 'sector', 'independent', 'education', 'postgraduate', 'public', 'private', 'social', 'international', 'options','conservation','scientific','environmental','entrepreneurship',];

    return (
        <div className="max-w-7xl lg:max-w-[98%] mx-auto py-8 font-roboto">
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-start bg-gray-800 text-white py-2 px-4 mb-4">
                    {data.title}
                </h1>
                {data.introduction && (
                    <p className="text-base md:text-xl lg:text-2xl mt-2 text-center lg:text-start text-white">
                        {data.introduction}
                    </p>
                )}
            </div>
            <div>
                {sections.map((section) => {
                    if (!data[section]) return null; // Skip sections that are not present

                    return (
                        <div key={section} className="bg-gray-950 shadow-md shadow-white text-white mx-2">
                            <div className="px-4 py-6">
                                {section !== 'options' && (
                                    <>
                                        <h2 className="text-xl md:text-3xl lg:text-4xl text-start bg-gray-900 text-orange-600 py-2 px-4 mb-4">
                                            {data[section].title}
                                        </h2>
                                        <div className="flex flex-col">
                                            <div className="px-0 lg:px-8">
                                                <ul className="text-gray-300">
                                                    {Object.entries(data[section]).map(([key, value]) => (
                                                        key !== 'title' && (
                                                            <li key={key} className="flex items-center mt-2">
                                                                <div className="flex items-center justify-center mr-3 text-gray-500">
                                                                    <GoDotFill size={20} />
                                                                </div>
                                                                <p className="text-base lg:text-2xl">{value}</p>
                                                            </li>
                                                        )
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {section === 'options' && (
                                    <>
                                        <h2 className="text-xl md:text-3xl lg:text-4xl text-start bg-gray-900 text-orange-600 py-2 px-4 mb-4">
                                            Opciones de desempeño
                                        </h2>
                                        <div className="flex flex-col">
                                            <div className="px-0 lg:px-8">
                                                <ul className="text-gray-300">
                                                    {Object.entries(data[section]).map(([key, value]) => (
                                                        key !== 'title' && (
                                                            <li key={key} className="flex items-center mt-2">
                                                                <div className="flex items-center justify-center mr-3 text-gray-500">
                                                                    <GoDotFill size={20} />
                                                                </div>
                                                                <p className="text-base lg:text-2xl">{value}</p>
                                                            </li>
                                                        )
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

FieldOfAction.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string,
        companies: PropTypes.shape({
            title: PropTypes.string.isRequired,
            1: PropTypes.string.isRequired,
            2: PropTypes.string,
            3: PropTypes.string,
            4: PropTypes.string,
            5: PropTypes.string
        }),
        sector: PropTypes.shape({
            title: PropTypes.string.isRequired,
            1: PropTypes.string.isRequired,
            2: PropTypes.string,
            3: PropTypes.string,
            4: PropTypes.string,
            5: PropTypes.string
        }),
        independent: PropTypes.shape({
            title: PropTypes.string.isRequired,
            1: PropTypes.string.isRequired,
            2: PropTypes.string,
            3: PropTypes.string
        }),
        education: PropTypes.shape({
            title: PropTypes.string.isRequired,
            1: PropTypes.string.isRequired,
            2: PropTypes.string,
            3: PropTypes.string
        }),
        postgraduate: PropTypes.shape({
            title: PropTypes.string.isRequired,
            1: PropTypes.string
        }),
        public: PropTypes.shape({
            title: PropTypes.string,
            1: PropTypes.string
        }),
        private: PropTypes.shape({
            title: PropTypes.string,
            1: PropTypes.string,
            2: PropTypes.string,
            3: PropTypes.string
        }),
        social: PropTypes.shape({
            title: PropTypes.string,
            1: PropTypes.string,
            2: PropTypes.string,
            3: PropTypes.string,
            4: PropTypes.string
        }),
        international: PropTypes.shape({
            title: PropTypes.string,
            1: PropTypes.string
        }),
        options: PropTypes.shape({
            1: PropTypes.string,
            2: PropTypes.string,
            3: PropTypes.string,
            4: PropTypes.string,
            5: PropTypes.string,
            6: PropTypes.string,
            7: PropTypes.string,
            8: PropTypes.string,
            9: PropTypes.string,
            10: PropTypes.string,
            11: PropTypes.string,
            12: PropTypes.string,
            13: PropTypes.string
        })
    }).isRequired
};

export default FieldOfAction;
