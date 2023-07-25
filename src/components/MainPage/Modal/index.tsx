'use client';

import { MouseEvent, ReactElement, cloneElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent';

export const Modal = ({ children }: { children: ReactElement }) => {
  const [isLandingModalShown, setIsLandingModalShown] = useState(false);

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
          />,
          document.body
        )}
    </>
  );
};
