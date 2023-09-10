'use client';

import { ContainerMaxW1200, PrimaryButton } from '@/components/atomic';
import { MultiArrow } from '@/components/common/icons';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { TSlide } from '@/types';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Dots } from './Dots';
import { SingleSlide } from './SingleSlide';
import { slides } from './slides';

const settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 10000,
  arrows: false,
};
/*
const ModalComponent = ({ lang }: { lang: TLandingLanguage }) => {
  const dict = dictionaries[lang];
  const { toFund } = dict || {};
  return (
    <Modal content="donate" lang={lang}>
      <PrimaryButton>{toFund}</PrimaryButton>
    </Modal>
  );
};
const MemoizedModal = memo(ModalComponent);
*/
export const HeroSlider = ({ lang }: { lang: TLandingLanguage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slickRef = useRef<Slider | null>(null);

  const { toFund } = dictionaries[lang] || {};

  const goToSlide = (slideIndex: number) => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(slideIndex);
      console.log(slickRef.current);
    }
  };

  const arrowHandler = (direction: 'next' | 'prev') => {
    if (slickRef.current) {
      direction === 'next'
        ? slickRef.current.slickNext()
        : slickRef.current.slickPrev();
    }
  };

  return (
    <section className="relative text-white">
      <div className="relative">
        <Slider
          {...settings}
          afterChange={setCurrentSlide}
          lazyLoad="progressive"
          ref={slickRef}
          className="h-[50.4rem]"
        >
          {slides.map((slide: TSlide, index) => (
            <SingleSlide
              key={`key_${slide.title[lang]}`}
              slideData={slide}
              index={index}
              slideLang={lang}
            />
          ))}
        </Slider>

        <div className="absolute bottom-[2.7rem] w-full md:bottom-[8.4rem] xl:bottom-0 xl:h-full">
          <ContainerMaxW1200 className="w-[19.4rem] items-center md:w-full xl:h-full">
            <button
              onClick={() => arrowHandler('prev')}
              aria-label="Previous slide"
              className={`mr-auto ${currentSlide === 0 ? 'hidden' : ''}`}
            >
              <MultiArrow direction="left" bigSize />
            </button>
            <button
              onClick={() => arrowHandler('next')}
              aria-label="Next slide"
              className={`ml-auto ${
                currentSlide === slides.length - 1 ? 'hidden' : ''
              }`}
            >
              <MultiArrow direction="right" bigSize />
            </button>
          </ContainerMaxW1200>
        </div>
      </div>

      <div className="bg-yellow-500">
        <ContainerMaxW1200 className="min-h-[8.8rem] flex-col gap-[2.4rem] py-[1.6rem] sm:flex-row sm:items-center sm:justify-between sm:py-0">
          <Dots currentSlide={currentSlide} goToSlide={goToSlide} />
          <Link href={'?modal=fund'} scroll={false}>
            <PrimaryButton>{toFund}</PrimaryButton>
          </Link>
          {/*<MemoizedModal lang={lang} />*/}
        </ContainerMaxW1200>
      </div>
    </section>
  );
};
