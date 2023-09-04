'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useRolesSWR } from '@/hooks/SWR/useRolesSWR';
import { paintedLog } from '@/utils/errorHandler';

import { TextInputField } from '@/components/atomic';
import { FormBtns } from './FormBtns';

import { IMember, IRole } from '@/types';

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
    value: 25,
    message: 'Максимальна довжина поля 25 символів',
  },
  pattern: {
    value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї ]+$/,
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

export const RolesForm = ({ id }: { id?: string }) => {
  const router = useRouter();

  const { data, handlerCreateRole, handlerUpdateRole } = useRolesSWR();
  const roles = data?.results;

  const valuesIfItEditedRole = createOptions(id, roles);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>(valuesIfItEditedRole);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const role: IMember = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
    };

    try {
      if (id) {
        handlerUpdateRole(id, role);
      } else {
        handlerCreateRole(role);
      }

      router.replace('.');
    } catch (e) {
      paintedLog('Submit role error >>', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[105rem] grid-cols-3 gap-10 px-5 py-11">
        <TextInputField
          inputType="uk"
          title="Назва спеціалізаціі"
          placeholder="Введіть назву"
          {...register('nameUk', fieldOptions)}
          errorText={errors.nameUk?.message}
        />

        <TextInputField
          inputType="en"
          {...register('nameEn', fieldOptions)}
          errorText={errors.nameEn?.message}
        />

        <TextInputField
          inputType="pl"
          {...register('namePl', fieldOptions)}
          errorText={errors.namePl?.message}
        />
      </div>

      <FormBtns />
    </form>
  );
};
