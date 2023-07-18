'use client';

import { useState } from 'react';
import { TProjects, projects } from './projects';
import styles from './styles.module.scss';
import { ContainerMaxW1200, MoreProjectsButton } from '@/components/atomic';
import { SearchBar } from './SearchBar';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<TProjects>(projects);

  return (
    <section className="pt-48" id="projects">
      <ContainerMaxW1200 className="flex-col gap-[3.2rem]">
        <h3 className="mx-auto text-[3.8rem] font-bold">Проєкти</h3>

        <SearchBar setFilteredProjects={setFilteredProjects} />

        <>
          {filteredProjects.length === 0 && (
            <p>Sorry! There are no projects.</p>
          )}
          <ul className={styles['projects-section__projects-container']}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ul>
        </>

        {filteredProjects.length > 8 && <MoreProjectsButton />}
      </ContainerMaxW1200>
    </section>
  );
};

export default Projects;
