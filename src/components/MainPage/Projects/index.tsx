'use client';

import { useEffect, useState } from 'react';

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
import { createImgUrl } from '@/utils/imageHandler';

const calculateLimits = () => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;

    if (width < 768) {
      return { limit: 6, loadMore: 1 };
    } else if (width >= 768 && width < 1280) {
      return { limit: 8, loadMore: 2 };
    } else {
      return { limit: 9, loadMore: 3 };
    }
  }
};

export const Projects = ({ lang }: { lang: TLandingLanguage }) => {
  const { navbar, noProjects } = dictionaries[lang];
  const { projectsData, searchProject, changeLimit } = useProjectsSWR();
  const [currentLimits, setCurrentLimits] = useState(calculateLimits());

  const showData = projectsData?.results
    .slice(0, currentLimits?.limit)
    .map((project: TProjectResp, i: number) => (
      <ProjectCard
        lang={lang}
        key={project._id}
        project={project}
        animationDelay={i + (currentLimits?.loadMore || 0)}
        coverImgUrl={createImgUrl(project.imageUrl)}
      />
    ));

  const loadMore = () => {
    if (projectsData && currentLimits) {
      const newLimit = currentLimits.limit + currentLimits.loadMore;
      changeLimit(newLimit);
      setCurrentLimits({ ...currentLimits, limit: newLimit });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newLimits = calculateLimits();

      setCurrentLimits((prevLimits) => {
        if (
          prevLimits &&
          newLimits &&
          newLimits.loadMore !== prevLimits.loadMore
        ) {
          return newLimits;
        }
        return prevLimits;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="projects">
      <ContainerMaxW1200 className="flex-col items-center gap-[3.2rem]">
        <h3 className="text-[3.8rem] font-bold">{navbar?.projects}</h3>

        <div className="lg:self-start">
          <SearchBar handleSearch={searchProject} />
        </div>

        {!projectsData ? (
          <h3 className="text-[3.8rem]">{noProjects}</h3>
        ) : (
          <ul className="grid grid-cols-1 gap-[1.6rem] md:grid-cols-2 md:gap-[2rem] xl:w-full xl:grid-cols-3 xl:gap-[3.2rem]">
            {showData}
          </ul>
        )}

        {projectsData &&
          currentLimits &&
          projectsData.pagination.totalResults > currentLimits.limit && (
            <MoreProjectsButton lang={lang} onClick={loadMore} />
          )}
      </ContainerMaxW1200>
    </section>
  );
};
