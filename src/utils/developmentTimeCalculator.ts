const projectCycle = (project: any) => {
  const creationDate = new Date(project.createdAt);
  const launchDate = new Date(project.updatedAt);

  const cycleDuration = launchDate.getTime() - creationDate.getTime();
  const weeksInCycle = Math.floor(cycleDuration / (1000 * 60 * 60 * 24 * 7));

  return weeksInCycle;
};
export default projectCycle;
