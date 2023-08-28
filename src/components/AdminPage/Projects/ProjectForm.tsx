'use client';

import { useState } from 'react';
import { ProjectFormTabs } from './ProjectFormTabs';

export const ProjectForm = () => {
  const [mode, setMode] = useState<'description' | 'members'>('description');

  const handleModeToggle = () => {
    setMode(mode === 'description' ? 'members' : 'description');
  };

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        Додати проєкт
      </h2>

      <ProjectFormTabs mode={mode} setMode={setMode} />
    </section>
  );
};
