import donut from '../assets/donut.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import '../styles/donut.css'
import { LuArrowUpDown } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import Data from '../../public/data.json'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import DonutSwiperBtn from './DonutSwiperBtn';
import { useContext, useState } from 'react';
import { ITEM_PROVIDER } from '../context/itemContext';
import Donut from './Donut';

const Donuts = () => {


    return (
        <div>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                // scrollbar={true}
                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                <div className=''>
                    <DonutSwiperBtn />
                </div>
                <SwiperSlide>
                    <div className="card-header flex justify-between items-center gap-[300px] lg:gap-[900px]">
                        <div className='flex items-center gap-1'>
                            <img src={donut} alt="" className='header-img' />
                            <h1 className='text-xl font-bold'>Donuts</h1>
                        </div>

                        <Link to='/all-donuts' className='flex items-center gap-2 hover:bg-gray-200 rounded-md p-1'>
                            <h3>All</h3>
                            <IoIosArrowForward />
                        </Link>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        {Data.map(({ id, name, image, price }) => (
                            <Donut key={id} name={name} image={image} price={price} id={id} />
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center gap-3 ml-[600px] mt-14'>
                        {Data.slice(1, 4).map(({ id, name, image, price }) => (
                            <Donut key={id} name={name} image={image} price={price} id={id} />
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center gap-3 ml-[600px] mt-14'>
                        {Data.slice(3, 6).map(({ id, name, image, price }) => (
                            <Donut key={id} name={name} image={image} price={price} id={id} />
                        ))}
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
                </SwiperSlide> */}
            </Swiper>

        </div>
    );
};

export default Donuts;