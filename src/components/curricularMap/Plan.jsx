import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import PropTypes from "prop-types";
import {GoDash} from "react-icons/go";

const Plan = ({data}) => {
    const [activeSection, setActiveSection] = useState(null);

    const handleClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className='w-screen flex flex-col justify-center items-center bg-gray-300 pb-4'>
            <h2 className='text-lg md:text-2xl mt-6 font-semibold'>{data.title}</h2>
            <div className="w-full lg:w-[80%] m-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
                {Object.entries(data).map(([key, value]) => {
                    // Saltar título e introducción
                    if (key === 'title' || key === 'introduction') return null;
                    return (
                        <div key={key} className='mb-4'>
                            <button
                                className='w-full text-left text-lg md:text-2xl focus:outline-none
                                p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center'
                                onClick={() => handleClick(key)}
                            >
                                {value.title}
                                {activeSection === key ? <FaMinusCircle/> : <FaPlusCircle/>}
                            </button>

                            <AnimatePresence>
                                {activeSection === key && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            height: 0
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: "auto"
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0
                                        }}
                                        className='mt-2 text-gray-600 ml-4'
                                    >
                                        <ul>
                                            {value.content.map((course, index) => (
                                                <li key={index} className='mt-2'>
                                                    <p className='flex flex-row items-center text-base md:text-xl'>
                                                        <strong className='mr-2'><GoDash/></strong>{course}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
Plan.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        preparatoryCourse: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        firstSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        secondSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        thirdSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        fourthSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        fifthSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        sixthSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        seventhSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        eightSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        ninthSemester: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
        electives: PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired,
    }).isRequired,
};
export default Plan;
