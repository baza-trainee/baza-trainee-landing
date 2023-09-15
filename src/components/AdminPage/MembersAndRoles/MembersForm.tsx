'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';

import { TextInputField, FormBtns } from '@/components/atomic';

import { IMember } from '@/types';

type TFormInput = {
  nameUk: string;
  nameEn: string;
  namePl: string;
  linkedin: string;
};

const fieldOptions = {
  required: 'Введіть прізвище та ім’я',
  minLength: {
    value: 5,
    message: 'Мінімальна довжина поля 5 символів',
  },
  maxLength: {
    value: 75,
    message: 'Максимальна довжина поля 75 символів',
  },
  pattern: {
    value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї ]+$/,
    message: 'Введіть коректне прізвище та ім’я',
  },
};

const linkedinOptions = {
  required: 'Введіть посилання на профіль Linkedin',
  pattern: {
    value: /^(https:\/\/(www\.)?)?linkedin\.com/i,
    message: 'Введіть коректне посилання на профіль Linkedin',
  },
};

const createOptions = (
  id: string | undefined,
  members: IMember[] | undefined
) => {
  if (!members || !id) return;

  const member = members.find((m) => m._id === id);

  if (!member) return;

  return {
    defaultValues: {
      nameUk: member.name.ua,
      nameEn: member.name.en,
      namePl: member.name.pl,
      linkedin: member.profileUrl,
    },
  };
};

export const MembersForm = ({ id }: { id?: string }) => {
  const router = useRouter();

  const { membersData, handlerCreateMember, handlerUpdateMember } =
    useMembersSWR();
  const members = membersData?.results;

  const valuesIfItEditedMember = createOptions(id, members);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TFormInput>(valuesIfItEditedMember);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const member: IMember = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      profileUrl: data.linkedin,
    };

    if (id) {
      handlerUpdateMember(id, member);
    } else {
      handlerCreateMember(member);
    }

    router.replace('.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[105rem] grid-cols-3 gap-10 px-5 py-11">
        <TextInputField
          inputType="uk"
          title="Прізвище та ім’я"
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

        <TextInputField
          title="Linkedin"
          {...register('linkedin', linkedinOptions)}
          errorText={errors.linkedin?.message}
        />
      </div>

      <FormBtns disabled={!isValid} isEditMode={!!id} />
    </form>
  );
};
