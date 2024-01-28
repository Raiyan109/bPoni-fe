import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSwiper } from 'swiper/react';
import '../styles/donutBtn.css'

const DonutSwiperBtn = () => {
    const swiper = useSwiper();
    return (
        <div className='donutButtonContainer'>
            <button className='donutBtn1 shadow-lg text-xl' onClick={() => swiper.slidePrev()}>
                <IoIosArrowBack />
            </button>
            <button className='donutBtn2 shadow-lg text-xl' onClick={() => swiper.slideNext()}>
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default DonutSwiperBtn;