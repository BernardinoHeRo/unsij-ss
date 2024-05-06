import React from "react";
import LazyLoad from 'react-lazyload'
import PropTypes from "prop-types";

const Images = ({data, onClick}) => {
    const handleClickImage = index => {
        onClick(index);
    };

    return (
        <div className="md:p-2 gap-0 md:gap-2 lg:gap-4 columns-3 md:columns-3 lg:columns-4 3xl:columns-5">
            {data.map((images, index) => (
                <div
                    onClick={() => handleClickImage(index)}
                    key={index}
                    className="w-full cursor-pointer"
                >
                    <LazyLoad height={200}>
                        <img
                            className="md:mb-2 lg:mb-4 w-full h-full object-cover shadow-sm shadow-gray-950
            border-4 border-gray-50 hover:border-4 hover:border-unsij-green-600 hover:rotate-1"
                            src={images.src}
                            alt={images.description}
                        />
                    </LazyLoad>
                </div>
            ))}
        </div>
    );
};

Images.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
};

export default Images;
