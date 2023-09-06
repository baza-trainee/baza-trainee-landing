import { AdminTitle } from '@/components/atomic';
import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { IAddEditSlideProps } from '@/types';
import { FC } from 'react';

export const AddEditAdminSlider: FC<IAddEditSlideProps> = ({
  data,
  title,
  isEdit,
}) => {
  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>{title}</AdminTitle>
      </header>
      <div>
        <form className="flex h-2 flex-col gap-1">
          <FileInput title="Зображення" placeholder="завантажте зображення" />
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField title="Заголовок" name="titleua" inputType="ua">
              {data?.title.ua}
            </TextInputField>
            <TextInputField title="" name="titleen" inputType="en">
              {data?.title.en}
            </TextInputField>
            <TextInputField title="" name="titlepl" inputType="pl">
              {data?.title.pl}
            </TextInputField>
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
      </div>
    </div>
  );
};
