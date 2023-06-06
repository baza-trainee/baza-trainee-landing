import { projects } from './projects';
import styles from './styles.module.scss';

const Projects = () => {
  return (
    <section className={styles['projects-section']} id="projects">
      {projects.map((project) => (
        <div key={project.name}>Projects - TODO</div>
      ))}
    </section>
  );
};

export default Projects;
