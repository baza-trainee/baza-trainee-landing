'use client';

import { useState } from 'react';

import { ProjectEditorTabs } from './ProjectEditorTabs';
import { TTabsMode } from './types';
import { ProjectForm } from './ProjectForm';
import { ProjectTeamList } from './ProjectTeamList';
import { ProjectFormProvider } from './ProjectFormProvider';

export const ProjectEditor = ({ projectId }: { projectId?: string }) => {
  const [tabsMode, setTabsMode] = useState<TTabsMode>('description');

  const title = projectId ? 'Редагувати проєкт' : 'Додати проєкт';

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-[114.3rem]">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        {title}
      </h2>

      <ProjectEditorTabs {...{ tabsMode, setTabsMode }} />

      <div className="mb-12 mt-9 w-full">
        <ProjectFormProvider projectId={projectId}>
          {tabsMode === 'description' ? <ProjectForm /> : <ProjectTeamList />}
        </ProjectFormProvider>
      </div>
    </section>
  );
};
