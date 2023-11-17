'use client';

import Link from 'next/link';

import { ButtonsOverlay } from './ButtonsOverlay';

import { AdminPanelButton } from '@/components/atomic';
import { PaginationBar } from '@/components/atomic/PaginationBar';
import { PlusIcon } from '@/components/common/icons';
import { ProjectCard } from '@/components/ProjectCard';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { TProjectResp } from '@/types';
import { createImgUrl } from '@/utils/imageHandler';

export const AdminProjects = () => {
  const { projectsData, deleteProject, changePage } = useProjectsSWR();

  const projects: TProjectResp[] = projectsData?.results || [];

  return (
    <section className="mx-[2.4rem] my-[3.2rem] flex w-full flex-col">
      <h2 className="mb-[4.4rem] text-[3.2rem] font-bold text-admin-header">
        Проєкти
      </h2>

      <ul className="flex w-full flex-wrap gap-[2.4rem]">
        <li className="flex-center w-[37.8rem]">
          <Link href="/admin/projects/add">
            <AdminPanelButton icon={<PlusIcon />} variant="secondary">
              Додати проєкт
            </AdminPanelButton>
          </Link>
        </li>

        {projects.map((project: TProjectResp) => (
          <ButtonsOverlay key={project._id} handleDelete={deleteProject}>
            <ProjectCard
              project={project}
              lang="ua"
              coverImgUrl={createImgUrl(project.imageUrl)}
              isAdminMode
            />
          </ButtonsOverlay>
        ))}
      </ul>

      <div className="mt-auto">
        <PaginationBar
          className="mt-20"
          currentPage={projectsData?.pagination.currentPage || 1}
          totalPages={projectsData?.pagination.totalPages || 1}
          onPageChange={changePage}
        />
      </div>
    </section>
  );
};
