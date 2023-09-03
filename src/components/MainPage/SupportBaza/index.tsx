import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200, SupportBazaButton } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';
import { Modal } from '../Modal';

export const SupportBaza = async ({ lang }: { lang: TLandingLanguage }) => {
  const dict = dictionaries[lang];
  const { invite } = dict || {};
  const { supportBazaTrainee } = invite || {};
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
