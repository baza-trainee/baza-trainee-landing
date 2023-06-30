'use client';

import { useState } from 'react';
import Slider from 'react-slick';

import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';
import { slides } from './slides';
import styles from './styles.module.scss';
import { TSlide } from '@/types';
import { Dot } from './Dot';
import Image from 'next/image';
import { SingleSlide } from './SingleSlide';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    customPaging: (i: number) => Dot(i, currentSlide),
    nextArrow: <SlickArrow direction="right" color="#101010" />,
    prevArrow: <SlickArrow direction="left" color="#101010" />,
  };

  const reviewSlides = slides.map((review: TSlide, index) => (
    <div className={`${styles.slider} ${styles.slider_item}`} key={index}>
      <div className={styles.slider_item_container}>
        <Image
          src={review.image}
          alt={'customer'}
          width={64}
          height={64}
          unoptimized
        />
        <div className={styles.user_info}>
          <h4 className={styles.user_name}>{review.title}</h4>
          <p className={styles.user_specialization}>{review.specialization}</p>
        </div>
        <div>
          <p className={styles.user_text}>{review.text}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="container">
        <div className={styles.slider_container}>
          <h3>Відгуки</h3>
          <Slider
            {...sliderSettings}
            afterChange={(index) => setCurrentSlide(index)}
            lazyLoad="ondemand"
          >
            {reviewSlides}
          </Slider>
        </div>
      </section>
      {/* ////////////////////////////////////////////// */}
      <section className="my-48">
        <ContainerMaxW1200>

        <div className="w-full">
          <h3 className='mb-12 font-bold text-6xl text-center'>Відгуки</h3>
          <Slider
            {...sliderSettings}
            afterChange={(index) => setCurrentSlide(index)}
            lazyLoad="ondemand"
            >
            {slides.map((review: TSlide, index) => (
              <SingleSlide slideData={review} key={index+"key"} />
              ))}
          </Slider>
        </div>
              </ContainerMaxW1200>
      </section>
    </>
  );
};

export default Reviews;
