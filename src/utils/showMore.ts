const showMore = () => {
  const teamButtons = document.querySelectorAll('#team-btn');
  teamButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const btn = e.currentTarget as HTMLElement;

      const project = btn.closest('#projects-item') as HTMLElement;

      if (project) {
        const projectInfo = project.querySelector('#thumb') as HTMLElement;

        const closeButton = projectInfo.querySelector('#close-icon');
        if (projectInfo) {
          const content = project.querySelector(
            '#content-container'
          ) as HTMLElement;

          projectInfo.style.top = '0';
          content.style.display = 'none';

          if (closeButton) {
            closeButton.addEventListener('click', () => {
              projectInfo.style.top = '46.4rem';
              content.style.display = 'block';
            });
          }
        }
      }
    });
  });
};
export default showMore;
