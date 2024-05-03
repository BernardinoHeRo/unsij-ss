import React, {useEffect, useRef, useState} from "react";
import logo from "../../assets/unsij/logo/unsij.png";
import {Link} from "react-router-dom";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {Link as ScrollLink} from "react-scroll";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [activeLink, setActiveLink] = useState(null);

    const menuRef = useRef();

    useEffect(() => {
        const menuItems = [
            {id: 1, text: "Inicio", url: "index"},
            {id: 2, text: "Admisión", url: "admission"},
            {id: 3, text: "Oferta educativa", url: "offer"},
            {id: 4, text: "Becas", url: "ships"},
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
    return (
        <nav className="sticky top-0 z-50 shadow shadow-unsij-black-50">
            <div className="h-[8vh] bg-unsij-green-950 flex items-center justify-between lg:justify-around px-4">
                <Link
                    to="/"
                    className="flex flex-row gap-1 justify-center items-center"
                >
                    <img className="block w-16" src={logo} alt="Logo"/>
                    <span
                        className="mr-4 text-white text-xs md:text-2xl lg:text-xl 2xl:text-2xl font-medium hidden lg:inline">
            Universidad de la Sierra Juárez
          </span>
                </Link>

                <span className="mr-1 text-white text-4xl lg:hidden font-medium">
          UNSIJ
        </span>

                {/* Links */}
                <div className="hidden lg:block">
                    <div className="ml-10 flex items-center space-x-4 text-unsij-black-50 ">
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
                                    className={`cursor-pointer text-sm sm:text-base md:text-lg lg:text-base 2xl:text-lg font-medium px-3 py-2
                                         hover:text-unsij-teak-500 hover:saturate-200 hover:brightness-200${
                                        activeLink === item.id
                                            ? "text-unsij-teak-500 saturate-200 brightness-200"
                                            : "text-unsij-black-50 hover:text-unsij-teak-500 hover:saturate-200 hover:brightness-200"
                                    }`}
                                    onClick={() => handleLinkClick(item.id)}
                                >
                                    {item.text}
                                </LinkComponent>
                            );
                        })}
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
                <div className="px-2 pt-2 pb-3 sm:px-3">
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
