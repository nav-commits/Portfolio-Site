import React from 'react';
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine';
import '../ServicesSection/ServicesSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselData } from '../../../Utils/CarouselData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles.css';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function ServicesSection() {
    return (
        <div id='Services' className='services-section-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='services-content-container'>
                    <p className='services-title'>Services </p>
                    <ActiveLine width={'110px'} marginTop={'2px'} />
                </div>
            </div>
            <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]} className='mySwiper'>
                {carouselData.map((item, id) => (
                    <SwiperSlide key={id}>
                        <h2 className='carousel-title' style={{ textAlign: 'center', padding: '20px' }}>{item.title}</h2>
                        <div
                            className='carousel-content-container'
                        >
                            {item.description}
                            {item.image}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
