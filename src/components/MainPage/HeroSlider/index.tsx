'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slide from './slide';
import { slides } from './slides';
import styles from './styles.module.scss';

export type TSlide = {
  image: string;
  title: string;
  description: string;
};

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles['slider-section']}>
      <div
        className={styles['slider-section__carousel']}
        id="slider-section-carousel"
      >
        <Slider {...settings}>
          {slides.map((slide: TSlide) => (
            <Slide key={slide.title} slideData={slide} />
          ))}
        </Slider>
        <div className={styles['slider-section__buttons']}>
          <button className={styles['slider-section__btn-prev']}>
            <svg className={styles['slider-section__arrow-img']}>
              <use href="@img/sprite.svg#arrow-left"></use>
            </svg>
          </button>
          <button className={styles['slider-section__btn-next']}>
            <svg className={styles['slider-section__arrow-img']}>
              <use href="@img/sprite.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles['slider-section__actions']}>
        <div
          className={`container ${styles['slider-section__actions-container']}`}
        >
          <div className={styles['slider-section__dots']}></div>
          <button className={styles['slider-section__btn-donate']}>
            Фондувати
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
