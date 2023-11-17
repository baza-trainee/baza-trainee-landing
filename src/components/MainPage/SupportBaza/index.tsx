import { Modal } from '../Modal';

import { dictionaries } from '@/locales/dictionaries';

import { TLandingLanguage } from '@/store/globalContext';

import { ContainerMaxW1200, SupportBazaButton } from '@/components/atomic';

export const SupportBaza = async ({ lang }: { lang: TLandingLanguage }) => {
  const { supportBazaTrainee } = dictionaries[lang].invite || {};

  return (
    <section>
      <ContainerMaxW1200>
        <Modal content="donate" lang={lang}>
          <SupportBazaButton className="m-auto">
            {supportBazaTrainee}
          </SupportBazaButton>
        </Modal>
      </ContainerMaxW1200>
    </section>
  );
};
