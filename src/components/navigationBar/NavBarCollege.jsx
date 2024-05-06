import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/unsij/logo/unsij.png";
import {FaFacebook} from "react-icons/fa";
import {TbWorldWww} from "react-icons/tb";
import PropTypes from "prop-types";
import {IoMdClose, IoMdMenu} from "react-icons/io";

export const NavBarCollege = ({onComponentChange, activeComponent, color}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dropShadowImg = {
        filter: 'drop-shadow( .5px 1px 0px #FFF )',
    };

    const navStyle = {
        backgroundColor: color,
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className="sticky top-0 shadow-sm shadow-unsij-black-950 z-50">
            <div style={navStyle} className="h-[8vh] flex items-center justify-between px-2 lg:px-0 lg:justify-around">
                <Link
                    to="/"
                    className="flex flex-row gap-1 justify-center items-center"
                >
                    <img className="block w-14" src={logo} alt="Logo" style={dropShadowImg}/>
                </Link>
                <span className="mr-1 text-white text-4xl lg:hidden font-bold font-serif">UNSIJ</span>

                <div className="hidden lg:flex lg:flex-row items-center gap-8 text-unsij-black-50 ">
                    <Link to="/" className='text-unsij-black-50 font-medium'>Home</Link>
                    <button onClick={() => onComponentChange('InfoCareer')}
                            className={activeComponent === 'InfoCareer' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}
                    >Información general
                    </button>
                    <button onClick={() => onComponentChange('AdmissionProfile')}
                            className={activeComponent === 'AdmissionProfile' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Perfil de ingreso
                    </button>
                    <button onClick={() => onComponentChange('GraduateProfile')}
                            className={activeComponent === 'GraduateProfile' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Perfil de egreso
                    </button>
                    <button onClick={() => onComponentChange('FieldOfAction')}
                            className={activeComponent === 'FieldOfAction' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Campo de acción
                    </button>
                    <button onClick={() => onComponentChange('Plan')}
                            className={activeComponent === 'Plan' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Materias
                    </button>
                </div>


                <div className="hidden lg:flex flex-row items-center gap-4">
                    <div>
                        <a
                            href="https://www.facebook.com/UNSIJ.SUNEO/?locale=es_LA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="text-3xl text-unsij-black-50"/>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.unsij.edu.mx/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <TbWorldWww className="text-4xl text-unsij-black-50"/>
                        </a>
                    </div>
                </div>

                <div className="-mr-2 flex lg:hidden">
                    <button
                        onClick={handleMenuToggle}
                        className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none
                        focus:bg-gray-700 transition duration-150 ease-in-out"
                    >
                        {isMenuOpen ? (
                            <IoMdClose className="block h-8 w-8"/>
                        ) : (
                            <IoMdMenu className="block h-8 w-8"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú desplegable */}
            <div
                style={navStyle}
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } lg:hidden pt-4 border-t-teal-50 border-t-[1px] absolute top-22 inset-x-0 z-40 text-center h-screen transition-all ease-in duration-1000`}
            >
                <div className='flex flex-col gap-4'>
                    <Link to="/" className='text-unsij-black-50 font-medium'
                          onClick={() => setIsMenuOpen(false)}>Home</Link>

                    <button onClick={() => {
                        onComponentChange('InfoCareer');
                        setIsMenuOpen(false)
                    }}
                            className={activeComponent === 'InfoCareer' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}
                    >Información general
                    </button>

                    <button onClick={() => {
                        onComponentChange('AdmissionProfile');
                        setIsMenuOpen(false)
                    }}
                            className={activeComponent === 'AdmissionProfile' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Perfil de ingreso
                    </button>

                    <button onClick={() => {
                        onComponentChange('GraduateProfile');
                        setIsMenuOpen(false)
                    }}
                            className={activeComponent === 'GraduateProfile' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Perfil de egreso
                    </button>

                    <button onClick={() => {
                        onComponentChange('FieldOfAction');
                        setIsMenuOpen(false)
                    }}
                            className={activeComponent === 'FieldOfAction' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Campo de acción
                    </button>

                    <button onClick={() => {
                        onComponentChange('Plan');
                        setIsMenuOpen(false)
                    }}
                            className={activeComponent === 'Plan' ? 'text-unsij-green-500 font-bold' : 'text-unsij-black-50 font-medium'}>
                        Materias
                    </button>
                </div>
            </div>
        </nav>
    );
}
// Valida las props usando PropTypes
NavBarCollege.propTypes = {
    onComponentChange: PropTypes.func.isRequired,
    activeComponent: PropTypes.string.isRequired, // Asegúrate de que activeComponent sea una cadena
    color: PropTypes.string.isRequired, // Asegúrate de que color sea una cadena
}
export default NavBarCollege