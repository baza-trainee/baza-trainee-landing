/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  //Redirect user to main page with Ukrainian locale
  // useEffect(() => {
  //   router.replace('/ua');
  //   localStorage.setItem('landingLanguage', 'ua');
  // }, []);
  return <></>;
};

export default Home;
