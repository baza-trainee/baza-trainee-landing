'use client';

import { useState } from 'react';
import { projects } from './projects';
import { ContainerMaxW1200, MoreProjectsButton } from '@/components/atomic';
import { SearchBar } from './SearchBar';
import ProjectCard from './ProjectCard';
import { TProjects } from './types';

export const Projects = () => {
  const [filteredProjects, setFilteredProjects] =
    useState<TProjects[]>(projects);

  return (
    <section className="pt-48" id="projects">
      <ContainerMaxW1200 className="flex-col items-center gap-[3.2rem]">
        <h3 className="text-[3.8rem] font-bold">Проєкти</h3>

        <div className="lg:self-start">
          <SearchBar setFilteredProjects={setFilteredProjects} />
        </div>

        {filteredProjects.length === 0 && (
          <h3 className="text-[3.8rem]">Sorry! There are no projects.</h3>
        )}

        <ul className="grid grid-cols-1 gap-[1.6rem] md:grid-cols-2 md:gap-[2rem] xl:w-full xl:grid-cols-3 xl:gap-[3.2rem]">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </ul>

        {filteredProjects.length > 8 && <MoreProjectsButton />}
      </ContainerMaxW1200>
    </section>
  );
};
