'use client';

import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CloseIcon } from '../common/icons';
import { Gratitude } from './Gratitude';
import { PDFView } from './PdfView';

export const ModalParams = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isPaymentSuccess = params.get('payment') === 'success';
  const document = params.get('document');

  const bodyScrollLockRef = useBodyScrollLock(isPaymentSuccess || !!document);

  const handlerShowModal = (
    e: React.MouseEvent<HTMLElement | SVGSVGElement>
  ) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      router.push(pathname, { scroll: false });
    }
  };

  return isPaymentSuccess || document ? (
    <section
      onClick={handlerShowModal}
      className="duration-250  fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-75  bg-opacity-30 backdrop-blur-2xl backdrop-filter"
      ref={bodyScrollLockRef}
    >
      <div
        className="scrollbar relative max-h-[80%] max-w-[80%] overflow-auto rounded-xl bg-white p-12 px-[6.85rem] py-[12.8rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <Link href={'/'} scroll={false}>
          <CloseIcon className="absolute right-10 top-10 cursor-pointer " />
        </Link>
        <div>
          {isPaymentSuccess ? <Gratitude /> : <PDFView document={document} />}
        </div>
      </div>
    </section>
  ) : null;
};