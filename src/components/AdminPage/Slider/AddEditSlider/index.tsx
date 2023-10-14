'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { SliderForm } from './AdminSliderForm';

import { AdminTitle } from '@/components/atomic';
import { CloseIcon } from '@/components/common/icons';

export interface IAddEditSlideProps {
  title: string;
  slideId?: string;
}

export const AddEditAdminSlider: FC<IAddEditSlideProps> = ({
  title,
  slideId,
}) => {
  const router = useRouter();

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <AdminTitle>{title}</AdminTitle>
          <button type="button" onClick={() => router.back()}>
            {<CloseIcon />}
          </button>
        </div>
      </header>

      <div>
        <SliderForm slideId={slideId} />
      </div>
    </div>
  );
};
