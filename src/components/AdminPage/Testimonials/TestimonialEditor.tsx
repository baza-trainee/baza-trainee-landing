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
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

const defaultValues: TTestimonialFormInput = {
  nameUa: '',
  nameEn: '',
  namePl: '',
  reviewUa: '',
  reviewEn: '',
  reviewPl: '',
  authorImg: [],
  role: '',
  date: new Date().toISOString().split('T')[0],
};

export const TestimonialEditor = ({
  testimonialId,
}: {
  testimonialId?: string;
}) => {
  const router = useRouter();
  const curLang = useGlobalContext().landingLanguage;
  const [nameUa, setNameUa] = useState<string | undefined>('');
  const [nameEn, setNameEn] = useState<string | undefined>('');
  const [namePl, setNamePl] = useState<string | undefined>('');
  const [reviewUa, setReviewUa] = useState<string | undefined>('');
  const [reviewEn, setReviewEn] = useState<string | undefined>('');
  const [reviewPl, setReviewPl] = useState<string | undefined>('');
  const [imageUrl, setImageUrl] = useState<string | undefined>('');

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
    defaultValues,
  });

  useEffect(() => {
    if (testimonialId) {
      setNameUa(itemData?.name.ua);
      setNamePl(itemData?.name.pl);
      setNameEn(itemData?.name.en);
      setReviewUa(itemData?.review.ua);
      setReviewEn(itemData?.review.en);
      setReviewPl(itemData?.review.pl);
    }
  }, [testimonialId, itemData]);

  useEffect(() => {
    if (itemData) {
      setValue('nameUa', itemData.name?.ua);
      setValue('nameEn', itemData.name?.en);
      setValue('namePl', itemData.name?.pl);
      setValue('reviewUa', itemData.review?.ua);
      setValue('reviewEn', itemData.review?.en);
      setValue('reviewPl', itemData.review?.pl);
      setValue('role', itemData.role);
      setValue('date', convertDate.toYYYYMMDD(+itemData.date));
      setValue('authorImg', [
        new File([], itemData.imageUrl, { type: 'for-url' }),
      ]);
      setImageUrl(itemData.imageUrl);
    }
  }, [setValue, itemData]);

  const translatorHandleEn = (text: string, _name: string) => {
    setNameEn(text);
  };
  const translatorHandlePl = (text: string, _name: string) => {
    setNamePl(text);
  };
  const translatorHandleTextEn = (text: string, _name: string) => {
    setReviewEn(text);
  };
  const translatorHandleTextPl = (text: string, _name: string) => {
    setReviewPl(text);
  };

  useEffect(() => {
    setValue('nameEn', nameEn!);
    setValue('namePl', namePl!);
    setValue('reviewEn', reviewEn!);
    setValue('reviewPl', reviewPl!);
  }, [setValue, nameEn, namePl, reviewEn, reviewPl]);

  const downloadImage = async (fileName: string) => {
    const imageFile = await downloadImageAsFile(fileName);
    return imageFile;
  };

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

  const isImageUrl = authorImageUrl?.split('/files/')[1] !== 'undefined';

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
              name="nameUa"
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  title="Ім’я"
                  name="testimonialsDataList nameUa"
                  inputType="uk"
                  errorText={errors.nameUa?.message}
                  value={nameUa}
                  onChange={(e) => {
                    setNameUa(e.target.value),
                      setValue('nameUa', e.target.value);
                  }}
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="nameEn"
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="en"
                  errorText={errors.nameEn?.message}
                  value={nameEn}
                  setTranslatedValue={translatorHandleEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  translateValue={nameUa}
                  name="testimonialsDataList nameEn"
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="namePl"
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="pl"
                  errorText={errors.namePl?.message}
                  value={namePl}
                  setTranslatedValue={translatorHandlePl}
                  translateValue={nameUa}
                  onChange={(e) => setNamePl(e.target.value)}
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
              name="reviewUa"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  title="Текст"
                  name="testimonialsDataList textUa"
                  inputType="uk"
                  errorText={errors.reviewUa?.message}
                  value={reviewUa}
                  onChange={(e) => {
                    setReviewUa(e.target.value),
                      setValue('reviewUa', e.target.value);
                  }}
                />
              )}
            />
            <Controller
              name="reviewEn"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  name="testimonialsDataList textEn"
                  inputType="en"
                  errorText={errors.reviewEn?.message}
                  value={reviewEn}
                  setTranslatedValue={translatorHandleTextEn}
                  onChange={(e) => setReviewEn(e.target.value)}
                  translateValue={reviewUa}
                />
              )}
            />
            <Controller
              name="reviewPl"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  name="testimonialsDataList textPl"
                  inputType="pl"
                  errorText={errors.reviewPl?.message}
                  value={reviewPl}
                  setTranslatedValue={translatorHandleTextPl}
                  translateValue={reviewUa}
                  onChange={(e) => setReviewPl(e.target.value)}
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
      {currentValues.nameUa && isImageUrl && (
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
