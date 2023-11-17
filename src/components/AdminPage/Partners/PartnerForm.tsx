'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { partnerValidateOptions } from './validateOptions';

import { TPartnerFormInputs, TPartnerReq } from '@/types';

import { usePartnersSWR } from '@/hooks/SWR/usePartnersSWR';

import { FileInput, FormBtns } from '@/components/atomic';
import { TextInputField } from '@/components/atomic/inputs/TextInputField';

export const PartnerForm = ({ partnerId }: { partnerId?: string }) => {
  const isEditMode = !!partnerId;
  const router = useRouter();

  const { createPartner, updatePartner, getPartnerById } = usePartnersSWR();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TPartnerFormInputs>({ mode: 'onChange' });

  const cancelAction = () => router.back();

  useEffect(() => {
    if (!isEditMode) return;

    const currPartner = getPartnerById(partnerId);
    if (!currPartner) return;

    setValue('name', currPartner.name);
    setValue('homeUrl', currPartner.homeUrl);
  }, []);

  const onSubmit: SubmitHandler<TPartnerFormInputs> = async (data) => {
    const partnerBody: TPartnerReq = {
      name: data.name,
      homeUrl: data.homeUrl,
      file: data.partnerImg[0], // TODO: when upd item ??
    };

    if (isEditMode) {
      await updatePartner(partnerId, partnerBody).then(cancelAction);
    } else {
      await createPartner(partnerBody).then(cancelAction);
    }
  };

  return (
    <div className="flex max-w-[1102px] justify-between ">
      <div className="max-w-[1050px] flex-1">
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="flex flex-wrap gap-[2.5rem] bg-base-dark px-4 py-[2.8rem]">
            <Controller
              name="name"
              rules={partnerValidateOptions.name}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="uk"
                  title="Назва партнера"
                  placeholder="Введіть назву"
                  errorText={errors.name?.message}
                />
              )}
            />

            <FileInput
              name="partnerImg"
              title="Логотип"
              rules={partnerValidateOptions.partnerImg}
              control={control}
              accept="image/*"
              placeholder="Завантажте зображення"
            />

            <Controller
              name="homeUrl"
              rules={partnerValidateOptions.homeUrl}
              control={control}
              render={({ field }) => (
                <TextInputField
                  {...field}
                  inputType="en"
                  title="Сайт партнера"
                  placeholder="Додайте посилання"
                  errorText={errors.homeUrl?.message}
                />
              )}
            />
          </div>

          <FormBtns {...{ isEditMode, cancelAction }} />
        </form>
      </div>
    </div>
  );
};
