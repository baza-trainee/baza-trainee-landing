'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import { SlickArrow } from '@/components/atomic';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';
import { TSlide } from '@/types';

const Dot = (index: number, currentSlide: number) => (
  <div
    className={`${
      index === currentSlide && 'bg-neutral-800'
    } relative  h-[2rem] w-[2rem] rounded-full border border-neutral-800`}
  />
);

export const SliderInstance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i: number) => Dot(i, currentSlide),
    nextArrow: <SlickArrow direction="right" />,
    prevArrow: <SlickArrow direction="left" />,
  };

  return (
    <Slider {...settings} afterChange={setCurrentSlide}>
      {slides.map((slide: TSlide) => (
        <SingleSlide key={slide.title} slideData={slide} />
      ))}
    </Slider>
  );
};
