'use client';

import { useEffect, useState } from 'react';

import { projects } from './projects';

import {
  ContainerMaxW1200,
  MoreProjectsButton,
  SearchBar,
} from '@/components/atomic';
import { ProjectCard } from '@/components/ProjectCard';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { TProjectResp } from '@/types';

let ProjectsCountOnFirstLoad = 9;
let ProjectsLoadMore = 3;

const handleResize = () => {
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
};

export const Projects = ({ lang }: { lang: TLandingLanguage }) => {
  const { projectsData, searchProject, changePage, changeLimit } =
    useProjectsSWR();

  const [visibleProjects, setVisibleProjects] = useState<TProjectResp[]>(
    projects.slice(0, handleResize())
  );

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

  const animateDelay = (index: number) => {
    const delay =
      visibleProjects.length > ProjectsCountOnFirstLoad
        ? index - visibleProjects.length + ProjectsLoadMore
        : index;
    return delay;
  };
  const filteredProjects = projects;
  const dict = dictionaries[lang];

  const { navbar } = dict || {};
  const { noProjects } = dict || {};

  return (
    <section id="projects">
      <ContainerMaxW1200 className="flex-col items-center gap-[3.2rem]">
        <h3 className="text-[3.8rem] font-bold">{navbar?.projects}</h3>

        <div className="lg:self-start">
          <SearchBar handleSearch={searchProject} />
        </div>

        {filteredProjects.length === 0 && (
          <h3 className="text-[3.8rem]">{noProjects}</h3>
        )}

        <ul className="grid grid-cols-1 gap-[1.6rem] md:grid-cols-2 md:gap-[2rem] xl:w-full xl:grid-cols-3 xl:gap-[3.2rem]">
          {visibleProjects.map((project: TProjectResp, index: number) => (
            <ProjectCard
              lang={lang}
              key={project._id}
              project={project}
              animationDelay={animateDelay(index)}
              coverImgUrl={project.imageUrl}
            />
          ))}
        </ul>
        {projects.length > visibleProjects.length && (
          <MoreProjectsButton lang={lang} onClick={loadMore} />
        )}
      </ContainerMaxW1200>
    </section>
  );
};
