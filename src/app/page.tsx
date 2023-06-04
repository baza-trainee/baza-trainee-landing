import Achievements from '@/components/MainPage/Achievements';
import Footer from '@/components/MainPage/Footer';
import Forms from '@/components/MainPage/Forms';
import Partners from '@/components/MainPage/Partners';
import Projects from '@/components/MainPage/Projects';
import Reviews from '@/components/MainPage/Reviews';
import Slider from '@/components/MainPage/Slider';
import Statistics from '@/components/MainPage/Statistics';
import Header from '../components/MainPage/Header/index';
import Modal from '../components/MainPage/Modal/index';

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Projects />
      <Statistics />
      <Forms />
      <Achievements />
      <Partners />
      <Reviews />
      <Footer />
      <Modal />
    </>
  );
}
/*
@@include('header.html')
    
@@include('slider.html')

@@include('projects.html')
    
@@include('statistic.html')

@@include('forms.html')
  
@@include('achievements.html')

@@include('partners.html')

@@include('reviews.html') 

@@include('footer.html')

@@include('modal.html')*/
