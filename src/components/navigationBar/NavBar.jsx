import React, {useEffect, useRef, useState} from "react";
import logo from "../../assets/unsij/logo/unsij.png";
import {Link} from "react-router-dom";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {Link as ScrollLink} from "react-scroll";
import {FaFacebook} from "react-icons/fa";
import {TbWorldWww} from "react-icons/tb";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [activeLink, setActiveLink] = useState(1);

    const menuRef = useRef();

    useEffect(() => {
        const menuItems = [
            {id: 1, text: "Inicio", url: "index"},
            {id: 2, text: "Admisión", url: "admission"},
            {id: 3, text: "Oferta educativa", url: "offer"},
            {id: 4, text: "Servicios", url: "ships"},
            {id: 5, text: "Vida universitaria", url: "college"},
            {id: 6, text: "Contacto", url: "contact"},
        ];

        setItems(menuItems);

        const handleClickOutside = event => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Verifica si isOpen es true para asegurarnos de que estamos cerrando un menú abierto
                if (isOpen) {
                    setIsOpen(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        // Recuperar el enlace activo almacenado
        const storedActiveLink = localStorage.getItem("activeLink");
        if (storedActiveLink) {
            setActiveLink(parseInt(storedActiveLink));
        }
    }, []);

    useEffect(() => {
        // Almacenar el enlace activo en el almacenamiento del navegador
        localStorage.setItem("activeLink", activeLink);
    }, [activeLink]);

    const handleLinkClick = id => {
        setActiveLink(id);
        setIsOpen(false); // Cerrar el menú al hacer clic en un enlace
    };
    const navbarHeight = window.innerHeight * 0.08;

    const dropShadowImg = {
        filter: "drop-shadow( .5px 1px 0px #FFF )",
    }

    return (
        <nav className="sticky top-0 shadow-sm shadow-unsij-black-950 z-50">
            {/* Barra de navegación en dispositivos grandes*/}
            <div className="h-[8vh] bg-unsij-green-950 flex items-center justify-between lg:justify-around">
                <Link
                    to="/"
                    className="flex flex-row gap-1 justify-center items-center"
                >
                    <img className="block w-14" src={logo} alt="Logo" style={dropShadowImg}/>
                </Link>

                <span className="mr-1 text-white text-4xl lg:hidden font-bold font-serif">UNSIJ</span>

                {/* Links */}

                <div className="hidden lg:flex lg:flex-row items-center gap-8 text-unsij-black-50 ">
                    {items.map(item => {
                        const isRelativeUrl = item.url.startsWith('/');
                        const LinkComponent = isRelativeUrl ? Link : ScrollLink;
                        const linkProps = isRelativeUrl
                            ? {to: item.url}
                            : {to: item.url, spy: true, smooth: true, duration: 1000, offset: -navbarHeight};

                        return (
                            <LinkComponent
                                key={item.id}
                                {...linkProps}
                                className={`cursor-pointer text-[16px] md:text-[18px] font-medium hover:text-unsij-green-800 
                                hover:saturate-200 hover:brightness-200${
                                    activeLink === item.id
                                        ? " text-unsij-green-800 saturate-200 brightness-200"
                                        : " text-unsij-black-50"
                                }`}
                                onClick={() => handleLinkClick(item.id)}
                            >
                                {item.text}
                            </LinkComponent>
                        );
                    })}

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
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                    >
                        {isOpen ? (
                            <IoMdClose className="block h-8 w-8"/>
                        ) : (
                            <IoMdMenu className="block h-8 w-8"/>
                        )}
                    </button>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`${
                    isOpen ? "block" : "hidden"
                } lg:hidden pt-4 border-t-teal-50 border-t-[1px] absolute top-22 inset-x-0 z-50 
                 bg-unsij-green-950 text-center h-screen transition-all ease-in duration-1000`}
            >
                <div className="">
                    {items.map(item => {
                        const isRelativeUrl = item.url.startsWith('/');
                        const LinkComponent = isRelativeUrl ? Link : ScrollLink;
                        const linkProps = isRelativeUrl
                            ? {to: item.url}
                            : {to: item.url, smooth: true, duration: 500, offset: -navbarHeight};

                        return (
                            <LinkComponent
                                key={item.id}
                                {...linkProps}
                                className="text-unsij-black-50 hover:text-unsij-teak-400 hover:saturate-200 hover:brightness-200
                      block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                onClick={() => handleLinkClick(item.id)}
                            >
                                {item.text}
                            </LinkComponent>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
