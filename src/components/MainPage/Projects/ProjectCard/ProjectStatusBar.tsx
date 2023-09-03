import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { IProject } from '@/types';

const statusDetermination = (project: IProject) => {
  if (project.launchDate > project.creationDate) {
    return 'completed';
  } else if (project.isTeamRequired) {
    return 'teamRequired';
  } else return 'development';
};

export const ProjectStatusBar = ({
  project,
  lang,
}: {
  project: IProject;
  lang: TLandingLanguage;
}) => {
  const dict = dictionaries[lang];
  const statusVal = statusDetermination(project);

  const statusData = {
    completed: {
      style: 'bg-success-dark',
      text: dict.projects.status.completed,
    },
    teamRequired: {
      style: 'bg-yellow-800',
      text: dict.projects.status.teamFormation,
    },
    development: {
      style: 'bg-yellow-500',
      text: dict.projects.status.underDevelopment,
    },
  };

  return (
    <div className="relative flex min-w-[15.7rem] max-w-fit items-center gap-3 rounded-md border border-neutral-100 px-6 py-3">
      <div className={`h-8 w-8 rounded-full ${statusData[statusVal].style}`} />

      <span className="font-medium text-white">
        {statusData[statusVal].text}
      </span>
    </div>
  );
};
