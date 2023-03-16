import React from 'react'
// Import Swiper package
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                    <SwiperSlide>
                        <img src='http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg' alt=''/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' alt=''/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg' alt=''/>
                    </SwiperSlide>


                </Swiper>
        </>
    )
}
