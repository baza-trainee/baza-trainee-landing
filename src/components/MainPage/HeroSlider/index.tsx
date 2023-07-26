'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';

import {
  ContainerMaxW1200,
  PrimaryButton,
  SlickArrow,
} from '@/components/atomic';

import { TSlide } from '@/types';
import { Modal } from '../Modal';
import { Dots } from './Dots';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slickRef = useRef<Slider | null>(null);

  const goToSlide = (slideIndex: number) => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(slideIndex);
    }
  };

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    nextArrow: (
      <SlickArrow
        direction="right"
        classProp={`right-[5%] xl:right-[15%] ${
          currentSlide === slides.length - 1 && 'hidden'
        }`}
      />
    ),
    prevArrow: (
      <SlickArrow
        direction="left"
        classProp={`left-[5%] xl:left-[15%] ${currentSlide === 0 && 'hidden'}`}
      />
    ),
  };

  return (
    <section className="relative text-white ">
      <Slider
        {...settings}
        afterChange={setCurrentSlide}
        lazyLoad="progressive"
        ref={slickRef}
      >
        {slides.map((slide: TSlide) => (
          <SingleSlide key={`key_${slide.title}`} slideData={slide} />
        ))}
      </Slider>

      <div className="bg-yellow-500">
        <ContainerMaxW1200 className="h-[8.8rem] items-center justify-between">
          <Dots currentSlide={currentSlide} goToSlide={goToSlide} />

          <Modal>
            <PrimaryButton>Фондувати</PrimaryButton>
          </Modal>
        </ContainerMaxW1200>
      </div>
    </section>
  );
};
