import styles from './styles.module.scss';

const Forms = () => {
  return (
    <section className={styles.forms} id="forms">
      <div className="container">
        <h2 className={styles['forms__title']}>
          Baza Trainee Ukraine запрошує приєднатись до команди
        </h2>
        <p className={styles['forms__text']}>Оберіть свою участь в проєкті</p>
        <ul className={styles['forms__list']}>
          <li>
            <a
              href="https://docs.google.com/forms/d/1QsjBjv90-GNkMN_fm2-Nsn0ROlx-yHiyYyou2_oyH2Q/edit"
              className={styles['forms__link']}
            >
              Я учасник
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/1Y_3FiBw_TYl8BvGq-tA_fcLmULz6p9K8T4WPuLmoc_k/edit"
              className={styles['forms__link']}
            >
              Я Ментор
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/1Z2zOR8_WgCtq8cQ5ihsJKLUrfxIWA_Iq-rQiuXNd21Y/edit"
              className={styles['forms__link']}
            >
              Я партнер
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/1gbHRVDY2kPOZe9D5GzLoFqJbzZxfR_xwXgMTOnmDttM/edit"
              className={styles['forms__link']}
            >
              Я замовник
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Forms;
