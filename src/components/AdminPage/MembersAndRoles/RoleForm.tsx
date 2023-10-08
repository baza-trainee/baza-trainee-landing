'use client';

import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { TMemberFormInput } from './types';
import { roleValidateOptions } from './validateOptions';

import { TMemberRoleResp } from '@/types';

import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';

import { FormBtns, TextInputField } from '@/components/atomic';

const createOptions = (
  id: string | undefined,
  roles: TMemberRoleResp[] | undefined
) => {
  if (!roles || !id) return;

  const role = roles.find((m) => m._id === id);

  if (!role) return;

  return {
    defaultValues: {
      nameUk: role.name.ua,
      nameEn: role.name.en,
      namePl: role.name.pl,
    },
  };
};

export const RoleForm = ({ roleId }: { roleId?: string }) => {
  const isEditMode = !!roleId;
  const router = useRouter();
  const { handleTranslate } = useTranslator();

  const { rolesData, createRole, updateRole } = useRolesSWR();
  const roles = rolesData?.results;

  const valuesIfItEditedRole = createOptions(roleId, roles);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TMemberFormInput>(valuesIfItEditedRole);

  const translateToEn = () => {
    handleTranslate(getValues().nameUk, 'en').then((res) => {
      setValue('nameEn', res);
    });
  };

  const translateToPl = () => {
    handleTranslate(getValues().nameUk, 'pl').then((res) => {
      setValue('namePl', res);
    });
  };

  const cancelAction = () => router.replace('.');

  const onSubmit: SubmitHandler<TMemberFormInput> = (data) => {
    const role = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
    };

    if (isEditMode) {
      updateRole(roleId, role);
    } else {
      createRole(role);
    }

    cancelAction();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[105rem] grid-cols-3 gap-10 px-5 py-11">
        <Controller
          name="nameUk"
          rules={roleValidateOptions.fieldUk}
          control={control}
          render={({ field }) => (
            <TextInputField
              {...field}
              inputType="uk"
              title="Назва спеціалізаціі"
              placeholder="Введіть назву"
              errorText={errors.nameUk?.message}
            />
          )}
        />

        <Controller
          name="nameEn"
          rules={roleValidateOptions.fieldEn}
          control={control}
          render={({ field }) => (
            <TextInputField
              {...field}
              inputType="en"
              handleTranslate={translateToEn}
              errorText={errors.nameEn?.message}
            />
          )}
        />

        <Controller
          name="namePl"
          rules={roleValidateOptions.fieldPl}
          control={control}
          render={({ field }) => (
            <TextInputField
              {...field}
              inputType="pl"
              handleTranslate={translateToPl}
              errorText={errors.namePl?.message}
            />
          )}
        />
      </div>

      <FormBtns {...{ isEditMode, cancelAction }} />
    </form>
  );
};
