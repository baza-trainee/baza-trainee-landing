'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Spinner from '../common/icons/Spinner';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PDFView = ({ document }: { document: string | null }) => {
  const [numPages, setNumPages] = useState<number>(0);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center ">
      <Document
        loading={<Spinner title="Документ завантажується" />}
        file={`./docs/${document}`}
        onLoadSuccess={onDocumentLoadSuccess}
        error={
          <div className="text-3xl font-bold">Не вдалося завантажити файл</div>
        }
        className={'flex flex-col items-center justify-center '}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={1.5}
          />
        ))}
      </Document>
    </div>
  );
};
