'use client';

import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { createImgUrl } from '@/utils/imageHandler';
import Link from 'next/link';

import { ProjectCard } from '@/components/ProjectCard';
import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { ButtonsOverlay } from './ButtonsOverlay';

import { TProject } from '@/types';

export const AdminProjects = () => {
  const { projectsData, deleteProject } = useProjectsSWR();

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

        {projectsData &&
          projectsData?.results &&
          projectsData.results.map((project: TProject) => (
            <ButtonsOverlay
              key={project._id}
              handleDelete={deleteProject}
            >
              <ProjectCard
                project={project}
                lang={'ua'}
                coverImgUrl={createImgUrl(project.imageUrl)}
                isAdminMode
              />
            </ButtonsOverlay>
          ))}
      </ul>
    </section>
  );
};
