import { ContainerMaxW1200, SupportBazaButton } from '@/components/atomic';
import { Modal } from '../Modal';

export const SupportBaza = () => {
  return (
    <section>
      <ContainerMaxW1200>
        <Modal content="donate">
          <SupportBazaButton className="m-auto">
            Підтримати Baza Trainee Ukraine
          </SupportBazaButton>
        </Modal>
      </ContainerMaxW1200>
    </section>
  );
};
``;
