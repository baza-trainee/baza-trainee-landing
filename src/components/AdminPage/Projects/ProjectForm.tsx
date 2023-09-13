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
import { projectValidator } from './projectValidator';
import { LogoMain } from '@/components/common/icons';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const createOptions = (projects: IProject[], id: string) => {
  const project = projects.find((m) => m._id === id);

  if (!project) return;

  return {
    nameUk: project.title.ua,
    nameEn: project.title.en,
    namePl: project.title.pl,
  };
};

export const ProjectForm = ({ id }: { id?: string }) => {
  const router = useRouter();

  const { data, handlerCreateProject, handlerUpdateProject, isError } =
    useProjectsSWR();
  const projects = data?.results;

  const [projectPreviewImg, setProjectPreviewImg] = useState<File>();

  const valuesIfItEditedRole =
    projects && id ? createOptions(projects, id) : undefined;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormInput>({
    defaultValues: valuesIfItEditedRole,
    mode: 'onSubmit',
  });
  // console.log('err >>', isError);

  // console.log("w",watch("projectImg"),"v", getValues("projectImg"));

  const selectedImage = watch('projectImg');

  useEffect(() => {
    if (!selectedImage?.length) return;

    const isValidImg = projectValidator.imgOptions.validate(selectedImage);
    isValidImg && setProjectPreviewImg(selectedImage[0]);
  }, [selectedImage]);

  // console.log('projects >>', projects);
  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    const project: TProjectRequest = {
      title: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      file: data.projectImg[0],
      deployUrl: data.deployUrl,
      isTeamRequired: !!data.isTeamRequired,
      creationDate: new Date(data.creationDate).getTime(),
      launchDate: new Date(data.launchDate || 0).getTime(),
      complexity: +data.complexity,
      // teamMembers: [],
    };

    // console.log('data >>', data, 'subm >>', project);

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
            {...register('nameUk', projectValidator.nameOptions)}
            errorText={errors.nameUk?.message}
          />
          <TextInputField
            inputType="en"
            {...register('nameEn', projectValidator.nameOptions)}
            errorText={errors.nameEn?.message}
          />
          <TextInputField
            inputType="pl"
            {...register('namePl', projectValidator.nameOptions)}
            errorText={errors.namePl?.message}
          />
        </div>

        <div className="col-span-2 flex gap-10">
          <DateInput
            {...register('creationDate', { required: 'Оберіть дату' })}
            title="Старт проєкту"
            placeholder="Оберіть дату"
            errorText={errors.creationDate?.message}
          />
          <DateInput
            {...register('launchDate')}
            title="Дата завершення проєкту"
            placeholder="Оберіть дату"
          />
        </div>

        <div className="flex-center col-span-1 row-span-3 rounded-md bg-neutral-75">
          {projectPreviewImg && (
            <Image
              src={URL.createObjectURL(projectPreviewImg)} // Создаем URL изображения из выбранного файла
              alt="Выбранное изображение"
              width={300} // Здесь укажите ширину и высоту, которую вы хотите для изображения
              height={200}
            />
          )}
          <LogoMain className="h-72 w-72 text-neutral-200" />
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
            placeholder="Вкажіть адресу сайту"
            title="Адреса сайту"
          />
          <FileInput
            {...register('projectImg', projectValidator.imgOptions)}
            placeholder="Завантажте зображення"
            title="Обкладинка"
            errorText={errors.projectImg?.message}
          />
        </div>
      </div>

      <FormBtns isEditMode={!!id} />
    </form>
  );
};
