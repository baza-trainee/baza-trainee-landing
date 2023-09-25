'use client';
import {
  AdminTitle,
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';
import { TextAreaField } from '@/components/atomic/inputs/TextAreaField';
import { ITestimonial, ITestimonialRequest } from '@/types';
import testimonialsApi from '@/utils/API/testimonials';
import { convertDate } from '@/utils/formatDate';
import { downloadImageAsFile } from '@/utils/imageHandler';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import TestimonialPreviewCard from './TestimonialPreviewCard';
import { testimonialValidateOptions } from './testimonialValidateOptions';
import { TTestimonialFormInput } from './types';

const defaultValues: TTestimonialFormInput = {
  nameUa: '',
  nameEn: '',
  namePl: '',
  textUa: '',
  textEn: '',
  textPl: '',
  authorImg: [],
  specialization: '',
  creationDate: new Date().toISOString().split('T')[0],
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
  const [textUa, setTextUa] = useState<string>('');
  const [textEn, setTextEn] = useState<string>('');
  const [textPl, setTextPl] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [itemData, setItemData] = useState<ITestimonial>({} as ITestimonial);

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
        setTextUa(data.review.ua);
        setTextEn(data.review.en);
        setTextPl(data.review.pl);
      };
      getTestimonial();
    }
  }, [testimonialId, getById]);

  useEffect(() => {
    const setValues = async () => {
      if (itemData) {
        setValue('nameUa', itemData.name?.ua);
        setValue('nameEn', itemData.name?.en);
        setValue('namePl', itemData.name?.pl);
        setValue('textUa', itemData.review?.ua);
        setValue('textEn', itemData.review?.en);
        setValue('textPl', itemData.review?.pl);
        setValue('specialization', itemData.role);
        setValue('creationDate', convertDate.toYYYYMMDD(+itemData.date));
        setValue('authorImg', [
          new File([], itemData.imageUrl, { type: 'for-url' }),
        ]);
        setImageUrl(itemData.imageUrl);
      }
    };
    setValues();
    setFocus('nameUa');
  }, [itemData, setValue, setFocus]);

  const translatorHandleEn = (text: string, _name: string) => {
    setNameEn(text);
  };
  const translatorHandlePl = (text: string, _name: string) => {
    setNamePl(text);
  };
  const translatorHandleTextEn = (text: string, _name: string) => {
    setTextEn(text);
  };
  const translatorHandleTextPl = (text: string, _name: string) => {
    setTextPl(text);
  };

  const downloadImage = async (fileName: string) => {
    const imageFile = await downloadImageAsFile(fileName);
    return imageFile;
  };

  const currentValues = watch();

  const handleResetForm = () => {
    reset(defaultValues);
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
        ua: values.textUa,
        en: values.textEn,
        pl: values.textPl,
      },
      file: values.authorImg[0],
      role: values.specialization,
      date: new Date(values.creationDate).getTime(),
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
                  onChange={(e) => {
                    setNameEn(e.target.value),
                      setValue('nameEn', e.target.value);
                  }}
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
                  onChange={(e) => {
                    setNamePl(e.target.value),
                      setValue('namePl', e.target.value);
                  }}
                  name="testimonialsDataList namePl"
                  placeholder="Введіть ім’я"
                />
              )}
            />
            <Controller
              name="specialization"
              rules={testimonialValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  title="Спеціалізація"
                  name="testimonialsDataList specialization"
                  inputType="uk"
                  errorText={errors.specialization?.message}
                  placeholder="Введіть спеціалізацію"
                />
              )}
            />
            <Controller
              name="creationDate"
              control={control}
              rules={{ required: 'Оберіть дату' }}
              render={({ field }) => (
                <DateInput
                  {...field}
                  title="Дата"
                  placeholder="Оберіть дату"
                  errorText={errors.creationDate?.message}
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
              name="textUa"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  title="Текст"
                  name="testimonialsDataList textUa"
                  inputType="uk"
                  errorText={errors.textUa?.message}
                  value={textUa}
                  onChange={(e) => {
                    setTextUa(e.target.value),
                      setValue('textUa', e.target.value);
                  }}
                />
              )}
            />
            <Controller
              name="textEn"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  name="testimonialsDataList textEn"
                  inputType="en"
                  errorText={errors.textEn?.message}
                  value={textEn}
                  setTranslatedValue={translatorHandleTextEn}
                  onChange={(e) => {
                    setTextEn(e.target.value),
                      setValue('textEn', e.target.value);
                  }}
                  translateValue={textUa}
                />
              )}
            />
            <Controller
              name="textPl"
              rules={testimonialValidateOptions.review}
              control={control}
              render={({ field }) => (
                <TextAreaField
                  {...field}
                  name="testimonialsDataList textPl"
                  inputType="pl"
                  errorText={errors.textPl?.message}
                  value={textPl}
                  setTranslatedValue={translatorHandleTextPl}
                  translateValue={textUa}
                  onChange={(e) => {
                    setTextPl(e.target.value),
                      setValue('textPl', e.target.value);
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
      <TestimonialPreviewCard currentValues={currentValues} />
    </div>
  );
};
