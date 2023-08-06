/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  //Redirect user to main page with Ukrainian locale
  useEffect(() => {
    router.replace('/ua');
  }, []);
  return <></>;
};

export default Home;
