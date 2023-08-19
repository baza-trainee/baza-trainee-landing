import {
  ProjectComplexityIcon,
  ProjectDurationIcon,
  ProjectStartIcon,
} from '@/components/common/icons';

import projectCycle from '@/utils/developmentTimeCalculator';
import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import { ICardContent } from '../../../../types/projectsTypes';
import { ProjectComplexity } from './ProjectComplexity';
import { ProjectStatusBar } from './ProjectStatusBar';

const ProjectCardContent = ({ handleShowTeam, project }: ICardContent) => {
  return (
    <div className="flex h-full flex-col justify-between ">
      <ProjectStatusBar statusName={project.status} />

      <div className="flex w-full flex-col gap-[1.6rem]">
        <div className="h-[11rem]">
          <h4 className="text-[2.4rem] font-bold leading-[3rem]">
            {project.description}
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
            <span>Старт проєкту</span>
            <span className="ml-auto font-medium">
              {formatDate(project.creationDate)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectDurationIcon />
            <span>Тривалість</span>
            <span className="ml-auto font-medium">{projectCycle(project)}</span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectComplexityIcon />
            <span>Складність</span>
            <div className="ml-auto">
              <ProjectComplexity count={project.complexity} />
            </div>
          </div>

          {project.teamMembers.length > 0 && (
            <button
              className="self-start border-b text-[2rem] font-medium"
              onClick={handleShowTeam}
            >
              Команда проєкту
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCardContent };
