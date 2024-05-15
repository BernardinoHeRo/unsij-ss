import React from 'react';
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoDash } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/swiper-bundle.css';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

const Plan = ({ data }) => {
    return (
        <div className='w-screen flex flex-col justify-center items-center bg-gray-300 pb-4'>
            <h2 className='text-lg md:text-2xl mt-6 font-semibold'>{data.title}</h2>
            <div className="w-full m-auto grid gap-2">
                <Swiper
                    modules={[FreeMode, Pagination, Autoplay, Navigation]}
                    breakpoints={{
                        480: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 15 },
                        1280: { slidesPerView: 3, spaceBetween: 15 },
                        1440: { slidesPerView: 4, spaceBetween: 15 },
                    }}
                    navigation={true}
                    watchSlidesProgress={true}
                    autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                    className="max-w-[100%]">
                    {Object.entries(data).map(([key, value]) => {
                        if (key === 'title' || key === 'introduction') return null;
                        return (
                            <SwiperSlide key={key}>
                                <div className='mb-4 bg-slate-300'>
                                    <ul className='bg-gray-500'>
                                        <h2 className='text-lg md:text-2xl mt-6 font-semibold'>{value.title}</h2>
                                        {value.content.map((course, index) => (
                                            <li key={index} className='mt-2 '>
                                                <p className='flex flex-row items-center text-base md:text-xl'>
                                                    <strong className='mr-2'><GoDash /></strong>{course}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

Plan.propTypes = {
    data: PropTypes.object.isRequired
};

export default Plan;
