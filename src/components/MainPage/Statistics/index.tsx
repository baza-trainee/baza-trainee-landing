import styles from './styles.module.scss';

const Statistics = () => {
  return (
    <section className={styles.statistic}>
      <div className={`container `}>
        <h3 className={styles['statistic__title']}>
          5 проектів та 3 команди чекають на тебе
        </h3>
      </div>
    </section>
  );
};

export default Statistics;
