'use client';
import {
  ProjectComplexityIcon,
  ProjectDurationIcon,
  ProjectStartIcon,
} from '@/components/common/icons';

import { dictionaries } from '@/locales/dictionaries';
import { projectCycle } from '@/utils/developmentTimeCalculator';
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import { ICardContent } from '../types';
import { ProjectComplexity } from './ProjectComplexity';
import { ProjectStatusBar } from './ProjectStatusBar';

const ProjectCardContent = ({
  handleShowTeam,
  project,
  lang,
}: ICardContent) => {
  const dict = dictionaries[lang];
  const { projects } = dict || {};
  const { projectStart, projectTeam, duration, complexity } = projects || {};
  return (
    <div className="flex h-full flex-col justify-between ">
      <ProjectStatusBar project={project} lang={lang} />

      <div className="flex w-full flex-col gap-[1.6rem]">
        <div className="h-[11rem]">
          <h4 className="text-[2.4rem] font-bold leading-[3rem]">
            {project.description[lang]}
          </h4>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="mt-[0.8rem]"
              aria-label={`Visit ${project.link}`}
            >
              {project.link ? project.link : ''}
            </Link>
          )}
        </div>

        <div className="flex h-[12.7rem] w-full flex-col gap-[0.8rem]">
          <div className="flex items-center gap-2">
            <ProjectStartIcon />
            <span>{projectStart}</span>
            <span className="ml-auto font-medium">
              {formatDate(project.creationDate, 'spelled', dict)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectDurationIcon />
            <span>{duration}</span>
            <span className="ml-auto font-medium">
              {projectCycle(project, lang)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectComplexityIcon />
            <span>{complexity}</span>
            <div className="ml-auto">
              <ProjectComplexity count={project.complexity} />
            </div>
          </div>

          {project.teamMembers.length > 0 && (
            <button
              className="self-start border-b text-[2rem] font-medium"
              onClick={handleShowTeam}
            >
              {projectTeam}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCardContent };
