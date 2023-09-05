'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

import {
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';

import { IProject } from '@/types';

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

const createOptions = (
  id: string | undefined,
  projects: IProject[] | undefined
) => {
  if (!projects || !id) return;

  const project = projects.find((m) => m._id === id);

  if (!project) return;

  return {
    defaultValues: {
      nameUk: project.title.ua,
      nameEn: project.title.en,
      namePl: project.title.pl,
    },
  };
};

export const ProjectForm = ({ id }: { id?: string }) => {
  const router = useRouter();

  const { data, handlerCreateProject, handlerUpdateProject } = useProjectsSWR();
  const projects = data?.results;

  const valuesIfItEditedRole = createOptions(id, projects);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>(valuesIfItEditedRole);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const project: IProject = {
      title: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
    };

    if (id) {
      handlerUpdateProject(id, project);
    } else {
      handlerCreateProject(project);
    }

    router.replace('.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[105rem] grid-cols-3 gap-10 px-5 py-11">
        <div className="col-span-3 flex gap-10">
          <TextInputField
            inputType="uk"
            title="Назва проєкту"
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

        <div className="col-span-2 flex gap-10">
          <DateInput value={''} title="Старт проєкту" />
          <DateInput value={''} title="Дата завершення проєкту" />
        </div>

        <div className="col-span-2 flex gap-10">
          <div className="flex w-full items-center justify-between">
            <label htmlFor="isTeamRequired">Формування команди</label>
            <input
              type="checkbox"
              id="isTeamRequired"
              className="h-10 w-10 accent-dark"
            />
          </div>
          <DateInput value={''} title="Дата завершення проєкту" />
        </div>

        <div className="col-span-2 flex gap-10">
          <TextInputField value={''} title="Адреса сайту" />
          <FileInput title="Обкладинка" />
        </div>
      </div>

      <FormBtns isEditMode={!!id} />
    </form>
  );
};
