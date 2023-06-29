'use client';

import { GlobalContext } from '@/store/globalContext';
import { useContext, useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import Slide from './slide';
import { slides } from './slides';
import styles from './styles.module.scss';
import { RotaryArrow } from '@/components/common/icons';

export type TSlide = {
  image: string;
  title: string;
  description: string;
};

const NextArrow = (props: CustomArrowProps) =>
  props.onClick && (
    <RotaryArrow
      direction="right"
      className="absolute right-[10%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      onClick={props.onClick}
    />
  );

const PrevArrow = (props: CustomArrowProps) =>
  props.onClick && (
    <RotaryArrow
      direction="left"
      className="absolute left-[10%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      onClick={props.onClick}
    />
  );

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className={styles['slider-section']}>
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
          <button
            className={styles['slider-section__btn-donate']}
            onClick={donateClickHandler}
          >
            Фондувати
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
