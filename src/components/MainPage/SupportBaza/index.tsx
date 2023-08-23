import { ContainerMaxW1200, SupportBazaButton } from '@/components/atomic';
import { TDictionary } from '@/types';
import { Modal } from '../Modal';

export const SupportBaza = ({ dict }: { dict: TDictionary }) => {
  return (
    <section>
      <ContainerMaxW1200>
        <Modal dict={dict} content="donate">
          <SupportBazaButton className="m-auto">
            {dict.invite.supportBazaTrainee}
          </SupportBazaButton>
        </Modal>
      </ContainerMaxW1200>
    </section>
  );
};
