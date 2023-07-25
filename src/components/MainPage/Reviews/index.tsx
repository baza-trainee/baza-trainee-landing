'use client';

import { useState } from 'react';
import Slider from 'react-slick';

import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';
import { TSlideReview } from '@/types';
import { Dot } from './Dot';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

const sliderSettings = {
  dots: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  nextArrow: <SlickArrow direction="right" className="right-0" />,
  prevArrow: <SlickArrow direction="left" className="left-0 " />,
};

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customPaging = (i: number) => Dot(i, currentSlide);

  return (
    <section>
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">Відгуки</h3>

          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={(index) => setCurrentSlide(index)}
            lazyLoad="progressive"
          >
            {slides.map((review: TSlideReview, index) => (
              <SingleSlide slideData={review} key={index + 'key'} />
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
