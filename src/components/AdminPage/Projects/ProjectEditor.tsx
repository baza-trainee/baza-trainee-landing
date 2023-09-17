'use client';

import { useState } from 'react';

import { ProjectEditorTabs } from './ProjectEditorTabs';
import { TTabsMode } from './types';
import { ProjectForm } from './ProjectForm';
import { useParams } from 'next/navigation';
import { ProjectTeamList } from './ProjectTeamList';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { TProject } from '@/types';

export const ProjectEditor = () => {
  const [tabsMode, setTabsMode] = useState<TTabsMode>('description');
  const { id } = useParams();
  const separatedId = typeof id === 'string' ? id : undefined;

  const { projectsData } = useProjectsSWR();
  const projects = projectsData?.results;

  const projectToEdit = (() => {
    if (projects && id) {
      return projects.find((m) => m._id === separatedId);
    }
  })();

  const [updatedProject, setUpdatedProject] = useState<TProject | undefined>(
    projectToEdit
  );

  const handleUpdateProject = (project: TProject) => {
    setUpdatedProject({ ...updatedProject, ...project });
  };

  const title = projectToEdit ? 'Редагувати проєкт' : 'Додати проєкт';
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
