import { projects } from './projects';
import styles from './styles.module.scss';

const Projects = () => {
  return (
    <section className={styles['projects-section']} id="projects">
      {projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ))}
    </section>
  );
};

export default Projects;
