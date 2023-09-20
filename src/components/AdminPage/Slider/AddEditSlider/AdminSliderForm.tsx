'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { FormBtns } from '@/components/atomic/buttons/FormBtns';
import { FileInput, TextInputField } from '@/components/atomic/inputs';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { IHeroSlider } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PreviewSlide from '../PreviewSlide';
import { sliderValidateOptions } from '../sliderValidateOptions';
import { TFormInputs, TFormSlideRequest } from '../types';
import { DefaultValuesState } from './DefaultValues';

export const SliderForm = ({
  id,
  isEdit,
}: {
  id?: string;
  isEdit: boolean;
}) => {
  const router = useRouter();
  const { addNewSlider, updateSlider, data } = useHeroSliderSWR();
  const [curLang, setCurLang] = useState<string>('ua');
  const slideData = data?.data.find((slide: IHeroSlider) => slide._id === id);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<TFormInputs>({
    mode: 'onSubmit',
    defaultValues: async () => await DefaultValuesState(slideData),
  });

  const onSubmitForm: SubmitHandler<TFormInputs> = async (dataForm) => {
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
      // file: dataForm.file[0],
      imageUrl: dataForm.imageUrl,
    };

    if (dataForm.file?.length && dataForm.file[0]?.size > 0) {
      slide.file = dataForm.file[0];
      slide.imageUrl = dataForm.file[0].name;
    }

    if (id) {
      await updateSlider(id, slide);
      router.replace('..');
    } else {
      await addNewSlider(slide);
      router.replace('.');
    }
  };

  const currentValues = watch();

  useEffect(() => {
    setCurLang(localStorage.getItem('landingLanguage') || 'ua');
    if (currentValues.file?.length && currentValues.file[0]?.size > 0) {
      setValue('imageUrl', currentValues.file[0].name);
    }
  }, [currentValues.file, setValue]);

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
          errorText={errors.file?.message}
        />
        <div className="flex flex-wrap gap-[2.4rem]">
          <Controller
            name="titleUa"
            rules={sliderValidateOptions.title}
            control={control}
            render={({ field }) => (
              <TextInputField
                title="Заголовок"
                {...field}
                placeholder="Введіть назву"
                errorText={errors.titleUa?.message}
                inputType="ua"
              />
            )}
          />

          <Controller
            name="titleEn"
            rules={sliderValidateOptions.title}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                placeholder="Введіть назву"
                errorText={errors.titleEn?.message}
                inputType="en"
              />
            )}
          />
          <Controller
            name="titlePl"
            rules={sliderValidateOptions.title}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                placeholder="Введіть назву"
                errorText={errors.titlePl?.message}
                inputType="pl"
              />
            )}
          />
        </div>
        <div className="flex flex-wrap gap-[2.4rem]">
          <Controller
            name="subtitleUa"
            rules={sliderValidateOptions.title}
            control={control}
            render={({ field }) => (
              <TextInputField
                title="Основний текст"
                {...field}
                placeholder="Введіть текст"
                errorText={errors.subtitleUa?.message}
                inputType="ua"
              />
            )}
          />
          <Controller
            name="subtitleEn"
            rules={sliderValidateOptions.title}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                placeholder="Введіть текст"
                errorText={errors.subtitleEn?.message}
                inputType="en"
              />
            )}
          />
          <Controller
            name="subtitlePl"
            rules={sliderValidateOptions.title}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                placeholder="Введіть текст"
                errorText={errors.subtitlePl?.message}
                inputType="pl"
              />
            )}
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
