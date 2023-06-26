import Achievements from '@/components/MainPage/Achievements';
import Footer from '@/components/MainPage/Footer';
import Forms from '@/components/MainPage/Forms';
import Header from '@/components/MainPage/Header';
import HeroSlider from '@/components/MainPage/HeroSlider';
import Modal from '@/components/MainPage/Modal/index';
import Partners from '@/components/MainPage/Partners';
import Projects from '@/components/MainPage/Projects';
import Reviews from '@/components/MainPage/Reviews';
import Statistics from '@/components/MainPage/Statistics';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <Projects />
      <Statistics />
      <Forms />
      <Partners />
      <Achievements />
      <Reviews />
      <Footer />
      <Modal />
    </>
  );
}
