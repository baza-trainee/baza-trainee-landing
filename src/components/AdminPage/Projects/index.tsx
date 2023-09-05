'use client';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { useGlobalContext } from '@/store/globalContext';
import { networkStatusesUk } from '@/utils/errorHandler';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ProjectCard } from '@/components/ProjectCard';
import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { ButtonsOverlay } from './ButtonsOverlay';

import { IProject } from '@/types';

export const AdminProjects = () => {
  const [showedItems, setShowedItems] = useState();

  const { data: projects, handlerDeleteProject } = useProjectsSWR();

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        Проєкти
      </h2>

      <ul className="flex w-full flex-wrap gap-[2.4rem]">
        <li className="flex-center w-[37.8rem]">
          <Link href={'/admin/projects/add'}>
            <AdminPanelButton icon={<PlusIcon />} variant="secondary">
              Додати проєкт
            </AdminPanelButton>
          </Link>
        </li>

        {projects &&
          projects?.results &&
          projects.results.map((project: IProject) => (
            <ButtonsOverlay
              key={project._id}
              handleDelete={handlerDeleteProject}
            >
              <ProjectCard project={project} lang={'ua'} />
            </ButtonsOverlay>
          ))}
      </ul>
    </section>
  );
};
