'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

import {
  CheckboxInput,
  ComplexityInput,
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';

import { IProject, TProjectRequest } from '@/types';
import { TFormInput } from './types';

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
    formState: { errors, isValid },
  } = useForm<TFormInput>(valuesIfItEditedRole);
  // console.log('val >>', isValid, errors);

  // console.log('state >>', isValid);
  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    console.log('data >>', data);
    const project: TProjectRequest = {
      title: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      file: data.file,
      deployUrl: data.deployUrl,
      isTeamRequired: !!data.isTeamRequired,
      creationDate: new Date(data.creationDate).getTime(),
      launchDate: new Date(data.launchDate || 0).getTime(),
      complexity: +data.complexity,
      teamMembers: [],
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
          <DateInput
            {...register('creationDate', { required: 'Оберіть дату' })}
            value={''}
            title="Старт проєкту"
            placeholder="Оберіть дату"
            errorText={errors.creationDate?.message}
          />
          <DateInput
            {...register('launchDate')}
            value={''}
            title="Дата завершення проєкту"
            placeholder="Оберіть дату"
          />
        </div>

        <div className="col-span-2 flex gap-10">
          <CheckboxInput
            {...register('isTeamRequired')}
            placeholder="Формування команди"
            title="Стан"
          />
          <ComplexityInput
            {...register('complexity')}
            title="Оберіть складність проєкту"
          />
        </div>

        <div className="col-span-2 flex gap-10">
          <TextInputField
            {...register('deployUrl')}
            // value={''}
            placeholder="Вкажіть адресу сайту"
            title="Адреса сайту"
          />
          <FileInput
            {...register('file')}
            placeholder="Завантажте зображення"
            title="Обкладинка"
          />
        </div>
      </div>

      <FormBtns disabled={!isValid} isEditMode={!!id} />
    </form>
  );
};
