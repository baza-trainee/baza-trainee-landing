'use client';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import {
  MouseEvent,
  ReactElement,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@/components/common/icons';
import { TLandingLanguage } from '@/store/globalContext';
//import { ContentDonate } from './ContentDonate';
import dynamic from 'next/dynamic';

const ContentDonate = dynamic(() =>
  import('./ContentDonate').then((res) => res.ContentDonate)
);

type Props = {
  children: ReactElement;
  content: 'donate' | ReactElement;
  open?: boolean;
  lang: TLandingLanguage;
};

export const Modal = ({ children, content, lang, open = false }: Props) => {
  const [isLandingModalShown, setIsLandingModalShown] = useState(open);
  const bodyScrollLockRef = useBodyScrollLock(isLandingModalShown);

  const handlerShowModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsLandingModalShown((prevState) => !prevState);
    }
  };

  const handleIconClick = () => {
    setIsLandingModalShown((prevState) => !prevState);
  };

  const ModalLayout = () => (
    <section
      className="flex-center fixed left-0 top-0 z-50 h-full w-full min-w-[38.4rem] bg-neutral-75 bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div className="relative z-30 m-8 min-h-[39rem] w-[38.4rem] cursor-default rounded-xl bg-white sm:w-[65.6rem] xl:w-[79.2rem]">
        <button
          className="absolute right-[1.6rem] top-[1.6rem] sm:right-[2.8rem] sm:top-[2.8rem]"
          onClick={handleIconClick}
        >
          <CloseIcon className="sm:hidden" size="M" />
          <CloseIcon className="hidden sm:block" />
        </button>

        {content === 'donate' && <ContentDonate lang={lang} />}
        {isValidElement(content) && content}
      </div>
    </section>
  );

  return (
    <>
      {children &&
        cloneElement(children, {
          onClick: handlerShowModal,
        })}
      {isLandingModalShown && createPortal(<ModalLayout />, document.body)}{' '}
      {/*{isLandingModalShown &&<ModalLayout />}*/}
    </>
  );
};
