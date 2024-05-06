import React, { useState } from 'react';
import PropTypes from "prop-types";
import { GoDotFill } from "react-icons/go";
import { IoBusinessOutline } from "react-icons/io5";
import { MdOutlineCastForEducation, MdOutlinePublic } from "react-icons/md";
import { FaPersonArrowUpFromLine, FaUserGraduate } from "react-icons/fa6";

const sections = [
    { icon: <IoBusinessOutline className='w-16 h-16' />, key: 'companies' },
    { icon: <MdOutlinePublic className='w-16 h-16' />, key: 'sector' },
    { icon: <FaPersonArrowUpFromLine className='w-16 h-16' />, key: 'independent' },
    { icon: <MdOutlineCastForEducation className='w-16 h-16' />, key: 'education' },
    { icon: <FaUserGraduate className='w-16 h-16' />, key: 'postgraduate' }
];

const FieldOfAction = ({ data }) => {
    const [isOpen, setIsOpen] = useState(() => Object.fromEntries(sections.map(section => [section.key, false])));

    const toggleSection = (section) => {
        setIsOpen(prevState => ({ ...prevState, [section]: !prevState[section] }));
    };

    return (
        <div className='flex flex-col items-center px-2 font-serif'>
            <span className="text-xl md:text-3xl font-bold pb-4">{data.title}</span>
            <span className='text-lg md:text-2xl md:pb-4 text-start md:text-center pb-4'>{data.introduction}</span>

            {sections.map(section => (
                <div key={section.key}>
                    <div className='pt-2 flex flex-col items-center'>
                        <div className="flex flex-col items-center cursor-pointer" onClick={() => toggleSection(section.key)}>
                            {section.icon}
                            <span className='text-lg md:text-2xl font-semibold pb-4 text-center'>{data[section.key].title}</span>
                        </div>
                    </div>
                    {isOpen[section.key] && (
                        <ul className="flex flex-col justify-start border border-gray-500 rounded-lg">
                            {Object.entries(data[section.key]).map(([key, value], index) => (
                                key !== 'title' && (
                                    <li key={key} className={`pt-2 ${index % 2 === 0 ? 'bg-gray-200' : ''}`}>
                                        <p className="text-lg md:text-2xl leading-[140%] flex flex-row items-center justify-start">
                                            <strong className='mr-2'><GoDotFill/></strong>{value}
                                        </p>
                                    </li>
                                )
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

FieldOfAction.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        companies: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        sector: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        independent: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        education: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        postgraduate: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
}

export default FieldOfAction;
