'use client';

import { RefObject, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import Spinner from '../common/icons/Spinner';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PDFView = ({
  document,
  lang,
}: {
  document: string | null;
  lang: TLandingLanguage;
}) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState(0);
  const { loading, error } = dictionaries[lang].spinner;
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const pdfWrapperRef = useRef<HTMLDivElement | null>(
    null
  ) as RefObject<HTMLDivElement>;

  useEffect(() => {
    const getWidth = () =>
      pdfWrapperRef?.current?.getBoundingClientRect()?.width || 0;

    setWidth(getWidth());

    const handleResize = () => {
      setWidth(getWidth());
    };

    if (pdfWrapperRef?.current) {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pdfWrapperRef]);

  return (
    <div>
      <div
        className="flex h-full w-full flex-col items-center justify-center"
        ref={pdfWrapperRef}
      >
        <Document
          loading={<Spinner title={loading} />}
          file={`./docs/${document}`}
          onLoadSuccess={onDocumentLoadSuccess}
          error={<div className="text-3xl font-bold">{error}</div>}
          className={'flex w-full flex-col items-center justify-center p-5 '}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={width}
              //scale={3}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};
