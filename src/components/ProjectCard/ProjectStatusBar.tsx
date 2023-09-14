import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { TProject } from '@/types';

export const ProjectStatusBar = ({
  project,
  lang,
}: {
  project: TProject;
  lang: TLandingLanguage;
}) => {
  const dict = dictionaries[lang];

  const getStatusInfo = () => {
    if (project.launchDate > project.creationDate) {
      return {
        style: 'bg-success-dark',
        text: dict.projects.status.completed,
      };
    } else if (project.isTeamRequired) {
      return {
        style: 'bg-yellow-800',
        text: dict.projects.status.teamFormation,
      };
    } else {
      return {
        style: 'bg-yellow-500',
        text: dict.projects.status.underDevelopment,
      };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="relative flex min-w-[15.7rem] max-w-fit items-center gap-3 rounded-md border border-neutral-100 px-6 py-3">
      <div className={`h-8 w-8 rounded-full ${statusInfo.style}`} />

      <span className="font-medium text-white">{statusInfo.text}</span>
    </div>
  );
};
