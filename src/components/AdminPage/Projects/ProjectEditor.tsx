'use client';

import { useState } from 'react';

import { ProjectEditorTabs } from './ProjectEditorTabs';
import { TTabsMode } from './types';
import { ProjectForm } from './ProjectForm';
import { useParams } from 'next/navigation';

export const ProjectEditor = () => {
  const { id } = useParams();
  const separatedId = typeof id === 'string' ? id : undefined;
  
  const [tabsMode, setTabsMode] = useState<TTabsMode>('description');
  const [membersList, setMembersList] = useState([]);

  return (
    <section className="mx-[2.4rem] my-[3.2rem] min-w-[110rem]">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        Додати проєкт
      </h2>

      <ProjectEditorTabs tabsMode={tabsMode} setTabsMode={setTabsMode} />

      <div className="mb-12 mt-9 w-full">
        <ProjectForm />
      </div>
    </section>
  );
};
