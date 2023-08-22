'use client';

import { projects } from '@/components/MainPage/Projects/projects';
import { ProjectCard } from '@/components/MainPage/Projects/ProjectCard';
import { AdminPanelButton } from '@/components/atomic';
import { PlusIcon } from '@/components/common/icons';
import { ButtonsOverlay } from './ButtonsOverlay';

import { IProject } from '@/types';
import { useAPI } from '@/utils/hooks/useAPI';
import projectsApi from '@/utils/API/projects';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/store/globalContext';

export const AdminPageProjects = () => {
  const { setAlertInfo } = useGlobalContext();
  const [dispatch, data, isError] = useAPI(projectsApi.getAll);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(currentPage);
    console.log(data);
  }, [currentPage]);

  useEffect(() => {
    isError &&
      setAlertInfo({
        state: data.message,
        title: data.statusText,
        textInfo: data.status,
      });
  }, [isError]);

  return (
    <section className="mx-[2.4rem] my-[3.2rem] w-full">
      <div className="mb-[4.4rem] text-[3.2rem] font-bold">Проєкти</div>

      <ul className="flex w-full flex-wrap gap-[2.4rem]">
        <li className="flex-center w-[37.8rem]">
          <AdminPanelButton icon={<PlusIcon />} variant="secondary">
            Додати проєкт
          </AdminPanelButton>
        </li>

        {/* {Array.isArray(data?.result) &&
          data.results.length > 0 &&
          data.results.map((project: IProject) => (
            <ButtonsOverlay key={project._id}>
              <ProjectCard project={project} />
            </ButtonsOverlay>
          ))} */}

        {isError && data.error}
      </ul>
    </section>
  );
};
