'use client';

import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';

import { FormBtns, TextInputField } from '@/components/atomic';

import { IMember, TTeamMemberBio } from '@/types';

type TMemberForm = {
  memberId?: string;
  addMemberNComeback?: (newMember: TTeamMemberBio) => void;
};

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

export const MemberForm = ({ memberId, addMemberNComeback }: TMemberForm) => {
  const router = useRouter();

  const { membersData, handlerCreateMember, handlerUpdateMember } =
    useMembersSWR();
  const members = membersData?.results;

  const valuesIfItEditedMember = createOptions(memberId, members);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>(valuesIfItEditedMember);

  const cancelAction = () => router.replace('.');

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const member: IMember = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      profileUrl: data.linkedin,
    };

    if (memberId) {
      handlerUpdateMember(memberId, member);
    } else {
      handlerCreateMember(member)?.then(
        (res) => res && addMemberNComeback && addMemberNComeback(res)
      );
    }

    !addMemberNComeback && cancelAction();
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
              title="Прізвище та ім’я"
              placeholder="Введіть дані"
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

        <Controller
          name="linkedin"
          rules={linkedinOptions}
          control={control}
          render={({ field }) => (
            <TextInputField
              {...field}
              title="Linkedin"
              errorText={errors.linkedin?.message}
            />
          )}
        />
      </div>

      <FormBtns isEditMode={!!memberId} cancelAction={cancelAction} />
    </form>
  );
};
