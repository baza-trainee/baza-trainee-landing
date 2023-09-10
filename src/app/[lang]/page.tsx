import { Achievements } from '@/components/MainPage/Achievements';
import { Footer } from '@/components/MainPage/Footer';
import { Forms } from '@/components/MainPage/Forms';
import { Header } from '@/components/MainPage/Header';
import { HeroSlider } from '@/components/MainPage/HeroSlider';
import { Partners } from '@/components/MainPage/Partners';
import { Projects } from '@/components/MainPage/Projects';
import { Reviews } from '@/components/MainPage/Reviews';
import { Statistics } from '@/components/MainPage/Statistics';
import { SupportBaza } from '@/components/MainPage/SupportBaza';
import { TLandingLanguage } from '@/store/globalContext';
import dynamic from 'next/dynamic';

const ModalParams = dynamic(async () => {
  const { ModalParams: Component } = await import(
    '@/components/MainPage/ModalParams'
  );
  return { default: Component };
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
}
export const dynamicParams = false;

type Props = {
  params: { lang: TLandingLanguage };
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ params: { lang }, searchParams }: Props) {
  const showModal = !!(searchParams?.modal || searchParams?.document);

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

      {showModal && <ModalParams lang={lang} />}
    </>
  );
}
