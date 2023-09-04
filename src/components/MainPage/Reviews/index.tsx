'use client';

import { memo, useState } from 'react';
import Slider from 'react-slick';

import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200 } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';
import { TSlideReview } from '@/types';
import { Dot } from './Dot';
// import { SingleSlide } from './SingleSlide';
import dynamic from 'next/dynamic';
import { slides } from './slides';

const SingleSlide = dynamic(() =>
  import('./SingleSlide').then((mod) => mod.SingleSlide)
);

const SlickArrow = dynamic(() =>
  import('@/components/atomic').then((mod) => mod.SlickArrow)
);

export const Reviews = memo(function Reviews({
  lang,
}: {
  lang: TLandingLanguage;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    nextArrow: <SlickArrow direction="right" />,
    prevArrow: <SlickArrow direction="left" />,
  };
  const dict = dictionaries[lang];
  const { reviews } = dict || {};
  const { title } = reviews || {};
  const customPaging = (i: number) => Dot(i, currentSlide);

  return (
    <section>
      <ContainerMaxW1200>
        <div className="w-full">
          <h3 className="mb-12 text-center text-6xl font-bold">{title}</h3>
          <Slider
            {...sliderSettings}
            customPaging={customPaging}
            afterChange={setCurrentSlide}
            lazyLoad="progressive"
          >
            {slides.map((review: TSlideReview, index) => (
              <SingleSlide slideData={review} key={index + 'key'} lang={lang} />
            ))}
          </Slider>
        </div>
      </ContainerMaxW1200>
    </section>
  );
});
