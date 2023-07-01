import styles from './styles.module.scss';

const Statistics = ({
  dictionary,
}: {
  dictionary: {
    invite: {
      teamsWaitForYou: string;
    };
  };
}) => {
  return (
    <section className={styles.statistic}>
      <div className={`container `}>
        <h2 className={styles['statistic__title']}>
          {dictionary.invite.teamsWaitForYou}
        </h2>
      </div>
    </section>
  );
};

export default Statistics;
