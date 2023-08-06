'use client';

import { useState } from 'react';
import Slider from 'react-slick';

import { ContainerMaxW1200, SlickArrow } from '@/components/atomic';
import { TDictionary, TSlideReview } from '@/types';
import { Dot } from './Dot';
import { SingleSlide } from './SingleSlide';
import { getTranslateReviews, slides } from './slides';

export const Reviews = ({ dict }: { dict: TDictionary }) => {
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

  const translateReviews = getTranslateReviews(slides, dict);

  return (
    <section>
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">
            {dict.reviews.title}
          </h3>
          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={setCurrentSlide}
            lazyLoad="progressive"
          >
            {translateReviews.map((review: TSlideReview, index) => (
              <SingleSlide slideData={review} key={index + 'key'} />
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
};
