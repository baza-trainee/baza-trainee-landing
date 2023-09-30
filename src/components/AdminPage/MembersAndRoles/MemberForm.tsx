'use client';

import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';

import { FormBtns, TextInputField } from '@/components/atomic';

import { IMember } from '@/types';
import { TMemberFormInput, TMemberFormProps } from './types';
import { memberValidateOptions } from './validateOptions';

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

export const MemberForm = ({
  memberId,
  addMemberNComeback,
}: TMemberFormProps) => {
  const router = useRouter();

  const { membersData, createMember, updateMember } = useMembersSWR();
  const members = membersData?.results;

  const valuesIfItEditedMember = createOptions(memberId, members);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TMemberFormInput>(valuesIfItEditedMember);

  const cancelAction = () => router.replace('.');

  const onSubmit: SubmitHandler<TMemberFormInput> = async (data) => {
    const member: IMember = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      profileUrl: data.linkedin,
    };

    if (memberId) {
      updateMember(memberId, member);
    } else {
      createMember(member)?.then(
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
          rules={memberValidateOptions.fieldUk}
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
          rules={memberValidateOptions.fieldEn}
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
          rules={memberValidateOptions.fieldPl}
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
          rules={memberValidateOptions.linkedinOptions}
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
