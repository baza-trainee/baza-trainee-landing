'use client';
import { AdminTitle } from '@/components/atomic';
import { IAddEditSlideProps } from '@/types';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { SliderForm } from '../AdminSliderForm';

// const initialState = {
//   data: {
//     title: {
//       ua: '',
//       en: '',
//       pl: '',
//     },
//     subtitle: {
//       ua: '',
//       en: '',
//       pl: '',
//     },
//     imageUrl: '',
//     _id: '',
//     _v: 0,
//   },
// };

export const AddEditAdminSlider: FC<IAddEditSlideProps> = ({
  title,
  isEdit,
}) => {
  const { id } = useParams();
  const checkedId = typeof id === 'string' ? id : undefined;

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>{title}</AdminTitle>
      </header>
      <div>
        <SliderForm isEdit={isEdit} id={checkedId} />
      </div>
    </div>
  );
};
