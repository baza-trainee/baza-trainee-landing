import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200, SupportBazaButton } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';
import { Modal } from '../Modal';

export const SupportBaza = async ({ lang }: { lang: TLandingLanguage }) => {
  const dict = await dictionaries[lang]();
  return (
    <section>
      <ContainerMaxW1200>
        <Modal lang={lang} content="donate">
          <SupportBazaButton className="m-auto">
            {dict.invite.supportBazaTrainee}
          </SupportBazaButton>
        </Modal>
      </ContainerMaxW1200>
    </section>
  );
};
