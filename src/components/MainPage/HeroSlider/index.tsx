import { ContainerMaxW1200, PrimaryButton } from '@/components/atomic';
import { SliderInstance } from './SliderInstance';
import { Modal } from '../Modal';

export const HeroSlider = () => {
  return (
    <section className="relative">
      <SliderInstance />

      <div className="bg-yellow-500">
        <ContainerMaxW1200 className="h-[8.8rem] items-center justify-end">
          <Modal>
            <PrimaryButton>Фондувати</PrimaryButton>
          </Modal>
        </ContainerMaxW1200>
      </div>
    </section>
  );
};
