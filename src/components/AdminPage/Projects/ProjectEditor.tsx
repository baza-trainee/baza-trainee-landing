'use client';

import { useEffect, useState } from 'react';

import { ProjectEditorTabs } from './ProjectEditorTabs';
import { TTabsMode, TTeamMemberRequest } from './types';
import { ProjectForm } from './ProjectForm';
import { useParams } from 'next/navigation';
import { ProjectTeamList } from './ProjectTeamList';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { TProject } from '@/types';
import { extractMembersId } from './projectUtils';

export const ProjectEditor = () => {
  const [tabsMode, setTabsMode] = useState<TTabsMode>('description');
  const { id } = useParams();
  const separatedId = typeof id === 'string' ? id : undefined;

  const { projectsData } = useProjectsSWR();
  const projects = projectsData?.results;

  const [updatedProject, setUpdatedProject] = useState<TProject>();
  const [membersList, setMembersList] = useState<TTeamMemberRequest[]>();

  const handlerMembersList = (
    action: 'add' | 'remove' | 'updateRole',
    memberId: string,
    roleId: string
  ) => {
    setMembersList((prevMembers) => {
      if (prevMembers) {
        switch (action) {
          case 'add':
            return [
              ...prevMembers,
              { teamMember: memberId, teamMemberRole: roleId },
            ];

          case 'remove':
            return prevMembers.filter(
              (member) => member.teamMember !== memberId
            );

          case 'updateRole':
            return prevMembers.map((member) =>
              member.teamMember === memberId
                ? { ...member, teamMemberRole: roleId }
                : member
            );

          default:
            return prevMembers;
        }
      }
    });
  };

  useEffect(() => {
    if (projects && id) {
      const foundedProject = projects.find((m) => m._id === separatedId);

      if (foundedProject) {
        setUpdatedProject(foundedProject);
        setMembersList(extractMembersId(foundedProject.teamMembers));
      }
    }
  }, [projects && id]);

  const handleUpdateProject = (project: TProject) => {
    setUpdatedProject({ ...updatedProject, ...project });
  };

  const title = id ? 'Редагувати проєкт' : 'Додати проєкт';
  // const [membersList, setMembersList] = useState([]);

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-[114.3rem]">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        {title}
      </h2>

      <ProjectEditorTabs {...{ tabsMode, setTabsMode }} />

      <div className="mb-12 mt-9 w-full">
        {tabsMode === 'description' ? (
          <ProjectForm projectToEdit={updatedProject} />
        ) : (
          <ProjectTeamList
            teamMembers={updatedProject?.teamMembers}
            handleUpdateProject={handleUpdateProject}
          />
        )}
      </div>
    </section>
  );
};
