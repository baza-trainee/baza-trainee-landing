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
  // const [projectsStore, setProjectsStore] = useState<TProjectResp[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<TProjectResp[]>([]);

  // useEffect(() => {
  //   if (projectsData) {
  //     setProjectsStore((prev) => [...prev, ...projectsData.results]);
  //   }
  // }, [projectsData]);

  // First init
  useEffect(() => {
    if (projectsData && visibleProjects.length === 0) {
      if (currentLimits) {
        const { limit } = currentLimits;
        const limitedProjects = projectsData.results.slice(0, limit);
        setVisibleProjects(limitedProjects);
      }
    }
  }, [projectsData]);

  // useEffect(() => {
  //   if (
  //     projectsData &&
  //     currentLimits &&
  //     projectsStore.length !== 0 &&
  //     visibleProjects.length + currentLimits.loadMore >= projectsStore.length
  //   ) {
  //     changePage(projectsData.pagination.currentPage + 1);
  //   }
  // }, [visibleProjects]);

  useEffect(() => {
    const handleResize = () => {
      const currentLimits = calculateLimits();
      setCurrentLimits(currentLimits);

      // if (currentLimits) {
      //   setVisibleProjects((prev) => {
      //     const loadMore = currentLimits.loadMore;
      //     const croppedItems = prev.length % loadMore;
      //     const limit = prev.length - croppedItems;
      //     const visibleProjects = prev.slice(0, limit);

      //     return visibleProjects;
      //   });
      // }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loadMore = () => {
    if (projectsData && currentLimits) {
      // const nextProjects = projectsStore.slice(
      //   visibleProjects.length,
      //   visibleProjects.length + currentLimits.loadMore
      // );
      // setVisibleProjects([...visibleProjects, ...nextProjects]);
      changeLimit(currentLimits.limit + 3);

      setCurrentLimits({
        ...currentLimits,
        limit: currentLimits.limit + currentLimits.loadMore,
      });
    }
  };

  const animateDelay = (index: number) => {
    if (currentLimits) {
      return visibleProjects.length > currentLimits.limit
        ? index - visibleProjects.length + currentLimits.loadMore
        : index;
    }
  };

  const showData = projectsData?.results
    .slice(0, currentLimits?.limit)
    .map((project: TProjectResp, index: number) => (
      <ProjectCard
        lang={lang}
        key={project._id}
        project={project}
        animationDelay={animateDelay(index)}
        coverImgUrl={createImgUrl(project.imageUrl)}
      />
    ));

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
          projectsData.pagination.totalResults > visibleProjects.length && (
            <MoreProjectsButton lang={lang} onClick={loadMore} />
          )}
      </ContainerMaxW1200>
    </section>
  );
};
