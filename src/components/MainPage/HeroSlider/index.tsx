'use client';
import SliderArrow from '@/components/common/SliderArrow';

import { GlobalContext } from '@/store/globalContext';
import { StoreContextType } from '@/types/storeTypes';
import { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ReducerActionType } from '../../../store/globalReducer';
import Slide from './slide';
import { slides } from './slides';
import styles from './styles.module.scss';

export type TSlide = {
  image: string;
  title: string;
  description: string;
};

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{
            ...style,
            right: '350px',
            transform: 'scaleX(-1)',
          }}
          onClick={onClick}
      >
        <SliderArrow />
      </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;

  return (
      <div
          className={className}
          style={{ ...style, left: '350px', zIndex: 1 }}
          onClick={onClick}
      >
        <SliderArrow />
      </div>
  );
}


const HeroSlider = () => {
  const { state, dispatch } = useContext<StoreContextType>(GlobalContext);
  const donateClickHandler = () => {
    dispatch({
      type: ReducerActionType.TOGGLE_LANDING_MODAL,
    });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index: number) => (
        <div className={`${styles.custom_dots}`}>
          <div className={`${styles.custom_dot} ${index === currentSlide ? styles.active_dot : ''}`} />
        </div>
    ),
    nextArrow: (
        <SampleNextArrow
            className={styles['slider-section__arrow-img']}
            style={undefined}
            onClick={undefined}
        />
    ),
    prevArrow: (
        <SamplePrevArrow
            className={styles['slider-section__arrow-img']}
            style={undefined}
            onClick={undefined}
        />
    ),
  };
  return (
      <section className={styles['slider-section']}>
        <div
            className={styles['slider-section__carousel']}
            id="slider-section-carousel"
        >
          <Slider {...settings}  afterChange={(index) => setCurrentSlide(index)}>
            {slides.map((slide: TSlide) => (
                <Slide key={slide.title} slideData={slide}  />
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
        <style>
          {`
        .slick-next::before, .slick-prev::before {
          content: none;
        }
        .slick-disabled {
          opacity: 0;
        }
        .slick-active {

        }
      `}
        </style>
      </section>
  );
};

export default HeroSlider;
