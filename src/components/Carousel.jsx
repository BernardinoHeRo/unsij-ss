import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import img1 from '../assets/carousel/img1.jpg';
import img2 from '../assets/carousel/img2.jpg';
import img3 from '../assets/carousel/img3.jpg';
import img4 from '../assets/carousel/img4.jpg';
import img5 from '../assets/carousel/img5.jpg';
import img6 from '../assets/carousel/img6.jpg';
import img7 from '../assets/carousel/img7.jpg';
import img8 from '../assets/carousel/img8.jpg';
import img9 from '../assets/carousel/img9.jpg';
import img10 from '../assets/carousel/img10.jpg';
import img11 from '../assets/carousel/img11.jpg';
import {GoDotFill} from "react-icons/go";

const Carousel = () => {
    const items = [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
        { image: img7 },
        { image: img8 },
        { image: img9 },
        { image: img10 },
        { image: img11 },

    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (itemIndex) => {
        setCurrentIndex(itemIndex);
    };

    return (
        <div className='min-h-[85vh] bg-unsij-bean-50 flex items-center justify-center'>
            <div className='relative w-full max-w-screen-lg'>
                <div
                    className='h-[400px] md:h-[600px] lg:h-[650px] xl:h-[550px] 2xl:h-[800px] bg-center bg-cover transition-all duration-500'
                    style={{
                        backgroundImage: `url(${items[currentIndex].image})`,
                    }}
                ></div>
                {/* Left arrow */}
                <div
                    className='absolute top-[50%] left-5 -translate-y-1/2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 rounded-full p-2'
                    onClick={prevSlide}
                >
                    <BsChevronCompactLeft size={40} />
                </div>
                {/* Right arrow */}
                <div
                    className='absolute top-[50%] right-5 -translate-y-1/2 text-white text-2xl cursor-pointer bg-black bg-opacity-50 rounded-full p-2'
                    onClick={nextSlide}
                >
                    <BsChevronCompactRight size={40} />
                </div>
                {/* Indicadores */}
                <div className='flex justify-center mt-4'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`mx-1 cursor-pointer ${
                                index === currentIndex ? 'text-blue-500' : 'text-gray-500'
                            }`}
                        >
                            <GoDotFill size={30} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
