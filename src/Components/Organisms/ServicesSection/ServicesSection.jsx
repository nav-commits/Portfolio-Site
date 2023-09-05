import React from 'react';
import ActiveLine from '../../Atoms/ActiveLine/ActiveLine';
import '../ServicesSection/ServicesSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carouselData } from '../../../Utils/CarouselData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function ServicesSection() {
    return (
        <div id='Services' className='services-section-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='services-content-container'>
                    <p className='services-title'>Services </p>
                    <ActiveLine width={'110px'} marginTop={'2px'} />
                </div>
            </div>
            <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
                {carouselData.map((item, id) => (
                    <SwiperSlide key={id}>
                        <h2 style={{ textAlign: 'center', padding: '20px' }}>{item.title}</h2>
                        <div
                            className='carousel-content-container'
                        >
                            {item.description}
                            <img
                                style={{ height: '50px', width: '50px' }}
                                src={item.image}
                                alt=''
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
