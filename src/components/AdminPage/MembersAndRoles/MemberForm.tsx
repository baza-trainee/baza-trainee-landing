'use client';

import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';

import { FormBtns, TextInputField } from '@/components/atomic';

import { IMember, TTeamMemberBio } from '@/types';
import { TMemberFormInput, TMemberFormProps } from './types';
import { memberValidateOptions } from './validateOptions';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';

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
  const { handleTranslate } = useTranslator();

  const { membersData, createMember, updateMember } = useMembersSWR();
  const members = membersData?.results;

  const valuesIfItEditedMember = createOptions(memberId, members);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TMemberFormInput>(valuesIfItEditedMember);

  const translateToEn = () => {
    handleTranslate(watch().nameUk, 'en').then((res) => {
      setValue('nameEn', res);
    });
  };

  const translateToPl = () => {
    handleTranslate(watch().nameUk, 'pl').then((res) =>
      setValue('namePl', res)
    );
  };

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
      createMember(member)?.then((res) => {
        if (res && !!addMemberNComeback) {
          addMemberNComeback(res);
        }
      });
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
              handleTranslate={translateToEn}
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
              handleTranslate={translateToPl}
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
