'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

import {
  CheckboxInput,
  ComplexityInput,
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';

import { TProject, TProjectRequest } from '@/types';
import { downloadImageAsFile } from '@/utils/imageHandler';
import { useEffect, useState } from 'react';
import { ProjectPreview } from './ProjectPreview';
import { projectValidateOptions } from './projectValidateOptions';
import { TFormInput } from './types';
import { convertDate } from '@/utils/formatDate';
import { useProjectImgSWR } from '@/hooks/SWR/useProjectImgSWR';

const rowStyle = 'flex gap-10 rounded-md bg-base-dark px-5 py-10 shadow-md';

const createFieldValues = async (
  projects: TProject[] | undefined,
  id: string | undefined
) => {
  const emptyFields: TFormInput = {
    nameUk: '',
    nameEn: '',
    namePl: '',
    projectImg: [],
    deployUrl: '',
    isTeamRequired: false,
    creationDate: '',
    launchDate: '',
    complexity: 1,
    // teamMembers?: TTeamMember[] ,
  };

  if (!projects || !id) return emptyFields;

  const currProject = projects.find((m) => m._id === id);
  if (!currProject) return emptyFields;

  const fieldValues = {
    ...emptyFields,
    nameUk: currProject.title.ua,
    nameEn: currProject.title.en,
    namePl: currProject.title.pl,
    deployUrl: currProject.deployUrl,
    isTeamRequired: currProject.isTeamRequired,
    creationDate: convertDate.toYYYYMMDD(currProject.creationDate),
    launchDate: convertDate.toYYYYMMDD(currProject.launchDate),
    complexity: currProject.complexity,
    // teamMembers?: TTeamMember[] |
  };

  const img = await downloadImageAsFile(currProject.imageUrl);
  fieldValues.projectImg[0] = img ? img : new File([], currProject.imageUrl);

  return fieldValues;
};

// const createOptions = (
//   projects: TProject[] | undefined,
//   id: string | undefined
// ) => {
//   if (!projects || !id) return;

//   const foundedProject = projects.find((m) => m._id === id);
//   if (!foundedProject) return;
//   // console.log("pro>>",project);

//   return {
//     nameUk: foundedProject.title.ua,
//     nameEn: foundedProject.title.en,
//     namePl: foundedProject.title.pl,
//     projectImg: [new File([], foundedProject.imageUrl)], // this is plug;
//     deployUrl: foundedProject.deployUrl,
//     isTeamRequired: foundedProject.isTeamRequired,
//     creationDate: convertDate.toYYYYMMDD(foundedProject.creationDate),
//     launchDate: convertDate.toYYYYMMDD(foundedProject.launchDate),
//     complexity: foundedProject.complexity,
//     // teamMembers?: TTeamMember[] |
//   };
// };

const ProjectForm = ({ id }: { id?: string }) => {
  const router = useRouter();

  const { projectsData, handlerCreateProject, handlerUpdateProject } =
    useProjectsSWR();
  const projects = projectsData?.results;

  // const valuesEditedProject = createOptions(projects, id);

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<TFormInput>({
    mode: 'onSubmit',
    defaultValues: async () => await createFieldValues(projects, id),
  });

  // console.log('err >>', isError);
  useEffect(() => {
    // if (projects && id) {
    //   const addImgIntoFileInput = async () => {
    //     const currProject = projects.find((m) => m._id === id);
    //     if (!currProject) return;

    //     const img = await downloadImageAsFile(currProject.imageUrl);
    //     if (!img) return;

    //     setValue('projectImg', [img]);

    //     // const fieldValues = {
    //     //   nameUk: currProject.title.ua,
    //     //   nameEn: currProject.title.en,
    //     //   namePl: currProject.title.pl,
    //     //   projectImg: [img],
    //     //   deployUrl: currProject.deployUrl,
    //     //   isTeamRequired: currProject.isTeamRequired,
    //     //   creationDate: convertDate.toYYYYMMDD(currProject.creationDate),
    //     //   launchDate: convertDate.toYYYYMMDD(currProject.launchDate),
    //     //   complexity: currProject.complexity,
    //     //   // teamMembers?: TTeamMember[] |
    //     // };

    //     // setValuesEditedProject(fieldValues);
    //   };
    //   addImgIntoFileInput();
    // }

    setFocus('nameUk');
  }, []);

  // console.log("w",watch("projectImg"),"v", getValues("projectImg"));

  const currentValues = watch(); // TODO: this component is rerendered each time when const is changed. to investigate.

  // console.log('currentValues >>', currentValues.creationDate);
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
      creationDate: convertDate.toMilliseconds(data.creationDate),
      launchDate: convertDate.toMilliseconds(data.launchDate!) || 0,
      complexity: data.complexity,
      // teamMembers: [],
    };

    // console.log('data >>', data, 'subm >>', project);
    // console.log('data >>', data.creationDate);

    if (id) {
      handlerUpdateProject(id, project);
    } else {
      handlerCreateProject(project);
    }

    router.replace('.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[109rem] grid-cols-3 gap-9">
        <div className={`${rowStyle} col-span-3`}>
          <TextInputField
            inputType="uk"
            title="Назва проєкту"
            placeholder="Введіть назву"
            {...register('nameUk', projectValidateOptions.name)}
            errorText={errors.nameUk?.message}
          />
          <TextInputField
            inputType="en"
            {...register('nameEn', projectValidateOptions.name)}
            errorText={errors.nameEn?.message}
          />
          <TextInputField
            inputType="pl"
            {...register('namePl', projectValidateOptions.name)}
            errorText={errors.namePl?.message}
          />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <DateInput
            {...register('creationDate', {
              required: 'Оберіть дату',
              // valueAsDate: true,
            })}
            title="Старт проєкту"
            placeholder="Оберіть дату"
            errorText={errors.creationDate?.message}
          />
          <DateInput
            {...register('launchDate', {
              // valueAsDate: true,
            })}
            title="Дата завершення проєкту"
            placeholder="Оберіть дату"
          />
        </div>

        <div className="col-span-1 row-span-3 shadow-md">
          <ProjectPreview currentValues={currentValues} />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <CheckboxInput
            {...register('isTeamRequired')}
            placeholder="Формування команди"
            title="Стан"
          />
          <ComplexityInput
            {...register('complexity', {
              valueAsNumber: true,
            })}
            title="Оберіть складність проєкту"
          />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <TextInputField
            {...register('deployUrl')}
            placeholder="Вкажіть адресу сайту"
            title="Адреса сайту"
          />
          <FileInput
            {...register('projectImg', {
              ...projectValidateOptions.img,
              required: id ? false : 'Додайте зображення проєкту',
            })}
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

export { ProjectForm };
