import { ContainerMaxW1200, SupportBazaButton } from '@/components/atomic';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import Link from 'next/link';

export const SupportBaza = ({ lang }: { lang: TLandingLanguage }) => {
  const { supportBazaTrainee } = dictionaries[lang].invite || {};

  return (
    <section>
      <ContainerMaxW1200 className="justify-center">
        <Link href={'?modal=fund'} scroll={false}>
          <SupportBazaButton>{supportBazaTrainee}</SupportBazaButton>
        </Link>
      </ContainerMaxW1200>
    </section>
  );
};
