'use client';

import { MouseEvent, ReactElement, cloneElement, useState } from 'react';

import { createPortal } from 'react-dom';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

import { ModalContent } from './ModalContent';

export const Modal = ({ children }: { children: ReactElement }) => {
  const [isLandingModalShown, setIsLandingModalShown] = useState(false);
  const bodyScrollLockRef = useBodyScrollLock(isLandingModalShown);

  const handlerShowModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsLandingModalShown((prevState) => !prevState);
    }
  };

  const handleIconClick = () => {
    setIsLandingModalShown((prevState) => !prevState);
  };

  return (
    <>
      {children &&
        cloneElement(children, {
          onClick: handlerShowModal,
        })}

      {isLandingModalShown &&
        createPortal(
          <ModalContent
            handlerShowModal={handlerShowModal}
            handleIconClick={handleIconClick}
            bodyScrollLockRef={bodyScrollLockRef}
          />,
          document.body
        )}
    </>
  );
};
