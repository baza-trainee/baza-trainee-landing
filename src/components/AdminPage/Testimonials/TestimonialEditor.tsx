'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { testimonialDefaultValues } from './defaultValues';
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';
import {
  AdminTitle,
  DateInput,
  FileInput,
  FormBtns,
  LanguageSelector,
  TextAreaField,
  TextInputField,
} from '@/components/atomic';
import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';
import { TLandingLanguage } from '@/store/globalContext';
import { ITestimonialRequest } from '@/types/typesAPI';
import { convertDate } from '@/utils/formatDate';
import { createImgUrl, downloadImageAsFile } from '@/utils/imageHandler';

export const TestimonialEditor = ({
  testimonialId,
}: {
  testimonialId?: string;
}) => {
  const router = useRouter();
  const { handleTranslate } = useTranslator();
  const [imageUrl, setImageUrl] = useState<string>();
  const [componentLang, setComponentLang] = useState<TLandingLanguage>('ua');

  const { getItemById, addNewTestimonial, updateTestimonial } =
    useTestimonialsSWR();

  const changeComponentLang = (lang: TLandingLanguage) => {
    setComponentLang(lang);
  };

  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<TTestimonialFormInput>({
    mode: 'onChange',
    defaultValues: testimonialDefaultValues,
  });

  useEffect(() => {
    if (!testimonialId) return;
    const itemData = getItemById(testimonialId!);
    if (!itemData) return;
    setValue('nameUa', itemData.name.ua);
    setValue('nameEn', itemData.name.en);
    setValue('namePl', itemData.name.pl);
    setValue('reviewUa', itemData.review.ua);
    setValue('reviewEn', itemData.review.en);
    setValue('reviewPl', itemData.review.pl);
    setValue('role', itemData.role);
    setValue('date', convertDate.toYYYYMMDD(+itemData.date));
    setValue('authorImg', [
      new File([], itemData.imageUrl, { type: 'for-url' }),
    ]);
    setImageUrl(itemData.imageUrl);
  }, []);

  const currentValues = watch();

  const translateField = (fieldType: 'name' | 'review', lang: 'en' | 'pl') => {
    const fieldName = lang === 'en' ? `${fieldType}En` : `${fieldType}Pl`;
    const fieldValue = currentValues[`${fieldType}Ua`];

    handleTranslate(fieldValue, lang).then((res) => {
      setValue(fieldName as keyof TTestimonialFormInput, res);
    });
  };

  const getImageUrl = () => {
    if (!currentValues.authorImg?.length) return;

    if (currentValues.authorImg[0].type === 'for-url') {
      return createImgUrl(currentValues.authorImg[0].name);
    }

    const isValidImg = testimonialValidateOptions.image.validate(
      currentValues.authorImg
    );

    if (isValidImg) {
      return URL.createObjectURL(currentValues.authorImg[0]);
    }
  };

  const authorImageUrl = getImageUrl();

  const isImageUrl = !!imageUrl && imageUrl.split('/files/')[1] !== 'undefined';

  const previewData = {
    name: {
      ua: currentValues.nameUa,
      en: currentValues.nameEn,
      pl: currentValues.namePl,
    },
    review: {
      ua: currentValues.reviewUa,
      en: currentValues.reviewEn,
      pl: currentValues.reviewPl,
    },
    role: currentValues.role,
    date: currentValues.date,
    imageUrl: authorImageUrl!,
  };

  const cancelAction = () => router.replace('.');

  const onSubmit: SubmitHandler<TTestimonialFormInput> = async (
    values: TTestimonialFormInput
  ) => {
    const newItem: ITestimonialRequest = {
      name: {
        ua: values.nameUa,
        en: values.nameEn,
        pl: values.namePl,
      },
      review: {
        ua: values.reviewUa,
        en: values.reviewEn,
        pl: values.reviewPl,
      },
      file: values.authorImg[0],
      role: values.role,
      date: new Date(values.date).getTime(),
    };

    if (testimonialId) {
      if (
        values.authorImg?.length &&
        values.authorImg[0]?.size === 0 &&
        imageUrl
      ) {
        newItem.file = (await downloadImageAsFile(imageUrl)) as File;
      }
      updateTestimonial(testimonialId, newItem).then(cancelAction);
    } else {
      addNewTestimonial(newItem).then(cancelAction);
    }
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem] ">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">
        {testimonialId ? 'Редагувати Відгук' : 'Додати Відгук'}
      </AdminTitle>

      <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8">
          <div className="flex flex-wrap justify-center gap-[2.4rem] p-6  shadow-md lg:justify-start">
            <Controller
              name="nameUa"
              rules={testimonialValidateOptions.nameUa}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  title="Ім’я"
                  inputType="uk"
                  errorText={errors.nameUa?.message}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="nameEn"
              rules={testimonialValidateOptions.nameEn}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="en"
                  errorText={errors.nameEn?.message}
                  handleTranslate={() => translateField('name', 'en')}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="namePl"
              rules={testimonialValidateOptions.namePl}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="pl"
                  errorText={errors.namePl?.message}
                  handleTranslate={() => translateField('name', 'pl')}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="role"
              rules={testimonialValidateOptions.role}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  title="Спеціалізація"
                  inputType="uk"
                  errorText={errors.role?.message}
                  placeholder="Введіть спеціалізацію"
                />
              )}
            />
            <DateInput
              name="date"
              control={control}
              rules={testimonialValidateOptions.date}
              title="Дата"
              placeholder="Оберіть дату"
            />
            <FileInput
              control={control}
              name="authorImg"
              rules={testimonialValidateOptions.image}
              accept="image/*"
              placeholder={imageUrl || 'Завантажте зображення'}
              title="Фото"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-[2.4rem] p-6 shadow-md lg:justify-start ">
            <Controller
              name="reviewUa"
              rules={testimonialValidateOptions.reviewUa}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  title="Текст"
                  inputType="uk"
                  errorText={errors.reviewUa?.message}
                />
              )}
            />
            <Controller
              name="reviewEn"
              rules={testimonialValidateOptions.reviewEn}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  inputType="en"
                  errorText={errors.reviewEn?.message}
                  handleTranslate={() => translateField('review', 'en')}
                />
              )}
            />
            <Controller
              name="reviewPl"
              rules={testimonialValidateOptions.reviewPl}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  inputType="pl"
                  errorText={errors.reviewPl?.message}
                  handleTranslate={() => translateField('review', 'pl')}
                />
              )}
            />
          </div>

          <FormBtns isEditMode={!!testimonialId} cancelAction={cancelAction} />
        </div>
      </form>

      {currentValues.nameUa && (
        <div className="relative mt-6 w-[88%] py-8 shadow-md">
          <div className="absolute right-0 top-0 flex h-20 items-center justify-center rounded-md bg-accent-light">
            <LanguageSelector
              currLang={componentLang}
              changeComponentLang={changeComponentLang}
            />
          </div>

          <SingleSlide
            slideData={previewData}
            lang={componentLang}
            isImage={isImageUrl}
          />
        </div>
      )}
    </div>
  );
};
