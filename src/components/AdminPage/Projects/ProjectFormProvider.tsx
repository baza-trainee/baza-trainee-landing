'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

import {
    TProjectRequest,
    TTeamMember,
    TTeamMemberBio,
    TTeamMemberRole,
} from '@/types';

import { convertDate } from '@/utils/formatDate';
import {
  defaultValues, emptyLngs,
  initProjectData // TODO:  del?
} from './initFormData';
import { extractMembersId, prepareProject } from './projectUtils';
import { IFormContext, TFormInput, TProvider } from './types';

const ProjectFormContext = createContext<IFormContext>({} as IFormContext);

export const useProjectFormContext = () => useContext(ProjectFormContext);

export const ProjectFormProvider = ({ children, projectId }: TProvider) => {
  const { createProject, getProjectById, updateProject } =
    useProjectsSWR();

  const projectByIdData = projectId ? getProjectById(projectId) : undefined;
  const isEditMode = !!projectId && !!projectByIdData;

  const [teamMemberData, setTeamMemberData] = useState<TTeamMember[]>(
    projectByIdData?.teamMembers || initProjectData.teamMembers
  );

  const addTeamMember = (newMember: TTeamMemberBio) => {
    const updatedTeamMembers = [
      ...teamMemberData,
      { teamMember: newMember, teamMemberRole: { _id: '', name: emptyLngs } },
    ];
    setTeamMemberData(updatedTeamMembers);
  };

  const updTeamMemberRole = (
    memberId: string,
    oldRoleId: string,
    newRole: TTeamMemberRole
  ) => {
    const updatedTeamMembers = teamMemberData.map((item) =>
      item.teamMember._id === memberId && item.teamMemberRole._id === oldRoleId
        ? { ...item, teamMemberRole: newRole }
        : item
    );
    setTeamMemberData(updatedTeamMembers);
  };

  const deleteMember = (memberId: string) => {
    const updatedTeamMembers = teamMemberData.filter(
      (item) => item.teamMember._id !== memberId
    );
    setTeamMemberData(updatedTeamMembers);
  };

  const router = useRouter();
  const cancelAction = () => router.replace('.');

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    setValue,
    control,
    formState: { errors },
  } = useForm<TFormInput>({
    mode: 'onSubmit',
    defaultValues,
  });

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    const preparedProject: TProjectRequest = {
      ...prepareProject(data),
      teamMembers: extractMembersId(teamMemberData),
    };

    if (data.projectImg?.length && data.projectImg[0]?.size > 0) {
      preparedProject.file = data.projectImg[0];
    }

    isEditMode
      ? updateProject(projectId, preparedProject)
      : createProject(preparedProject);

    cancelAction();
  };

  useEffect(() => {
    if (isEditMode) {
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
        convertDate.toYYYYMMDD(projectByIdData.creationDate)
      );
      setValue(
        'launchDate',
        convertDate.toYYYYMMDD(projectByIdData.launchDate)
      );
      setValue('complexity', +projectByIdData.complexity);
    }

    setFocus('nameUk');
  }, [isEditMode]);

  const contextValue: IFormContext = {
    isEditMode,
    teamMemberData,
    register,
    handleSubmit,
    onSubmit,
    cancelAction,
    addTeamMember,
    updTeamMemberRole,
    deleteMember,
    watch,
    control,
    errors,
  };

  return (
    <ProjectFormContext.Provider value={contextValue}>
      {children}
    </ProjectFormContext.Provider>
  );
};
