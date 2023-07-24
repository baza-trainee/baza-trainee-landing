'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Spinner from './icons/Spinner';

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
    <div className=" flex h-full w-full flex-col items-center justify-center ">
      {/*<Document
        loading={<Spinner title="Документ завантажується" />}
        file="./docs/policy.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className={'flex flex-col items-center justify-center'}
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
        <div className="flex items-center justify-center">
          <AdminPanelButton
            type="button"
            disabled={pageNumber <= 1}
            onClick={(_e) => changePage(-1)}
          >
            {'<'}
          </AdminPanelButton>
          <p className=" p-4 text-3xl font-bold">
            Сторінка {pageNumber || (numPages ? 1 : '--')} з {numPages || '--'}
          </p>
          <AdminPanelButton
            type="button"
            disabled={pageNumber >= numPages}
            onClick={(_e) => changePage(1)}
          >
            {'>'}
          </AdminPanelButton>
        </div>
      </Document>*/}
      <Document
        loading={<Spinner title="Документ завантажується" />}
        file="./docs/policy.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        error={<div>Не вдалося завантажити файл</div>}
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
}
