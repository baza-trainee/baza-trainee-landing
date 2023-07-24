'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { AdminPanelButton } from '../atomic';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function PDFView() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  return (
    <div className="flex w-[80%] flex-col items-center justify-center">
      <Document
        file="./docs/policy.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className={'flex items-center justify-center'}
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <div className="flex items-center justify-center">
        <AdminPanelButton
          type="button"
          disabled={pageNumber <= 1}
          onClick={(_e) => changePage(-1)}
        >
          Попередня
        </AdminPanelButton>
        <p className=" p-4 text-3xl font-bold">
          Сторінка {pageNumber || (numPages ? 1 : '--')} з {numPages || '--'}
        </p>
        <AdminPanelButton
          type="button"
          disabled={pageNumber >= numPages}
          onClick={(_e) => changePage(1)}
        >
          Наступна
        </AdminPanelButton>
      </div>
    </div>
  );
}
