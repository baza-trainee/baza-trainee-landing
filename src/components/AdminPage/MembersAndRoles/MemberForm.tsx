'use client';

import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { MembersAndRolesList } from './MembersAndRolesList';
import { TMemberFormInput, TMemberFormProps } from './types';
import { memberValidateOptions } from './validateOptions';

import { FormBtns, TextInputField } from '@/components/atomic';
import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';
import { TMemberBioReq, TMemberBioResp } from '@/types';

const createOptions = (
  id: string | undefined,
  members: TMemberBioResp[] | undefined
) => {
  if (!members || !id) return;

  const member = members.find((m) => m._id === id);

  if (!member) return;

  return {
    nameUk: member.name.ua,
    nameEn: member.name.en,
    namePl: member.name.pl,
    linkedin: member.profileUrl,
  };
};

export const MemberForm = ({
  memberId,
  addMemberNComeback,
}: TMemberFormProps) => {
  const isMemberEditMode = !!memberId;
  const isProjectEditorMode = !!addMemberNComeback;
  const router = useRouter();
  const { handleTranslate } = useTranslator();

  const { membersData, createMember, updateMember, searchMember } =
    useMembersSWR();
  const members = membersData?.results;

  const valuesIfItEditedMember = createOptions(memberId, members);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<TMemberFormInput>({
    defaultValues: valuesIfItEditedMember,
    mode: 'onChange',
  });

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

  const cancelAction = () => {
    if (isProjectEditorMode) {
      addMemberNComeback();
    } else {
      router.back();
    }
  };

  const selectMember = (id: string) => {
    if (isProjectEditorMode) {
      const selectedMember = members?.find((item) => item._id === id);
      selectedMember && addMemberNComeback(selectedMember);
    }
  };

  const onSubmit: SubmitHandler<TMemberFormInput> = async (data) => {
    const member: TMemberBioReq = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      // profileUrl: data.linkedin ? data.linkedin : undefined,
    };

    if (data.linkedin) {
      member.profileUrl = data.linkedin;
    }

    if (memberId) {
      await updateMember(memberId, member).then(cancelAction);
    } else {
      await createMember(member).then((res) => {
        res && isProjectEditorMode && addMemberNComeback(res);
        cancelAction();
      });
    }
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                searchMember(e.target.value.toLowerCase().trim());
                field.onChange(e);
              }}
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

      {isProjectEditorMode && (
        <div className="mb-11 h-96 overflow-y-auto rounded-md border">
          {members?.length && (
            <MembersAndRolesList
              {...{ isProjectEditorMode, selectMember }}
              entity="members"
              showedData={members}
            />
          )}
        </div>
      )}

      <FormBtns
        isEditMode={isMemberEditMode || isProjectEditorMode}
        cancelAction={cancelAction}
      />
    </form>
  );
};
