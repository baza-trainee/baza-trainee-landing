import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={`${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <a href="/" className={styles['header__logo-link']}>
            <svg className={styles['header__logo-img']}>
              <use href="@img/sprite.svg#logo-black"></use>
            </svg>
          </a>
        </div>
        <ul className={styles['header__nav']}>
          <li className={styles['header__nav-elem']}>
            <a href="#" className={styles['header__nav-link']}>
              Проєкти
            </a>
          </li>
          <li className={styles['header__nav-elem']}>
            <a href="#" className={styles['header__nav-link']}>
              Партнери
            </a>
          </li>
          <li className={styles['header__nav-elem']}>
            <a href="#" className={styles['header__nav-link']}>
              Взяти участь
            </a>
          </li>
          <li className={styles['header__nav-elem']}>
            <a href="#" className={styles['header__nav-link']}>
              Контакти
            </a>
          </li>
        </ul>
        <div className={styles['header__lang']}>
          <button className={styles['header__lang-btn']} id="active-lang">
            UA
            <svg className={styles['header__lang-arrow']}>
              <use href="@img/sprite.svg#arrow-bottom"></use>
            </svg>
          </button>
          <ul className={styles['header__lang-list']} id="lang-list">
            <li className={styles['header__lang-elem']}>
              <button className={styles['header__lang-btn']}>
                <span>EN</span>
              </button>
            </li>
            <li className={styles['header__lang-elem']}>
              <button className={styles['header__lang-btn']}>
                <span>PL</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
