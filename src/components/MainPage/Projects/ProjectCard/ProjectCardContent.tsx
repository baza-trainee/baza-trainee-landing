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

const ProjectCardContent = ({ handleShowTeam, project }: ICardContent) => {
  return (
    <div className="flex h-full flex-col justify-between">
      <ProjectStatusBar statusName={project.status} />

      <div className="h-3/5 w-full">
        <div className="mb-[1.6rem] h-36">
          <h4 className="text-[2.4rem] font-bold leading-[3rem]">
            {project.description}
          </h4>
          {project.status === 'active' && (
            <a href={project.link} target="_blank">
              {project.link}
            </a>
          )}
        </div>

        <div className="flex h-[12.7rem] w-full flex-col gap-[0.8rem]">
          <div className="flex items-center gap-2">
            <ProjectStartIcon />
            <p>Старт проєкту</p>
            <p className="ml-auto font-medium">
              {formatDate(project.createdAt)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ProjectDurationIcon />
            <p>Тривалість</p>
            <p className="ml-auto font-medium">
              {projectCycle(project)} тижнів
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ProjectComplexityIcon />
            <p>Складність</p>
            <div className="ml-auto">
              <ProjectComplexity count={project.complexity} />
            </div>
          </div>

          {project.status === 'active' && (
            <button
              className="self-start border-b text-[2rem] font-medium"
              id="team-btn"
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
