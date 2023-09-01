'use client';

import { ContainerMaxW1200, MoreProjectsButton } from '@/components/atomic';
import { ProjectCard } from './ProjectCard';

import { IProject } from '@/types';
import { useEffect, useState } from 'react';
import { projects } from './projects';

/*const getProjects = async () => {
  const response = await fetch(
    'https://baza-trainee.tech/api/v1/projects',
    // `${process.env.NEXT_PUBLIC_SERVER_URL}/projects`,
    { next: { revalidate: SETTINGS.delayRevalidation } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const result: IProject[] = await response.json();

  const modResult: IProject[] = result.map((item: IProject) => {
    item.imageUrl = 'https://baza-trainee.tech/api/v1/files/' + item.imageUrl;
    return item;
  });

  return modResult;
};*/

let ProjectsCountOnFirstLoad = 9;
let ProjectsLoadMore = 3;

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(
    projects.slice(0, handleResize())
  );

  function handleResize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) {
        ProjectsCountOnFirstLoad = 3;
        ProjectsLoadMore = 2;
      } else if (width >= 768 && width < 1280) {
        ProjectsCountOnFirstLoad = 4;
        ProjectsLoadMore = 2;
      } else {
        ProjectsCountOnFirstLoad = 9;
        ProjectsLoadMore = 3;
      }
    }
    return ProjectsCountOnFirstLoad;
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loadMore = () => {
    const nextProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + ProjectsLoadMore
    );
    setVisibleProjects([...visibleProjects, ...nextProjects]);
  };
  // const [filteredProjects1, setFilteredProjects] =
  //   useState<TProjects[]>(projects);

  // const response: TProjects[] = await getProjects();
  // const filteredProjects = [...response, ...projects];
  //const filteredProjects = projects.slice(0, 9);
  const animateDelay = (index: number) => {
    const delay =
      visibleProjects.length > ProjectsCountOnFirstLoad
        ? index - visibleProjects.length + ProjectsLoadMore
        : index;
    return delay;
  };

  return (
    <section id="projects">
      <ContainerMaxW1200 className="flex-col items-center gap-[3.2rem]">
        <h3 className="text-[3.8rem] font-bold">Проєкти</h3>

        {/* <div className="lg:self-start">
          <SearchBar
          setFilteredProjects={setFilteredProjects}
          />
        </div> */}

        {visibleProjects.length === 0 && (
          <h3 className="text-[3.8rem]">Sorry! There are no projects.</h3>
        )}

        <ul className="grid grid-cols-1 gap-[1.6rem] md:grid-cols-2 md:gap-[2rem] xl:w-full xl:grid-cols-3 xl:gap-[3.2rem]">
          {visibleProjects.map((project: IProject, index: number) => (
            <ProjectCard
              key={project._id}
              project={project}
              animationDelay={animateDelay(index)}
            />
          ))}
        </ul>

        {projects.length > visibleProjects.length && (
          <MoreProjectsButton onClick={loadMore} />
        )}
      </ContainerMaxW1200>
    </section>
  );
};
