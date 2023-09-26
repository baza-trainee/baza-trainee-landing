'use client';

import { useRouter } from 'next/navigation';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

import {
  CheckboxInput,
  ComplexityInput,
  DateInput,
  FileInput,
  FormBtns,
  TextInputField,
} from '@/components/atomic';

import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
import { TProject, TProjectRequest } from '@/types';
import { convertDate } from '@/utils/formatDate';
import { useEffect } from 'react';
import { ProjectPreview } from './ProjectPreview';
import { projectValidateOptions } from './projectValidateOptions';
import { TFormInput } from './types';

const rowStyle = 'flex gap-10 rounded-md bg-base-dark px-5 py-10 shadow-md';

const defaultValues: TFormInput = {
  nameUk: '',
  nameEn: '',
  namePl: '',
  projectImg: [],
  deployUrl: '',
  isTeamRequired: false,
  creationDate: new Date().toISOString().split('T')[0],
  launchDate: '',
  complexity: 1,
  // teamMembers?: TTeamMember[] ,
};

const createFieldValues = (project: TProject | undefined) => {
  const emptyFields: TFormInput = {
    nameUk: '',
    nameEn: '',
    namePl: '',
    projectImg: [],
    deployUrl: '',
    isTeamRequired: false,
    creationDate: new Date().toISOString().split('T')[0],
    launchDate: '',
    complexity: 1,
    // teamMembers?: TTeamMember[] ,
  };

  if (!project) return emptyFields;

  // console.log(convertDate.toYYYYMMDD(project.creationDate));
  const fieldValues = {
    // ...emptyFields,
    nameUk: project.title.ua,
    nameEn: project.title.en,
    namePl: project.title.pl,
    projectImg: [new File([], project.imageUrl, { type: 'for-url' })],
    deployUrl: project.deployUrl,
    isTeamRequired: project.isTeamRequired,
    creationDate: convertDate.toYYYYMMDD(+project.creationDate),
    launchDate: convertDate.toYYYYMMDD(+project.launchDate),
    complexity: +project.complexity,
    // teamMembers?: TTeamMember[] |
  };

  // const img = await downloadImageAsFile(project.imageUrl);
  // fieldValues.projectImg[0] = img ? img : new File([], project.imageUrl);

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

const ProjectForm = ({ projectId }: { projectId?: string }) => {
  const router = useRouter();

  const { handlerCreateProject } = useProjectsSWR();
  const { projectByIdData, handlerUpdateProject } =
    useProjectsByIdSWR(projectId);

  // const projects = projectsData?.results;

  // const projectToEdit = (() => {
  //   if (projects && id) {
  //     return projects.find((m) => m._id === id);
  //   }
  // })();
  // const valuesEditedProject = createOptions(projects, id);

  // const fieldValues = useMemo(() => createFieldValues(projectToEdit), [id]);

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<TFormInput>({
    mode: 'onSubmit',
    // defaultValues: createFieldValues(projectToEdit),
    defaultValues,
  });

  // console.log('err >>', isError);
  useEffect(() => {
    if (projectId && projectByIdData) {
      setValue('nameUk', projectByIdData.title.ua);
      setValue('nameEn', projectByIdData.title.en);
      setValue('namePl', projectByIdData.title.pl);
      setValue('projectImg', [
        new File([], projectByIdData.imageUrl, { type: 'for-url' }),
      ]);
      setValue('deployUrl', projectByIdData.deployUrl);
      setValue('isTeamRequired', projectByIdData.isTeamRequired);
      setValue(
        'creationDate',
        convertDate.toYYYYMMDD(+projectByIdData.creationDate)
      );
      setValue(
        'launchDate',
        convertDate.toYYYYMMDD(+projectByIdData.launchDate)
      );
      setValue('complexity', +projectByIdData.complexity);
    }

    setFocus('nameUk');
  }, [projectId, projectByIdData]);

  // console.log("w",watch("projectImg"),"v", getValues("projectImg"));

  const currentValues = watch(); // TODO: this component is rerendered each time when const is changed. to investigate.

  // console.log('currentValues >>', currentValues.launchDate);

  const onSubmit: SubmitHandler<TFormInput> = async (data) => {
    // console.log('asdasd', data.launchDate);

    const preparedProject: TProjectRequest = {
      title: {
        en: data.nameEn,
        pl: data.namePl,
        ua: data.nameUk,
      },
      deployUrl: data.deployUrl,
      isTeamRequired: !!data.isTeamRequired,
      creationDate: convertDate.toMsec(data.creationDate),
      launchDate: convertDate.toMsec(data.launchDate),
      complexity: data.complexity,
      teamMembers: [
        {
          teamMember: '64f58b9819ce66683d7d84bf',
          teamMemberRole: '64a712d4db445f869fd0e187',
        },
        {
          teamMember: '64b934b8126c025840d1641f',
          teamMemberRole: '64a712cbdb445f869fd0e185',
        },
      ],
    };

    if (data.projectImg?.length && data.projectImg[0]?.size > 0) {
      preparedProject.file = data.projectImg[0];
    }

    if (projectByIdData) {
      // console.log('data >>', data, 'subm >>', preparedProject);
      
      handlerUpdateProject(preparedProject);
      // console.log('upd >>', preparedProject);
    } else {
      handlerCreateProject(preparedProject);
      console.log('create >>', preparedProject);
    }

    router.replace('.');
  };
  
  const handleResetProjectForm = () => {
    reset(defaultValues);
    router.replace('.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-[109rem] grid-cols-3 gap-9">
        <div className={`${rowStyle} col-span-3`}>
          <Controller
            name="nameUk"
            rules={projectValidateOptions.name}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="uk"
                title="Назва проєкту"
                placeholder="Введіть назву"
                errorText={errors.nameUk?.message}
              />
            )}
          />
          <Controller
            name="nameEn"
            rules={projectValidateOptions.name}
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
            rules={projectValidateOptions.name}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="pl"
                errorText={errors.namePl?.message}
              />
            )}
          />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <Controller
            name="creationDate"
            rules={{ required: 'Оберіть дату' }}
            control={control}
            render={({ field }) => (
              <DateInput
                {...field}
                title="Старт проєкту"
                placeholder="Оберіть дату"
                errorText={errors.creationDate?.message}
              />
            )}
          />
          <Controller
            name="launchDate"
            // rules={{ required: 'Оберіть дату' }}
            control={control}
            render={({ field }) => (
              <DateInput
                {...field}
                title="Дата завершення проєкту"
                placeholder="Оберіть дату"
                // errorText={errors.launchDate?.message}
              />
            )}
          />
        </div>

        <div className="col-span-1 row-span-3 shadow-md">
          <ProjectPreview currentValues={currentValues} />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <Controller
            name="isTeamRequired"
            control={control}
            render={({ field }) => (
              <CheckboxInput
                {...field}
                placeholder="Формування команди"
                title="Стан"
              />
            )}
          />
          <Controller
            name="complexity"
            control={control}
            render={({ field }) => (
              <ComplexityInput {...field} title="Оберіть складність проєкту" />
            )}
          />
        </div>

        <div className={`${rowStyle} col-span-2`}>
          <Controller
            name="deployUrl"
            // rules={projectValidateOptions.name}
            control={control}
            render={({ field }) => (
              <TextInputField
                {...field}
                inputType="uk"
                title="Адреса сайту"
                placeholder="Вкажіть адресу сайту"
                // errorText={errors.deployUrl?.message}
              />
            )}
          />

          {/* <Controller
            name="projectImg"
            rules={{
              ...projectValidateOptions.img,
              required: id ? false : 'Додайте зображення проєкту',
            }}
            control={control}
            render={({ field }) => (
              <FileInput
                {...field}
                accept="image/*"
                placeholder="Завантажте зображення"
                title="Обкладинка"
                errorText={errors.projectImg?.message}
              />
            )}
          /> */}
          <FileInput
            {...register('projectImg', {
              ...projectValidateOptions.img,
              required: projectId ? false : 'Додайте зображення проєкту',
            })}
            accept="image/*"
            placeholder="Завантажте зображення"
            title="Обкладинка"
            errorText={errors.projectImg?.message}
          />
        </div>
      </div>

      <FormBtns isEditMode={!!projectId} cancelAction={handleResetProjectForm} />
    </form>
  );
};

export { ProjectForm };

