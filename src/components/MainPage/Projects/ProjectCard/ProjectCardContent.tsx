import {
  ProjectComplexityIcon,
  ProjectDurationIcon,
  ProjectStartIcon,
} from '@/components/common/icons';

import projectCycle from '@/utils/developmentTimeCalculator';
import { formatDate } from '@/utils/formatDate';
import { ICardContent } from '../types';
import { ProjectComplexity } from './ProjectComplexity';
import { ProjectStatusBar } from './ProjectStatusBar';

const ProjectCardContent = ({
  handleShowTeam,
  project,
  dict,
  lang,
}: ICardContent) => {
  return (
    <div className="flex h-full flex-col justify-between ">
      <ProjectStatusBar
        statusName={project.status}
        statusVal={project.statusVal}
      />

      <div className="flex w-full flex-col gap-[1.6rem]">
        <div className="h-[11rem]">
          <h4 className="text-[2.4rem] font-bold leading-[3rem]">
            {project.description}
          </h4>
          <a href={project.link} target="_blank" className="mt-[0.8rem]">
            {project.link ? project.link : ''}
          </a>
        </div>

        <div className="flex h-[12.7rem] w-full flex-col gap-[0.8rem]">
          <div className="flex items-center gap-2">
            <ProjectStartIcon />
            <span>{dict.projects.projectStart}</span>
            <span className="ml-auto font-medium">
              {formatDate(project.creationDate, dict)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectDurationIcon />
            <span>{dict.projects.duration}</span>
            <span className="ml-auto font-medium">
              {projectCycle(project, lang)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectComplexityIcon />
            <span>{dict.projects.complexity}</span>
            <div className="ml-auto">
              <ProjectComplexity count={project.complexity} />
            </div>
          </div>

          {project.teamMembers.length > 0 && (
            <button
              className="self-start border-b text-[2rem] font-medium"
              onClick={handleShowTeam}
            >
              {dict.projects.projectTeam}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCardContent };
