'use client';

import { useState } from 'react';

import { ProjectEditorTabs } from './ProjectEditorTabs';
import { TTabsMode } from './types';
import { ProjectForm } from './ProjectForm';

export const ProjectEditor = () => {
  const [tabsMode, setTabsMode] = useState<TTabsMode>('description');

  return (
    <section className="mx-[2.4rem] my-[3.2rem] min-w-[110rem]">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        Додати проєкт
      </h2>

      <ProjectEditorTabs tabsMode={tabsMode} setTabsMode={setTabsMode} />

      <div className='mt-9 mb-12 w-full'><ProjectForm/></div>
    </section>
  );
};
