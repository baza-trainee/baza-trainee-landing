'use client';
import Page404 from '@/components/ErrorPages/Page404';
import { Suspense } from 'react';

const NotFound = () => (
  <Suspense fallback={<></>}>
    <Page404 />
  </Suspense>
);

export default NotFound;
