import { projects } from '@/components/MainPage/Projects/projects';
import { ProjectCard } from '@/components/MainPage/Projects/ProjectCard';
import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { ButtonsOverlay } from './ButtonsOverlay';

import { IProject } from '@/types';

export const AdminPageProjects = () => {
  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[4.4rem] text-[3.2rem] font-bold">Проєкти</div>

      {projects.length === 0 && (
        <h3 className="text-[3.8rem]">Sorry! There are no projects.</h3>
      )}

      <ul className="flex w-full flex-wrap gap-[2.4rem]">
        <li className="flex-center w-[37.8rem]">
          <AdminPanelButton icon={<PlusIcon />} variant="secondary">
            Додати проєкт
          </AdminPanelButton>
        </li>

        {projects.map((project: IProject) => (
          <ButtonsOverlay key={project._id}>
            <ProjectCard project={project} />
          </ButtonsOverlay>
        ))}
      </ul>
    </section>
  );
};
