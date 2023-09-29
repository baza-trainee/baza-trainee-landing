import Link from 'next/link';

import { projectCycle } from '@/utils/developmentTimeCalculator';
import { formatDate } from '@/utils/formatDate';

import { ProjectComplexity } from './ProjectComplexity';
import { ProjectStatusBar } from './ProjectStatusBar';

import { dictionaries } from '@/locales/dictionaries';

import {
    ProjectComplexityIcon,
    ProjectDurationIcon,
    ProjectStartIcon,
} from '@/components/common/icons';

import { ICardContent } from '@/types';

const ProjectCardContent = ({
  handleShowTeam,
  project,
  lang = 'ua',
}: ICardContent) => {
  const { projectStart, projectTeam, duration, complexity } =
    dictionaries[lang].projects || {};

  return (
    <div className="flex h-full flex-col justify-between ">
      <ProjectStatusBar project={project} lang={lang} />

      <div className="flex w-full flex-col gap-[1.6rem]">
        <div className="h-[11rem] overflow-clip text-ellipsis">
          <h4 className="mb-[0.8rem] text-[2.4rem] font-bold leading-[3rem]">
            {project.title[lang]}
          </h4>
          {project.deployUrl && (
            <Link
              href={project.deployUrl}
              target="_blank"
              aria-label={`Visit ${project.deployUrl}`}
            >
              {project.deployUrl}
            </Link>
          )}
        </div>

        <div className="flex h-[12.7rem] w-full flex-col gap-[0.8rem]">
          <div className="flex items-center gap-2">
            <ProjectStartIcon />
            <span>{projectStart}</span>
            <span className="ml-auto font-medium">
              {formatDate(project.creationDate, 'spelled', lang)}
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

          {project?.teamMembers?.length > 0 && (
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
