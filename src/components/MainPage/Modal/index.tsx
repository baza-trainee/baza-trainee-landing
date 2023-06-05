import styles from './styles.module.scss';

const Modal = () => {
  return (
    <section className={`${styles.backdrop} ${styles['backdrop--is-hidden']}`}>
      <div className={styles.modal}>
        <button className={styles['modal__close-btn']} type="button">
          <svg width="44" height="44">
            <use href="@img/sprite.svg#Close" />
          </svg>
        </button>
        <div className={styles.donate}>
          <h2 className={styles['donate__title']}>
            Оберіть суму, якою хочете підтримати Baza Trainee Ukraine
          </h2>
          <p className={styles['donate__description']}>
            Сума списується одноразово, якщо бажаєте оформити підписку, потрібно
            ...
          </p>
          <ul className={styles['donate__list']}>
            <li className={styles['donate__item']}>
              <a className={styles['donate__link']} href="#">
                100 грн
              </a>
            </li>
            <li className={styles['donate__item']}>
              <a className={styles['donate__link']} href="#">
                200 грн
              </a>
            </li>
            <li className={styles['donate__item']}>
              <a className={styles['donate__link']} href="#">
                500 грн
              </a>
            </li>
            <li className={styles['donate__item']}>
              <a className={styles['donate__link']} href="#">
                1000 грн
              </a>
            </li>
            <li className={styles['donate__item']}>
              <a className={styles['donate__link']} href="#">
                інша сумма UAH
              </a>
            </li>
          </ul>
          <button className={styles['donate__btn']} type="button">
            Підтримати
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
