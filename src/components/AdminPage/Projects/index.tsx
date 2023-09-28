'use client';

import Link from 'next/link';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { createImgUrl } from '@/utils/imageHandler';

import { ProjectCard } from '@/components/ProjectCard';
import { AdminPanelButton } from '@/components/atomic';
import { ButtonsOverlay } from './ButtonsOverlay';
import { PlusIcon } from '@/components/common/icons';

import { TProject } from '@/types';

export const AdminProjects = () => {
  const { projectsData, handlerDeleteProject } = useProjectsSWR();

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
              handleDelete={handlerDeleteProject}
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
