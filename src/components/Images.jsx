import React from "react";
import PropTypes from "prop-types";

const Images = ({ data, onClick }) => {
  const handleClickImage = index => {
    onClick(index);
  };

  return (
      <div
      className="w-[99%] 2xl:w-[75%] mx-auto p-4 sm:px-6 lg:px-8
      columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4">
      {data.map((images, index) => (
        <div
          onClick={() => handleClickImage(index)}
          key={index}
          className="w-full cursor-pointer"
        >
          <img
            className="m-2 w-full h-full object-cover shadow-md shadow-gray-950
            border-8 border-gray-50 hover:border-8 hover:border-unsij-green-600 hover:rotate-1"
            src={images.src}
            alt={images.description}
          />
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
