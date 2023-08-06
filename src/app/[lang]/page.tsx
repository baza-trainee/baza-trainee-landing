import { Achievements } from '@/components/MainPage/Achievements';
import { Footer } from '@/components/MainPage/Footer';
import { Forms } from '@/components/MainPage/Forms';
import { Header } from '@/components/MainPage/Header';
import { HeroSlider } from '@/components/MainPage/HeroSlider';
import { ModalParams } from '@/components/MainPage/ModalParams';
import { Partners } from '@/components/MainPage/Partners';
import { Projects } from '@/components/MainPage/Projects';
import { Reviews } from '@/components/MainPage/Reviews';
import { Statistics } from '@/components/MainPage/Statistics';
import { SupportBaza } from '@/components/MainPage/SupportBaza';
import { getDictionary } from './dictionaries';

export default async function Home({
  params,
}: {
  params: { lang: 'ua' | 'en' | 'pl' };
}) {
  const dict = await getDictionary(params.lang);
  const navLinks = [
    { title: dict.navbar.projects, href: '#projects' },
    { title: dict.navbar.partners, href: '#partners' },
    { title: dict.navbar.participate, href: '#forms' },
    { title: dict.navbar.contacts, href: '#footer' },
  ];
  return (
    <>
      <Header navLinks={navLinks} />
      <main className="mb-36 flex flex-col gap-32 md:mb-40 md:gap-44 xl:mb-48 xl:gap-52">
        <HeroSlider lang={params.lang} dict={dict} />
        <Projects lang={params.lang} dict={dict} />
        <SupportBaza dict={dict} />
        <Statistics dict={dict} />
        <Forms dict={dict} />
        <Partners dict={dict} />
        <Achievements dict={dict} />
        <Reviews dict={dict} />
      </main>
      <Footer dict={dict} />

      <ModalParams dict={dict} />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps<{
//   { props: { heroSliders: any; status: number; }; }
// }> = async () => {
//   const { data, status } = await axios.get(
//     'https://baza-trainee.tech/api/v1/heroslider'
//   );
//   console.log('Data', data);
//   return {
//     props: {
//       heroSliders: data,
//       status: status,
//     },
//   };
// };
