'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  defaultValues,
  emptyLngs,
  initProjectData, // TODO:  del?
} from './initFormData';
import { extractMembersId, prepareProject } from './projectUtils';
import { IFormContext, TFormInput, TProvider } from './types';

import {
  TMemberBioResp,
  TMemberResp,
  TMemberRoleResp,
  TProjectReq,
} from '@/types';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { useTranslator } from '@/hooks/SWR/useTranslatorSWR';

import { convertDate } from '@/utils/formatDate';

const ProjectFormContext = createContext<IFormContext>({} as IFormContext);

export const useProjectFormContext = () => useContext(ProjectFormContext);

export const ProjectFormProvider = ({ children, projectId }: TProvider) => {
  const { createProject, getProjectById, updateProject } = useProjectsSWR();
  const { handleTranslate } = useTranslator();

  const isEditMode = !!projectId;

  const [teamMemberData, setTeamMemberData] = useState<TMemberResp[]>([]);

  const addTeamMember = (newMember: TMemberBioResp) => {
    const updatedTeamMembers = [
      ...teamMemberData,
      { teamMember: newMember, teamMemberRole: { _id: '', name: emptyLngs } },
    ];
    setTeamMemberData(updatedTeamMembers);
  };

  const updTeamMemberRole = (
    memberId: string,
    oldRoleId: string,
    newRole: TMemberRoleResp
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
    handleSubmit,
    getValues,
    setFocus,
    setValue,
    control,
    formState: { errors },
  } = useForm<TFormInput>({ defaultValues, mode: 'onChange' });

  const translateField = (field: keyof TFormInput, lang: 'en' | 'pl') => {
    handleTranslate(getValues().nameUk, lang).then((res) => {
      setValue(field, res);
    });
  };

  const onSubmit: SubmitHandler<TFormInput> = async (data, e) => {
    const preparedProject: TProjectReq = {
      ...prepareProject(data),
      teamMembers: extractMembersId(teamMemberData),
    };

    if (data.projectImg?.length && data.projectImg[0]?.size > 0) {
      preparedProject.file = data.projectImg[0];
    }

    isEditMode
      ? await updateProject(projectId, preparedProject).then(cancelAction)
      : await createProject(preparedProject).then(cancelAction);
  };

  // check fetched members for empty fields
  useEffect(() => {
    if (!isEditMode) return;

    const projectDataById = getProjectById(projectId);
    if (!projectDataById) return;

    const checkedData = projectDataById.teamMembers.filter(
      (item) => item.teamMember && item.teamMemberRole
    );

    setTeamMemberData(checkedData);
  }, []);

  useEffect(() => {
    setFocus('nameUk');

    if (!isEditMode) return;

    const projectDataById = getProjectById(projectId);
    if (!projectDataById) return;

    const {
      title,
      deployUrl,
      isTeamRequired,
      creationDate,
      launchDate,
      complexity,
    } = projectDataById;

    setValue('nameUk', title.ua);
    setValue('nameEn', title.en);
    setValue('namePl', title.pl);
    setValue('deployUrl', deployUrl);
    setValue('isTeamRequired', isTeamRequired);
    setValue('creationDate', convertDate.toYYYYMMDD(creationDate));
    setValue('launchDate', convertDate.toYYYYMMDD(launchDate));
    setValue('complexity', +complexity);
  }, []);

  const contextValue: IFormContext = {
    projectId,
    isEditMode,
    teamMemberData,
    handleSubmit,
    onSubmit,
    cancelAction,
    addTeamMember,
    updTeamMemberRole,
    deleteMember,
    translateField,
    control,
    errors,
  };

  return (
    <ProjectFormContext.Provider value={contextValue}>
      {children}
    </ProjectFormContext.Provider>
  );
};
