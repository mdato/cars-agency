import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Bodie's Car Agency</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Choose one of the following vehicles to travel around</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Card
              image='https://th.bing.com/th/id/R.d1724e52298e4e8b348302c1400092d4?rik=5BBcbnDXxsOP7A&pid=ImgRaw&r=0'
              make='Coupe Taunus'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://th.bing.com/th/id/R.331b84e3b97024346fdd3263ec06704f?rik=kiYc2czWlYXjNw&pid=ImgRaw&r=0'
              make='Coupe Chevrolet 1946'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://th.bing.com/th/id/R.800e62b11f8797d443da55bb8ae9fc0d?rik=rb7mVx%2bhEjejFA&pid=ImgRaw&r=0'
              make='Citroneta'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://th.bing.com/th/id/R.f9ddbf138af6aaf2de9d53bef463ebe4?rik=0kk2OUed2mIUaA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-__TnJGbRqzM%2fUZj6Ml8_CeI%2fAAAAAAAAKB8%2fBWg4eRY-L5c%2fs1600%2frenault%2bfuego%2broja%2blat.jpg&ehk=NT05jRERWM1J25zG5gNUfmgt7yH5Jc5Rvjc%2flYB5mxY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
              make='Coupe Fuego'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://th.bing.com/th/id/R.5f9cf4900e7a14700c586dae0d33365e?rik=XGyEM28KfBQ71g&pid=ImgRaw&r=0'
              make='Fairlane 1966'
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card
              image='https://th.bing.com/th/id/OIP.su7xpagoiAJg--yIohxSswHaFj?pid=ImgDet&rs=1'
              make='BMW 327'
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
