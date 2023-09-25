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
import { useGlobalContext } from '@/store/globalContext';
import { ITestimonial, ITestimonialRequest } from '@/types';
import testimonialsApi from '@/utils/API/testimonials';
import { convertDate, formatDate } from '@/utils/formatDate';
import { createImgUrl, downloadImageAsFile } from '@/utils/imageHandler';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

const defaultValues: TTestimonialFormInput = {
  name: {
    ua: '',
    en: '',
    pl: '',
  },
  review: {
    ua: '',
    en: '',
    pl: '',
  },
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
  const [nameUa, setNameUa] = useState<string>('');
  const [nameEn, setNameEn] = useState<string>('');
  const [namePl, setNamePl] = useState<string>('');
  const [reviewUa, setReviewUa] = useState<string>('');
  const [reviewEn, setReviewEn] = useState<string>('');
  const [reviewPl, setReviewPl] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [itemData, setItemData] = useState<ITestimonial>({} as ITestimonial);
  const curLang = useGlobalContext().landingLanguage;

  const { createNew, getById, updateById } = testimonialsApi;

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<TTestimonialFormInput>({
    mode: 'onSubmit',
    defaultValues,
  });

  useEffect(() => {
    if (testimonialId) {
      const getTestimonial = async () => {
        const data = await getById(testimonialId!);
        setItemData(data);
        setNameUa(data.name.ua);
        setNamePl(data.name.pl);
        setNameEn(data.name.en);
        setReviewUa(data.review.ua);
        setReviewEn(data.review.en);
        setReviewPl(data.review.pl);
      };
      getTestimonial();
    }
  }, [testimonialId, getById]);

  useEffect(() => {
    const setValues = async () => {
      if (itemData) {
        setValue('name.ua', itemData.name?.ua);
        setValue('name.en', itemData.name?.en);
        setValue('name.pl', itemData.name?.pl);
        setValue('review.ua', itemData.review?.ua);
        setValue('review.en', itemData.review?.en);
        setValue('review.pl', itemData.review?.pl);
        setValue('role', itemData.role);
        setValue('date', convertDate.toYYYYMMDD(+itemData.date));
        setValue('authorImg', [
          new File([], itemData.imageUrl, { type: 'for-url' }),
        ]);
        setImageUrl(itemData.imageUrl);
      }
    };
    setValues();
    setFocus('name.ua');
  }, [itemData, setValue, setFocus]);

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

  const formattedDate = formatDate(currentValues.date, 'nouns', 'ua');

  const previewData = {
    name: {
      ua: currentValues.name.ua,
      en: currentValues.name.en,
      pl: currentValues.name.pl,
    },
    review: {
      ua: currentValues.review.ua,
      en: currentValues.review.en,
      pl: currentValues.review.pl,
    },
    role: currentValues.role,
    date: formattedDate,
    imageUrl: authorImageUrl as string,
  };

  const handleResetForm = () => {
    reset(defaultValues);
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
        const downloadedImage = await downloadImage(itemData.imageUrl);
        newItem.file = downloadedImage as File;
      }
      await updateById([testimonialId, newItem]);
      router.replace('..');
    } else {
      await createNew(newItem);
      router.replace('.');
    }
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem] ">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">
        {!testimonialId ? 'Додати Відгук' : 'Редагувати Відгук'}
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
                  value={nameUa}
                  onChange={(e) => {
                    setNameUa(e.target.value),
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
                  value={nameEn}
                  setTranslatedValue={translatorHandleEn}
                  onChange={(e) => {
                    setNameEn(e.target.value),
                      setValue('name.en', e.target.value);
                  }}
                  translateValue={nameUa}
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
                  value={namePl}
                  setTranslatedValue={translatorHandlePl}
                  translateValue={nameUa}
                  onChange={(e) => {
                    setNamePl(e.target.value),
                      setValue('name.pl', e.target.value);
                  }}
                  name="testimonialsDataList namePl"
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="role"
              rules={testimonialValidateOptions.name}
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
                  value={reviewUa}
                  onChange={(e) => {
                    setReviewUa(e.target.value),
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
                  value={reviewEn}
                  setTranslatedValue={translatorHandleTextEn}
                  onChange={(e) => {
                    setReviewEn(e.target.value),
                      setValue('review.en', e.target.value);
                  }}
                  translateValue={reviewUa}
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
                  value={reviewPl}
                  setTranslatedValue={translatorHandleTextPl}
                  translateValue={reviewUa}
                  onChange={(e) => {
                    setReviewPl(e.target.value),
                      setValue('review.pl', e.target.value);
                  }}
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
          <SingleSlide slideData={previewData} lang={curLang} />
        </div>
      )}
    </div>
  );
};
