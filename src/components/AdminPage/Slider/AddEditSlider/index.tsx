'use client';
import { AdminTitle } from '@/components/atomic';
import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { IAddEditSlideProps } from '@/types';
import { FC, useState } from 'react';

const initialState = {
  data: {
    title: {
      ua: '',
      en: '',
      pl: '',
    },
    subtitle: {
      ua: '',
      en: '',
      pl: '',
    },
    imageUrl: '',
    _id: '',
  },
};

export const AddEditAdminSlider: FC<IAddEditSlideProps> = ({
  title,
  isEdit,
}) => {
  const [data, setData] = useState(initialState);
  console.log(data);

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>{title}</AdminTitle>
      </header>
      <div>
        <form className="flex h-2 flex-col gap-1">
          <FileInput title="Зображення" placeholder="завантажте зображення" />
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField title="Заголовок" name="titleua" inputType="ua" />
            <TextInputField title="" name="titleen" inputType="en" />
            <TextInputField title="" name="titlepl" inputType="pl" />
          </div>
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField
              title="Основний текст"
              name="subtitleua"
              inputType="ua"
            />
            <TextInputField title="" name="subtitleen" inputType="en" />
            <TextInputField title="" name="subtitlepl" inputType="pl" />
          </div>
          <div className="flex gap-2">
            <FormBtns isEditMode={isEdit} />
          </div>
        </form>
        {/* {data && <SliderForm data={data} isEdit={isEdit} />} */}
      </div>
    </div>
  );
};
