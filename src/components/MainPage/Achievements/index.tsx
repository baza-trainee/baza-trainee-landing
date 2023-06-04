import styles from './styles.module.scss';
const Achievements = () => {
  return (
    <section className={styles.achievements}>
      <div className="container">
        <ul className={styles.achievements__list}>
          <li className={styles.achievements__item}>
            <p className={styles.achievements__number}>
              <span counter-num="7">0</span>
            </p>
            <p className={styles.achievements__text}>Виконанних проєктів</p>
          </li>
          <li className={styles.achievements__item}>
            <p className={styles.achievements__number}>
              <span counter-num="420">0</span>+
            </p>
            <p className={styles.achievements__text}>Залучених учасників</p>
          </li>
          <li className={styles.achievements__item}>
            <p className={styles.achievements__number}>
              <span counter-num="212">0</span>
            </p>
            <p className={styles.achievements__text}>Працевлаштовано</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
