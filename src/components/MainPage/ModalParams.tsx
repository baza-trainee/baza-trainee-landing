'use client';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CloseMainIcon } from '../common/icons';
import { Gratitude } from './Gratitude';
import { PDFView } from './PdfView';
import { createPortal } from 'react-dom';

export const ModalParams = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isPaymentSuccess = params.get('payment') === 'success';
  const doc = params.get('document');

  const bodyScrollLockRef = useBodyScrollLock(!!doc || isPaymentSuccess);

  const handlerShowModal = (
    e: React.MouseEvent<HTMLElement | SVGSVGElement>
  ) => {
    if (e.target === e.currentTarget) {
      router.push(pathname);
    }
  };

  const Modal = () => (
    <section
      className="flex-center fixed left-0 top-0 z-20 h-screen w-screen bg-neutral-75 bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div className="relative z-30 max-h-[80%] max-w-[80%] overflow-y-scroll rounded-xl bg-white px-[6.85rem] py-[12.8rem]">
        <button className="absolute right-10 top-10" onClick={handlerShowModal}>
          <CloseMainIcon />
        </button>

        {isPaymentSuccess ? <Gratitude /> : <PDFView document={doc} />}
      </div>
    </section>
  );

  return isPaymentSuccess || doc
    ? createPortal(<Modal />, document.body)
    : null;
};
