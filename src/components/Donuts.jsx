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

                        <Link to='/' className='flex items-center gap-2 hover:bg-gray-200 rounded-md p-1'>
                            <h3>All</h3>
                            <IoIosArrowForward />
                        </Link>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        {Data.map(({ id, name, image, price }) => (
                            <div key={id} className='bg-white rounded-2xl py-5 px-2 space-y-3 h-72 w-44 flex flex-col items-center'>
                                <img src={image} className='w-20 h-20 object-contain' />
                                <div className=''>
                                    <h1 className='text-xl text-left'>{price}</h1>
                                    <h2 className='mb-3'>{name}</h2>
                                    <LuArrowUpDown className='text-gray-300 mb-3' />
                                    <button className='flex justify-center items-center py-3 px-16 bg-primary rounded-xl'>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Donuts;