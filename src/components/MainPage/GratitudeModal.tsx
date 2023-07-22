'use client';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useState } from 'react';
import { CloseMainIcon, GratitudeIcon } from '../common/icons';

export const GratitudeModal = () => {
  const [isGratitudeModalShown, setIsGratitudeModalShown] =
    useState<boolean>(true);
  const bodyScrollLockRef = useBodyScrollLock(isGratitudeModalShown);

  const handlerShowModal = (
    e: React.MouseEvent<HTMLElement | SVGSVGElement>
  ) => {
    if (e.target === e.currentTarget) {
      setIsGratitudeModalShown((prevState) => !prevState);
    }
  };

  const svgClickHandler: React.MouseEventHandler<SVGSVGElement> =
    handlerShowModal;

  return isGratitudeModalShown ? (
    <section
      className="duration-250  fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75 bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div className="relative  w-[79.2rem] rounded-xl bg-white px-[6.85rem] py-[12.8rem]">
        <CloseMainIcon
          className="absolute right-10 top-10 cursor-pointer"
          onClick={svgClickHandler}
        />
        <div className="flex flex-col items-center justify-center gap-[4.8rem] px-[3.5rem] py-[2.4rem] uppercase text-neutral-800">
          <h2 className="text-[3.2rem] font-bold ">Дякуємо!</h2>
          <p className=" w-[51rem] text-center text-[2.4rem] font-semibold">
            Ваша допомога дуже важлива для Baza Trainee Ukraine
          </p>
          <GratitudeIcon />
        </div>
      </div>
    </section>
  ) : null;
};
