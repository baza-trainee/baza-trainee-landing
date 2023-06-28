import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slides } from './slides';
import SliderArrow from '@/components/common/SliderArrow/SliderArrow';
import styles from './styles.module.scss';

type Review = {
  name: string;
  specialization: string;
  text: string;
  image: string;
};

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div className={className} style={{ ...style, position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%) scaleX(-1)' }} onClick={onClick}>
          <SliderArrow />
        </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div className={className} style={{ ...style, position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: 1 }} onClick={onClick}>
          <SliderArrow  />
        </div>
    );
  };

  const sliderSettings = {
    dots: true,
    adaptiveHeight: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    customPaging: (index: number) => (
        <div className={`${styles.custom_dots}`}>
          <div className={`${styles.custom_dot} ${index === currentSlide ? styles.active_dot : ''}`} />
        </div>
    ),
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const reviewSlides = slides.map((review:Review, index) => (
      <div className={`${styles.slider} ${styles.slider_item}`} key={index}>
        <div className={styles.slider_item_container}>
          <img src={`/img/${review.image}`} alt="user photo" />
          <div className={styles.user_info}>
            <h4 className={styles.user_name}>{review.name}</h4>
            <p className={styles.user_specialization}>{review.specialization}</p>
          </div>
          <div>
            <p className={styles.user_text}>{review.text}</p>
          </div>
        </div>
      </div>
  ));

  return (
      <section className="container">
        <div className={styles.slider_container}>
          <h3>Відгуки</h3>
          <Slider {...sliderSettings} afterChange={(index) => setCurrentSlide(index)}>
            {reviewSlides}
          </Slider>
        </div>
      </section>
  );
};

export default Reviews;