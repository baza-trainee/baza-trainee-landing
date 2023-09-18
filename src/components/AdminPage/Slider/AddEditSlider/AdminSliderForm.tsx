'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { IHeroSlider } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import PreviewSlide from '../PreviewSlide';
import { TFormInputs, TFormSlideRequest } from '../types';
import { DefaultValuesState } from './DefaultValues';

export const SliderForm = ({
  id,
  isEdit,
}: {
  id?: string;
  isEdit: boolean;
}) => {
  const inputOptions = {
    required: 'Заповніть поле',
  };

  const router = useRouter();
  const { addNewSlider, updateSlider, data } = useHeroSliderSWR();
  const [curLang, setCurLang] = useState<string>('ua');
  const slideData = data?.data.find((slide: IHeroSlider) => slide._id === id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormInputs>({
    mode: 'onSubmit',
    defaultValues: async () => await DefaultValuesState(slideData),
  });

  const onSubmitForm: SubmitHandler<TFormInputs> = async (dataForm) => {
    console.log('Form Data:', dataForm);
    console.log('File Data:', id);

    const slide: TFormSlideRequest = {
      title: {
        ua: dataForm.titleUa,
        en: dataForm.titleEn,
        pl: dataForm.titlePl,
      },
      subtitle: {
        ua: dataForm.subtitleUa,
        en: dataForm.subtitleEn,
        pl: dataForm.subtitlePl,
      },
      file: dataForm.file[0],
      imageUrl: dataForm.file[0].name,
    };

    console.log('SLIDE:', slide);

    addNewSlider(slide);

    if (id) {
      updateSlider(id, slide);
    } else {
      addNewSlider(slide);
    }
    router.replace('.');
  };

  const currentValues = watch();
  console.log('CurValues', currentValues);

  useEffect(() => {
    setCurLang(localStorage.getItem('landingLanguage') || 'ua');
  }, []);

  useEffect(() => {}, [watch]);

  return (
    <div className="h-full">
      <form
        className="flex h-2 flex-col gap-1"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <FileInput
          title="Зображення"
          {...register('file')}
          accept="image/*"
          placeholder={'Завантажте зображення'}
          errorText={errors.file?.message}
        />
        <div className="flex flex-wrap gap-[2.4rem]">
          <TextInputField
            title="Заголовок"
            {...register('titleUa', inputOptions)}
            errorText={errors.titleUa?.message}
            inputType="ua"
          />

          <TextInputField
            {...register('titleEn', inputOptions)}
            errorText={errors.titleEn?.message}
            inputType="en"
          />
          <TextInputField
            {...register('titlePl', inputOptions)}
            errorText={errors.titlePl?.message}
            inputType="pl"
          />
        </div>
        <div className="flex flex-wrap gap-[2.4rem]">
          <TextInputField
            title="Основний текст"
            {...register('subtitleUa', inputOptions)}
            errorText={errors.subtitleUa?.message}
            inputType="ua"
          />
          <TextInputField
            {...register('subtitleEn', inputOptions)}
            errorText={errors.subtitleEn?.message}
            inputType="en"
          />
          <TextInputField
            {...register('subtitlePl', inputOptions)}
            errorText={errors.subtitlePl?.message}
            inputType="pl"
          />
        </div>
        <div className="mb-[1.5rem] flex items-center justify-between gap-2">
          <FormBtns isEditMode={isEdit} />
          <LanguageSelector />
        </div>
        <div className="flex-center mb-[5rem] h-[38.4rem] w-full rounded-md bg-neutral-75">
          <PreviewSlide currentValues={currentValues} lang={curLang} />
        </div>
      </form>
    </div>
  );
};
