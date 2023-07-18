import { SupportBazaButton } from '@/components/atomic';
import { CloseMainIcon } from '@/components/common/icons';
import usePaymentHandler from '@/hooks/usePayment';
import { MouseEvent, MutableRefObject } from 'react';

import Link from 'next/link';

interface IModalContent {
  handlerShowModal: (_e: MouseEvent<HTMLDivElement>) => void;
  handleIconClick: () => void;
  bodyScrollLockRef: MutableRefObject<any>;
  dictionary: {
    modal: {
      title: string;
      description: string;
      sums: {
        100: string;
        200: string;
        500: string;
        1000: string;
        otherSum: string;
      };
      button: string;
    };
  };
}

const linkStyle =
  'flex w-[17.4rem] items-center justify-center rounded-[0.4rem] border-2 border-neutral-300 hover:bg-neutral-300 hover:text-white';

export const ModalContent = (props: IModalContent) => {
  const { handlerShowModal, handleIconClick, bodyScrollLockRef } = props;
  const { paymentAmount, handlePayment, handleAmountChange } =
    usePaymentHandler();

  return (
    <section
      className="duration-250  fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75 bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div
        className="relative w-[79.2rem] rounded-xl bg-white px-28 py-[12.8rem]"
        id="modalWindow"
      >
        <CloseMainIcon
          className="absolute right-10 top-10 cursor-pointer"
          onClick={handleIconClick}
        />

        <div className="px-[3.5rem] py-[2.4rem] text-center text-[2.4rem] text-neutral-800">
          <h2 className="mb-[2rem] font-semibold uppercase leading-tight">
            {props.dictionary.modal.title}
          </h2>

          <p className="mb-[4.4rem] text-[2rem] leading-tight">
            {props.dictionary.modal.description}
          </p>

          <div className="mb-[4.8rem] flex h-[19.2rem] w-[58.6rem] flex-wrap items-stretch justify-between gap-[3rem] font-medium uppercase">
            <Link className={linkStyle} href="#">
              {props.dictionary.modal.sums[100]}
            </Link>
            <Link className={linkStyle} href="#">
              {props.dictionary.modal.sums[200]}
            </Link>
            <Link className={linkStyle} href="#">
              {props.dictionary.modal.sums[500]}
            </Link>
            <Link className={linkStyle} href="#">
              {props.dictionary.modal.sums[1000]}
            </Link>
            <Link className={`${linkStyle} w-[38rem]`} href="#">
              {props.dictionary.modal.sums.otherSum}
            </Link>
          </div>

          <SupportBazaButton size="M">
            {props.dictionary.modal.button}
          </SupportBazaButton>
        </div>
      </div>
    </section>
  );
};
