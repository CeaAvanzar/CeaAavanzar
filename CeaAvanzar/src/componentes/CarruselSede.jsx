import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../componentes/CarruselSede.css';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const CarruselSede = () => {
    return (
        <Swiper
            navigation={true}
            // effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={false}
            pagination={{
                clickable: true
            }}
            className="mySwiper2"
        >
            <SwiperSlide className='swiper-slide2'>
                <img src='https://i.postimg.cc/j2QMtnHn/nuestra-sede2.jpg' className='imagenesCarrusel'></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide2'>
                <img src='https://i.postimg.cc/3NBFP5hg/nuestra-sede5.jpg' className='imagenesCarrusel'></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide2'>
                <img src='https://i.postimg.cc/nr0q34K2/nuestra-sede1.jpg' className='imagenesCarrusel'></img>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide2'>
                <img src='https://i.postimg.cc/XYyy5SPQ/nuestra-sede4.jpg' className='imagenesCarrusel'></img>
            </SwiperSlide>
        </Swiper>
    );
};

export default CarruselSede;