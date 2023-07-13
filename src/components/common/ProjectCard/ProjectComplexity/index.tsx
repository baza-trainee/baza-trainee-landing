import styles from './styles.module.scss';
const ProjectComplexity = ({ count }: { count: number }) => {
  return Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={
        index < count
          ? styles['projects-section__info__list-item__level-active']
          : styles['projects-section__info__list-item__level']
      }
    ></div>
  ));
};
export default ProjectComplexity;
