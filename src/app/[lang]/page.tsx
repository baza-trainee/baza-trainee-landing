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
import { TLandingLanguage } from '@/store/globalContext';

//Commented method to make page SSR
// export function generateStaticParams() {
//   return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
// }

export default function Home({
  params: { lang },
}: {
  params: { lang: TLandingLanguage };
}) {
  return (
    <>
      <Header lang={lang} />
      <main className="mb-36 flex flex-col gap-32 md:mb-40 md:gap-44 xl:mb-48 xl:gap-52">
        <HeroSlider lang={lang} />
        <Projects lang={lang} />
        <SupportBaza lang={lang} />
        <Statistics lang={lang} />
        <Forms lang={lang} />
        <Partners lang={lang} />
        <Achievements lang={lang} />
        <Reviews lang={lang} />
      </main>
      <Footer lang={lang} />

      <ModalParams lang={lang} />
    </>
  );
}
