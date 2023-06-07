import styles from './styles.module.scss';

const Statistics = () => {
  return (
    <section className={styles.statistic}>
      <div className={`container `}>
        <h2 className={styles['statistic__title']}>
          5 проектів та 3 команди чекають на тебе
        </h2>
      </div>
    </section>
  );
};

export default Statistics;
