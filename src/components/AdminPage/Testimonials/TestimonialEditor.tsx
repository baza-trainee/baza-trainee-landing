'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { testimonialDefaultValues } from './defaultValues';
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

import { ITestimonialRequest } from '@/types/typesAPI';

import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';

import { useGlobalContext } from '@/store/globalContext';

import { convertDate } from '@/utils/formatDate';
import { createImgUrl, downloadImageAsFile } from '@/utils/imageHandler';

import {
  AdminTitle,
  DateInput,
  FileInput,
  FormBtns,
  TextAreaField,
  TextInputField,
} from '@/components/atomic';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';

export const TestimonialEditor = ({
  testimonialId,
}: {
  testimonialId?: string;
}) => {
  const router = useRouter();
  const curLang = useGlobalContext().landingLanguage;
  const [imageUrl, setImageUrl] = useState('');

  const { handleTranslate } = useTranslator();
  const { getItemById, addNewTestimonial, updateTestimonial } =
    useTestimonialsSWR();

  const itemData = getItemById(testimonialId!);

  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<TTestimonialFormInput>({
    mode: 'onSubmit',
    defaultValues: testimonialDefaultValues,
  });

  useEffect(() => {
    if (testimonialId && itemData) {
      setValue('name.ua', itemData.name.ua);
      setValue('name.en', itemData.name.en);
      setValue('name.pl', itemData.name.pl);
      setValue('review.ua', itemData.review.ua);
      setValue('review.en', itemData.review.en);
      setValue('review.pl', itemData.review.pl);
      setValue('role', itemData.role);
      setValue('date', convertDate.toYYYYMMDD(+itemData.date));
      setValue('authorImg', [
        new File([], itemData.imageUrl, { type: 'for-url' }),
      ]);
      setImageUrl(itemData.imageUrl);
    }
  }, [testimonialId, setValue, itemData]);

  const currentValues = watch();

  const translateNameToEn = () => {
    handleTranslate(currentValues.name.ua, 'en').then((res) => {
      setValue('name.en', res);
    });
  };
  const translateNameToPl = () => {
    handleTranslate(currentValues.name.ua, 'pl').then((res) => {
      setValue('name.pl', res);
    });
  };
  const translateReviewToEn = () => {
    handleTranslate(currentValues.review.ua, 'en').then((res) => {
      setValue('review.en', res);
    });
  };
  const translateReviewToPl = () => {
    handleTranslate(currentValues.review.ua, 'pl').then((res) => {
      setValue('review.pl', res);
    });
  };

  const getImageUrl = () => {
    if (!currentValues.authorImg?.length) return;

    if (currentValues.authorImg[0].type === 'for-url') {
      return createImgUrl(currentValues.authorImg[0].name);
    }

    const isValidImg = testimonialValidateOptions.img.authorImg.validate(
      currentValues.authorImg
    );
    if (isValidImg) {
      return URL.createObjectURL(currentValues.authorImg[0]);
    }
  };

  const authorImageUrl = getImageUrl();

  const isImageUrl =
    authorImageUrl !== undefined &&
    authorImageUrl?.split('/files/')[1] !== 'undefined';

  const downloadImage = async (fileName: string) => {
    const imageFile = await downloadImageAsFile(fileName);
    return imageFile;
  };

  const previewData = {
    name: currentValues.name,
    review: currentValues.review,
    role: currentValues.role,
    date: currentValues.date,
    imageUrl: authorImageUrl!,
  };

  const handleResetForm = () => {
    if (testimonialId) {
      router.replace('..');
    } else {
      router.replace('.');
    }
  };

  const onSubmit: SubmitHandler<TTestimonialFormInput> = async (
    values: TTestimonialFormInput
  ) => {
    const newItem: ITestimonialRequest = {
      name: {
        ua: values.name.ua,
        en: values.name.en,
        pl: values.name.pl,
      },
      review: {
        ua: values.review.ua,
        en: values.review.en,
        pl: values.review.pl,
      },
      file: values.authorImg[0],
      role: values.role,
      date: new Date(values.date).getTime(),
    };

    if (testimonialId) {
      if (values.authorImg?.length && values.authorImg[0]?.size === 0) {
        const downloadedImage = await downloadImage(
          itemData?.imageUrl as string
        );
        newItem.file = downloadedImage as File;
      }
      updateTestimonial(testimonialId, newItem);
      router.replace('..');
    } else {
      addNewTestimonial(newItem);
      router.replace('.');
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
              name="name.ua"
              rules={testimonialValidateOptions.nameUa}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  title="Ім’я"
                  inputType="uk"
                  errorText={errors.name?.ua?.message}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="name.en"
              rules={testimonialValidateOptions.nameEn}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="en"
                  errorText={errors.name?.en?.message}
                  handleTranslate={translateNameToEn}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="name.pl"
              rules={testimonialValidateOptions.namePl}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="pl"
                  errorText={errors.name?.pl?.message}
                  handleTranslate={translateNameToPl}
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
              rules={{
                ...testimonialValidateOptions.img,
                ...testimonialValidateOptions.img.authorImg,
                required: 'Додайте зображення',
              }}
              accept="image/*"
              placeholder={!testimonialId ? 'Завантажте зображення' : imageUrl}
              title="Фото"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-[2.4rem] p-6 shadow-md lg:justify-start ">
            <Controller
              name="review.ua"
              rules={testimonialValidateOptions.reviewUa}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  title="Текст"
                  inputType="uk"
                  errorText={errors.review?.ua?.message}
                />
              )}
            />
            <Controller
              name="review.en"
              rules={testimonialValidateOptions.reviewEn}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  inputType="en"
                  errorText={errors.review?.en?.message}
                  handleTranslate={translateReviewToEn}
                />
              )}
            />
            <Controller
              name="review.pl"
              rules={testimonialValidateOptions.reviewPl}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  inputType="pl"
                  errorText={errors.review?.pl?.message}
                  handleTranslate={translateReviewToPl}
                />
              )}
            />
          </div>
          <FormBtns
            isEditMode={testimonialId ? true : false}
            cancelAction={handleResetForm}
          />
        </div>
      </form>
      {currentValues.name.ua && (
        <div className="relative mt-6 w-[88%] py-8 shadow-md">
          <div className="absolute right-0 top-0 flex h-20 items-center justify-center rounded-md bg-accent-light">
            <LanguageSelector />
          </div>
          <SingleSlide
            slideData={previewData}
            lang={curLang}
            isImage={isImageUrl}
          />
        </div>
      )}
    </div>
  );
};
