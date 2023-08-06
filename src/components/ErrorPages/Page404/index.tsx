import styles from './styles.module.scss';

const Page404 = () => {
  return (
    <section className={styles.error}>
      <div className="m-auto max-w-[120rem]">
        <p className={styles.error__digits}>404</p>
        <h2 className={styles.error__title}>Цю сторінку не знайдено</h2>
        <p className={styles.error__description}>
          Ми не змогли знайти сторінку, яку Ви шукаєте. Можливо, сталася помилка
        </p>
        <a href="/" className={styles['error__back-home-link']}>
          Повернутись на головну
        </a>
      </div>
    </section>
  );
};

export default Page404;
