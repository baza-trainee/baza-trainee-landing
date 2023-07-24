'use client';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PDFView } from '../common/PdfView';
import { CloseMainIcon } from '../common/icons';

export const ModalParams = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isPaymentSuccess = params.get('payment') === 'success';
  const document = params.get('document');

  const bodyScrollLockRef = useBodyScrollLock(true);

  const handlerShowModal = (
    e: React.MouseEvent<HTMLElement | SVGSVGElement>
  ) => {
    if (e.target === e.currentTarget) {
      router.push(pathname);
    }
  };

  return (
    <section
      className="duration-250  fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75 bg-opacity-30  backdrop-blur-2xl backdrop-filter"
      onClick={handlerShowModal}
      ref={bodyScrollLockRef}
    >
      <div className="scrollbar relative max-h-[80%] max-w-[80%] overflow-auto rounded-xl bg-white p-12 px-[6.85rem] py-[12.8rem]">
        <CloseMainIcon
          className="absolute right-10 top-10 cursor-pointer "
          onClick={handlerShowModal}
        />
        <PDFView />
      </div>
    </section>
  );
};
