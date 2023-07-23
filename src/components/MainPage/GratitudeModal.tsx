'use client';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CloseIcon, GratitudeIcon } from '../common/icons';

export const GratitudeModal = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isPaymentSuccess = params.get('payment') === 'success';

  const bodyScrollLockRef = useBodyScrollLock(isPaymentSuccess);

  const handlerShowModal = (
    e: React.MouseEvent<HTMLElement | SVGSVGElement>
  ) => {
    if (e.target === e.currentTarget) {
      router.push(pathname);
    }
  };

  return !isPaymentSuccess ? (
    <section
      className="duration-250  fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75 bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div className="relative  w-[79.2rem] rounded-xl bg-white px-[6.85rem] py-[12.8rem]">
        <button className="absolute right-10 top-10" onClick={handlerShowModal}>
          <CloseIcon />
        </button>

        <div className="flex flex-col items-center justify-center gap-[4.8rem] px-[3.5rem] py-[2.4rem] uppercase text-neutral-800">
          <h2 className="text-[3.2rem] font-bold ">Дякуємо!</h2>
          <p className="text-center text-[2.4rem] font-semibold">
            Ваша допомога дуже важлива для
            <span className="whitespace-nowrap"> Baza Trainee Ukraine</span>
          </p>
          <GratitudeIcon />
        </div>
      </div>
    </section>
  ) : null;
};
