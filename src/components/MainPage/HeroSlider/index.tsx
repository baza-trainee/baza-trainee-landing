'use client';

import { GlobalContext } from '@/store/globalContext';
import { useContext, useState } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import { PrimaryButton, SlickArrow } from '@/components/atomic';
import Slide from './slide';
import { slides } from './slides';
import styles from './styles.module.scss';

export type TSlide = {
  image: string;
  title: string;
  description: string;
};

const HeroSlider = () => {
  const { setIsLandingModalShown } = useContext(GlobalContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const donateClickHandler = () => {
    setIsLandingModalShown((prevState) => !prevState);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index: number) => (
      <div className={`${styles.custom_dots}`}>
        <div
          className={`${styles.custom_dot} ${
            index === currentSlide ? styles.active_dot : ''
          }`}
        />
      </div>
    ),
    nextArrow: <SlickArrow direction="right" />,
    prevArrow: <SlickArrow direction="left" />,
  };
  return (
    <section className="relative">
      <div
        className={styles['slider-section__carousel']}
        id="slider-section-carousel"
      >
        <Slider {...settings} afterChange={setCurrentSlide}>
          {slides.map((slide: TSlide) => (
            <Slide key={slide.title} slideData={slide} />
          ))}
        </Slider>
      </div>
      <div className={styles['slider-section__actions']}>
        <div
          className={`container ${styles['slider-section__actions-container']}`}
        >
          <div className={styles['slider-section__dots']}></div>
          
          <PrimaryButton onClick={donateClickHandler}>Фондувати</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
