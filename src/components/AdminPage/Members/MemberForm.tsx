'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useMembersSWR } from '@/hooks/SWR/useMembersSWR';

import { AdminPanelButton, TextInputField } from '@/components/atomic';
import { IMember } from '@/types';
import { paintedLog } from '@/utils/errorHandler';

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

export const MemberForm = ({ id }: { id?: string }) => {
  const router = useRouter();

  const {
    data: members,
    handlerCreateMember,
    handlerUpdateMember,
  } = useMembersSWR();

  const valuesIfIsAreEditedMember = createOptions(id, members);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>(valuesIfIsAreEditedMember);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const member: IMember = {
      name: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      profileUrl: data.linkedin,
    };

    try {
      if (id) {
        await handlerUpdateMember(id, member);
      } else {
        await handlerCreateMember(member);
      }

      router.replace('.');
    } catch (e) {
      paintedLog('Submit member error >>', e);
    }
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

      <div className="mt-14 flex gap-7">
        <AdminPanelButton type="submit">Зберегти зміни</AdminPanelButton>
        <Link href=".">
          <AdminPanelButton variant="secondary">Скасувати</AdminPanelButton>
        </Link>
      </div>
    </form>
  );
};
