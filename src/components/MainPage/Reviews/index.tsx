'use client';

import { useState } from 'react';
import Slider from 'react-slick';

import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';
import { Dot } from './Dot';

import { ITestimonial } from '@/types';
import { SingleSlide_MVP } from './SingleSlide_MVP';
import { slides } from './slides';

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    nextArrow: <SlickArrow direction="right" />,
    prevArrow: <SlickArrow direction="left" />,
  };

  const customPaging = (i: number) => Dot(i, currentSlide);

  return (
    <section>
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">Відгуки</h3>
          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={setCurrentSlide}
            lazyLoad="progressive"
          >
            {slides.map((review: ITestimonial) => (
              <SingleSlide_MVP slideData={review} key={review._id} /> //fix
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
