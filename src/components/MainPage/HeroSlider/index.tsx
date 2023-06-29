'use client';

import { GlobalContext } from '@/store/globalContext';
import { useContext, useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import { RotaryArrow } from '@/components/common/icons';
import Slide from './slide';
import { getTranslatedSlides, slides } from './slides';
import styles from './styles.module.scss';

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

const HeroSlider = ({
  dict,
}: {
  dict: {
    toFund: string;
    heroSlider: {
      firstSlide: {
        title: string;
        description: string;
      };
      secondSlide: {
        title: string;
        description: string;
      };
      thirdSlide: {
        title: string;
        description: string;
      };
      fourthSlide: {
        title: string;
        description: string;
      };
      fifthSlide: {
        title: string;
        description: string;
      };
    };
  };
}) => {
  const { setIsLandingModalShown } = useContext(GlobalContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  const donateClickHandler = () => {
    setIsLandingModalShown((prevState) => !prevState);
  };

  const translatedSlides = getTranslatedSlides(slides, dict);

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
          {[...translatedSlides]?.map((slide: TSlide) => (
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
            {dict.toFund}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
