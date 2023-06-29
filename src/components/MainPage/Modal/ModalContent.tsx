import { MouseEvent, MutableRefObject } from 'react';

import Link from 'next/link';

import { CloseMainIcon } from '@/components/common/icons';
import { SupportBazaButton } from '@/components/atomic';

interface IModalContent {
  handlerShowModal: (e: MouseEvent<HTMLDivElement>) => void;
  handleIconClick: () => void;
  bodyScrollLockRef: MutableRefObject<any>;
}

const linkStyle =
  'flex w-[17.4rem] items-center justify-center rounded-[0.4rem] border-2 border-neutral-300';

export const ModalContent = (props: IModalContent) => {
  const { handlerShowModal, handleIconClick, bodyScrollLockRef } = props;

  return (
    <section
      className={`duration-250 fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75`}
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div
        className="relative w-[79.2rem] rounded-xl bg-white px-28 py-40"
        id="modalWindow"
      >
        <CloseMainIcon
          className="absolute right-10 top-10 cursor-pointer"
          onClick={handleIconClick}
        />

        <div className="px-[3.5rem] py-[2.4rem] text-center text-[2.4rem] text-neutral-800">
          <h2 className="mb-[2rem] font-semibold uppercase leading-tight">
            Оберіть суму, якою хочете підтримати Baza Trainee Ukraine
          </h2>

          <p className="mb-[4.4rem] text-[2rem] leading-tight">
            Сума списується одноразово, якщо бажаєте оформити підписку, потрібно
            ...
          </p>

          <div className="mb-[4.8rem] flex h-[19.2rem] w-[58.6rem] flex-wrap items-stretch justify-between gap-[3rem] font-medium uppercase">
            <Link className={linkStyle} href="#">
              100 грн
            </Link>
            <Link className={linkStyle} href="#">
              200 грн
            </Link>
            <Link className={linkStyle} href="#">
              500 грн
            </Link>
            <Link className={linkStyle} href="#">
              1000 грн
            </Link>
            <Link className={`${linkStyle} w-[38rem]`} href="#">
              інша сумма UAH
            </Link>
          </div>

          <SupportBazaButton size="M">Підтримати</SupportBazaButton>
        </div>
      </div>
    </section>
  );
};
