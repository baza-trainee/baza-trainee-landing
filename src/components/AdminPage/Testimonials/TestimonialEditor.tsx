'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { SingleSlide } from '@/components/MainPage/Reviews/SingleSlide';
import {
  AdminTitle,
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';
import { TextAreaField } from '@/components/atomic/inputs/TextAreaField';
import { useTestimonialsSWR } from '@/hooks/SWR/useTestimonialsSWR';
import { useGlobalContext } from '@/store/globalContext';
import { ITestimonialRequest } from '@/types';
import { convertDate } from '@/utils/formatDate';
import { createImgUrl, downloadImageAsFile } from '@/utils/imageHandler';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { testimonialDefaultValues } from './defaultValues';
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

export const TestimonialEditor = ({
  testimonialId,
}: {
  testimonialId?: string;
}) => {
  const router = useRouter();
  const curLang = useGlobalContext().landingLanguage;
  const [imageUrl, setImageUrl] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [namePl, setNamePl] = useState('');
  const [reviewEn, setReviewEn] = useState('');
  const [reviewPl, setReviewPl] = useState('');

  const { getItemById, addNewTestimonial, updateTestimonial } =
    useTestimonialsSWR();

  const itemData = getItemById(testimonialId!);

  const {
    register,
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
      setNamePl(itemData.name.pl);
      setNameEn(itemData.name.en);
      setReviewEn(itemData.review.en);
      setReviewPl(itemData.review.pl);
      setValue('name.ua', itemData.name.ua);
      setValue('review.ua', itemData.review.ua);
      setValue('role', itemData.role);
      setValue('date', convertDate.toYYYYMMDD(+itemData.date));
      setValue('authorImg', [
        new File([], itemData.imageUrl, { type: 'for-url' }),
      ]);
      setImageUrl(itemData.imageUrl);
    }
  }, [testimonialId, setValue, itemData]);

  const translatorHandleNameEn = (text: string, _name: string) => {
    setNameEn(text);
  };
  const translatorHandleNamePl = (text: string, _name: string) => {
    setNamePl(text);
  };
  const translatorHandleReviewEn = (text: string, _name: string) => {
    setReviewEn(text);
  };
  const translatorHandleReviewPl = (text: string, _name: string) => {
    setReviewPl(text);
  };

  useEffect(() => {
    setValue('name.en', nameEn);
    setValue('name.pl', namePl);
    setValue('review.en', reviewEn);
    setValue('review.pl', reviewPl);
  }, [setValue, nameEn, namePl, reviewEn, reviewPl]);

  const currentValues = watch();

  const getImageUrl = () => {
    if (!currentValues.authorImg?.length) return;

    if (currentValues.authorImg[0].type === 'for-url') {
      return createImgUrl(currentValues.authorImg[0].name);
    }

    const isValidImg = testimonialValidateOptions.img.validate(
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
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  title="Ім’я"
                  name="testimonialsDataList nameUa"
                  inputType="uk"
                  errorText={errors.name?.ua?.message}
                  value={currentValues.name.ua}
                  onChange={(e) => {
                    setValue('name.ua', e.target.value);
                  }}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="name.en"
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="en"
                  errorText={errors.name?.en?.message}
                  value={currentValues.name.en}
                  setTranslatedValue={translatorHandleNameEn}
                  translateValue={currentValues.name.ua}
                  name="testimonialsDataList nameEn"
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="name.pl"
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="pl"
                  errorText={errors.name?.pl?.message}
                  value={currentValues.name.pl}
                  setTranslatedValue={translatorHandleNamePl}
                  translateValue={currentValues.name.ua}
                  name="testimonialsDataList namePl"
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
                  name="testimonialsDataList role"
                  inputType="uk"
                  errorText={errors.role?.message}
                  placeholder="Введіть спеціалізацію"
                />
              )}
            />
            <Controller
              name="date"
              control={control}
              rules={{ required: 'Оберіть дату' }}
              render={({ field }) => (
                <DateInput
                  {...field}
                  title="Дата"
                  placeholder="Оберіть дату"
                  errorText={errors.date?.message}
                />
              )}
            />
            <FileInput
              {...register('authorImg', {
                ...testimonialValidateOptions.img,
              })}
              accept="image/*"
              placeholder={!testimonialId ? 'Завантажте зображення' : imageUrl}
              title="Фото"
              errorText={errors.authorImg?.message}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-[2.4rem] p-6 shadow-md lg:justify-start ">
            <Controller
              name="review.ua"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  title="Текст"
                  name="testimonialsDataList textUa"
                  inputType="uk"
                  errorText={errors.review?.ua?.message}
                  value={currentValues.review.ua}
                  onChange={(e) => {
                    setValue('review.ua', e.target.value);
                  }}
                />
              )}
            />
            <Controller
              name="review.en"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  name="testimonialsDataList textEn"
                  inputType="en"
                  errorText={errors.review?.en?.message}
                  value={currentValues.review.en}
                  setTranslatedValue={translatorHandleReviewEn}
                  translateValue={currentValues.review.ua}
                />
              )}
            />
            <Controller
              name="review.pl"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  name="testimonialsDataList textPl"
                  inputType="pl"
                  errorText={errors.review?.pl?.message}
                  value={currentValues.review.pl}
                  setTranslatedValue={translatorHandleReviewPl}
                  translateValue={currentValues.review.ua}
                />
              )}
            />
          </div>
          <FormBtns
            isEditMode={testimonialId ? true : false}
            handleFunc={handleResetForm}
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
