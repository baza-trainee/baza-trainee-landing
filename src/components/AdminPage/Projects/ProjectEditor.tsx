'use client';

import { useEffect, useState } from 'react';

import { ProjectEditorTabs } from './ProjectEditorTabs';
import { TTabsMode, TTeamMemberRequest } from './types';
import { ProjectForm } from './ProjectForm';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { TProject } from '@/types';
import { extractMembersId } from './projectUtils';
import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';
import { ProjectTeamList } from './ProjectTeamList';
// import { useProjectsByIdSWR } from '@/hooks/SWR/useProjectByIdSWR';

export const ProjectEditor = ({ projectId }: { projectId?: string }) => {
  const [tabsMode, setTabsMode] = useState<TTabsMode>('description');

  useProjectsByIdSWR(projectId, true);

  // const { projectByIdData } = useProjectsByIdSWR(projectId!);

  // const { projectsData } = useProjectsSWR();
  // const projects = projectsData?.results;

  // const updateMemberRole = (roleId: string) => {
  //   const selectedRole = rolesData?.results.find(
  //     (item) => item._id === e.target.value
  //   );

  //   setSelectedRoleId(e.target.value);

  //   selectedRole &&
  //     // handlerUpdateMember({ ...member, teamMemberRole: selectedRole });
  // };

  const [updatedProject, setUpdatedProject] = useState<TProject>();
  const [membersList, setMembersList] = useState<TTeamMemberRequest[]>();

  // const handlerMembersList = (
  //   action: 'add' | 'remove' | 'updateRole',
  //   memberId: string,
  //   roleId: string
  // ) => {
  //   setMembersList((prevMembers) => {
  //     if (prevMembers) {
  //       switch (action) {
  //         case 'add':
  //           return [
  //             ...prevMembers,
  //             { teamMember: memberId, teamMemberRole: roleId },
  //           ];

  //         case 'remove':
  //           return prevMembers.filter(
  //             (member) => member.teamMember !== memberId
  //           );

  //         case 'updateRole':
  //           return prevMembers.map((member) =>
  //             member.teamMember === memberId
  //               ? { ...member, teamMemberRole: roleId }
  //               : member
  //           );

  //         default:
  //           return prevMembers;
  //       }
  //     }
  //   });
  // };

  // useEffect(() => {
  //   if (projects && id) {
  //     const foundedProject = projects.find((m) => m._id === projectId);

  //     if (foundedProject) {
  //       setUpdatedProject(foundedProject);
  //       setMembersList(extractMembersId(foundedProject.teamMembers));
  //     }
  //   }
  // }, [projects && id]);

  // const handleUpdateProject = (project: TProject) => {
  //   setUpdatedProject({ ...updatedProject, ...project });
  // };

  const title = projectId ? 'Редагувати проєкт' : 'Додати проєкт';
  // const [membersList, setMembersList] = useState([]);

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-[114.3rem]">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        {title}
      </h2>

      <ProjectEditorTabs {...{ tabsMode, setTabsMode }} />

      <div className="mb-12 mt-9 w-full">
        {tabsMode === 'description' ? (
          <ProjectForm projectId={projectId} />
        ) : (
          //     <ProjectTeamList
          //     projectId={projectId}
          //     project={projectByIdData}
          //   // teamMembers={projectByIdData?.teamMembers}
          //   // handleUpdateProject={handleUpdateProject}
          // />
          <ProjectTeamList
            projectId={projectId!}
            // handlerDeleteMember={handlerDeleteMember}
            // handlerUpdateMember={handlerUpdateMember}
          />
        )}
      </div>
    </section>
  );
};
