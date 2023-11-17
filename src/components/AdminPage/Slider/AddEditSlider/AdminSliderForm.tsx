'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import PreviewSlide from '../PreviewSlide';
import { sliderValidateOptions } from '../sliderValidateOptions';
import { TFormInputs } from '../types';

import {
  FileInput,
  FormBtns,
  LanguageSelector,
  TextInputField,
} from '@/components/atomic';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';
import { TLandingLanguage } from '@/store/globalContext';
import { TSlideReq } from '@/types';

export const SliderForm = ({ slideId }: { slideId?: string }) => {
  const isEditMode = !!slideId;
  const router = useRouter();
  const { addNewSlider, updateSlider, getByIdSlide } = useHeroSliderSWR();
  const [curLang, setCurLang] = useState<TLandingLanguage>('ua');
  const { handleTranslate } = useTranslator();

  const changeComponentLang = (lang: TLandingLanguage) => {
    setCurLang(lang);
  };

  const cancelAction = () => router.replace('.');

  const {
    handleSubmit,
    setValue,
    getValues,
    control,
    reset,
    formState: { errors },
  } = useForm<TFormInputs>({
    mode: 'onChange',
  });

  const onSubmitForm: SubmitHandler<TFormInputs> = async (dataForm) => {
    const slide: TSlideReq = {
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
    };

    if (dataForm.file?.length && dataForm.file[0]?.size > 0) {
      slide.file = dataForm.file[0];
    }

    if (isEditMode) {
      await updateSlider(slideId, slide).then(cancelAction);
    } else {
      await addNewSlider(slide).then(cancelAction);
    }
  };

  const translateField = (
    fieldType: 'title' | 'subtitle',
    lang: 'en' | 'pl'
  ) => {
    const fieldName = lang === 'en' ? `${fieldType}En` : `${fieldType}Pl`;
    const currentValues = getValues();
    const fieldValue = currentValues[`${fieldType}Ua`];

    handleTranslate(fieldValue, lang).then((res) => {
      setValue(fieldName as keyof TFormInputs, res);
    });
  };

  useEffect(() => {
    if (!isEditMode) return;

    const slideDataById = getByIdSlide(slideId);
    if (!slideDataById) return;

    const { title, subtitle } = slideDataById;

    setValue('titleUa', title.ua);
    setValue('titleEn', title.en);
    setValue('titlePl', title.pl);
    setValue('subtitleUa', subtitle.ua);
    setValue('subtitleEn', subtitle.en);
    setValue('subtitlePl', subtitle.pl);
  }, []);

  return (
    <div className="h-full">
      <form
        className="flex h-2 flex-col gap-1"
        onSubmit={handleSubmit(onSubmitForm)}
        autoComplete="off"
      >
        <FileInput
          name="file"
          rules={sliderValidateOptions.img(isEditMode)}
          title="Зображення"
          control={control}
          accept="image/*"
          placeholder="Додайте зображення до слайду"
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
                handleTranslate={() => translateField('title', 'en')}
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
                handleTranslate={() => translateField('title', 'pl')}
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
                handleTranslate={() => translateField('subtitle', 'en')}
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
                handleTranslate={() => translateField('subtitle', 'pl')}
                errorText={errors.subtitlePl?.message}
                inputType="pl"
              />
            )}
          />
        </div>

        <div className="mb-[1.5rem] flex items-baseline justify-between gap-2">
          <FormBtns isEditMode={isEditMode} cancelAction={reset} />

          <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
            <LanguageSelector
              currLang={curLang}
              changeComponentLang={changeComponentLang}
            />
          </div>
        </div>

        <div className="flex-center mb-[5rem] h-[38.4rem] w-full rounded-md bg-neutral-75">
          <PreviewSlide slideId={slideId} control={control} lang={curLang} />
        </div>
      </form>
    </div>
  );
};
