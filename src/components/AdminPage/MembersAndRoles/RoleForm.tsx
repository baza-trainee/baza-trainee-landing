'use client';

import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';

import { FormBtns, TextInputField } from '@/components/atomic';

import { IRole } from '@/types';

type TFormInput = {
  nameUk: string;
  nameEn: string;
  namePl: string;
};

const fieldOptions = {
  required: 'Введіть назву',
  minLength: {
    value: 5,
    message: 'Мінімальна довжина поля 5 символів',
  },
  maxLength: {
    value: 50,
    message: 'Максимальна довжина поля 25 символів',
  },
  pattern: {
    value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻа-яА-ЯҐґЄєІіЇї\s\d'’-]+$/,
    message: 'Введіть коректну назву',
  },
};

const createOptions = (id: string | undefined, roles: IRole[] | undefined) => {
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
  const router = useRouter();

  const { rolesData, handlerCreateRole, handlerUpdateRole } = useRolesSWR();
  const roles = rolesData?.results;

  const valuesIfItEditedRole = createOptions(roleId, roles);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormInput>(valuesIfItEditedRole);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const role = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
    };

    if (roleId) {
      handlerUpdateRole(roleId, role);
    } else {
      handlerCreateRole(role);
    }

    router.replace('.');
  };

  const handleResetRoleForm = () => {
    reset({ nameUk: '', nameEn: '', namePl: '' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[105rem] grid-cols-3 gap-10 px-5 py-11">
        <Controller
          name="nameUk"
          rules={fieldOptions}
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
          rules={fieldOptions}
          control={control}
          render={({ field }) => (
            <TextInputField
              {...field}
              inputType="en"
              errorText={errors.nameEn?.message}
            />
          )}
        />

        <Controller
          name="namePl"
          rules={fieldOptions}
          control={control}
          render={({ field }) => (
            <TextInputField
              {...field}
              inputType="pl"
              errorText={errors.namePl?.message}
            />
          )}
        />
      </div>

      <FormBtns isEditMode={!!roleId} cancelAction={handleResetRoleForm} />
    </form>
  );
};
