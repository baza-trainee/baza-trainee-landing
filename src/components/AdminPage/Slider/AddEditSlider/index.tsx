import { AdminTitle } from '@/components/atomic';
import { TextInputField } from '@/components/atomic/inputs';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  data?: {
    title: {
      ua: string;
      en: string;
      pl: string;
    };
    subtitle: {
      ua: string;
      en: string;
      pl: string;
    };
    imageUrl: string;
    _id: string;
    _v: number;
  };
  title: string;
}

export const AddEditAdminSlider: FC<IProps> = ({ data, title }) => {
  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>{title}</AdminTitle>
      </header>
      <div>
        <form>
          <TextInputField title="Зображення" inputType="image">
            {data?.imageUrl}
          </TextInputField>
          <div>
            <TextInputField title="Заголовок" name="titleua">
              {data?.title.ua}
            </TextInputField>
            <TextInputField title="" name="titleen" inputType="pen">
              {data?.title.en}
            </TextInputField>
            <TextInputField title="" name="titlepl" inputType="pen">
              {data?.title.pl}
            </TextInputField>
          </div>
          <div>
            <TextInputField title="Основний текст" name="subtitleua" />
            <TextInputField title="" name="subtitleen" />
            <TextInputField title="" name="subtitlepl" />
          </div>
          <div>
            <button type="submit">Зберегти зміни</button>
            <Link href="/slider">Скасувати</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
