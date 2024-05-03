import React from "react";
import {IoIosArrowDown} from "react-icons/io";
import {Link as ScrollLink} from "react-scroll";

export const Divider = ({text, url, navbarHeight}) => {
    return (
        <div className="bg-unsij-daintree-950 min-h-[7vh] flex flex-row items-center justify-center cursor-pointer">
            <ScrollLink
                to={url}
                smooth={true}
                duration={500}
                offset={-navbarHeight}
                className="animate-bounce text-xl md:text-3xl font-bold text-unsij-black-50 hover:text-orange-600 flex flex-row items-center justify-center
                [text-shadow:_0_5px_0_rgb(0_0_0_/_100%)]">
                <span>{text}</span>
                <IoIosArrowDown className="font-bold text-3xl"/>
            </ScrollLink>
        </div>
    );
};
export default Divider;
