import { IProject } from '@/types';

const projectCycle = (project: IProject) => {
  const creationDate = new Date(project.creationDate);
  const launchDate = new Date(project.launchDate);

  const cycleDuration = launchDate.getTime() - creationDate.getTime();
  const weeksInCycle = Math.floor(cycleDuration / (1000 * 60 * 60 * 24 * 7));

  return weeksInCycle;
};
export default projectCycle;
