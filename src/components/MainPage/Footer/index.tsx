import SocialIcon from './socialIcon';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-section']}>
            <a href="#header" className={styles['footer-logo']}>
              <img
                className={styles['footer-logo__svg']}
                src="/svg/logo-footer.svg"
                alt="Main logo"
              />
            </a>
          </div>
          <div className={styles['footer-section']}>
            <ul className={styles['footer-list']}>
              <li className={styles['footer-list__item']}>
                <a href="#projects" className={styles['footer-list__link']}>
                  Проєкти
                </a>
              </li>
              <li className={styles['footer-list__item']}>
                <a href="#partners" className={styles['footer-list__link']}>
                  Партнери
                </a>
              </li>
              <li className={styles['footer-list__item']}>
                <a href="#forms" className={styles['footer-list__link']}>
                  Взяти участь
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <ul className={styles['footer-list']}>
              <li className={styles['footer-list__item']}>
                <a
                  href=""
                  className={`${styles['footer-list__link']} underline`}
                >
                  Політика конфіденційності
                </a>
              </li>
              <li className={styles['footer-list__item']}>
                <a
                  href=""
                  className={`${styles['footer-list__link']} underline`}
                >
                  Правила користування сайтом
                </a>
              </li>
              <li className={styles['footer-list__item']}>
                <a href="" className={styles['footer-list__link']}>
                  Статут
                </a>
              </li>
              <li className={styles['footer-list__item']}>
                <a href="" className={styles['footer-list__link']}>
                  Звітність
                </a>
              </li>
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <ul
              className={`${styles['footer-list']} ${styles['footer-list--contacts']}`}
            >
              <li
                className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
              >
                <img
                  className={styles['footer-list__icon']}
                  src="/svg/phone.svg"
                  alt="phone icon"
                />
                <span className={styles['footer-list__text']}>
                  +38 063 628 6630
                </span>
              </li>
              <li
                className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
              >
                <img
                  className={styles['footer-list__icon']}
                  src="/svg/phone.svg"
                  alt="phone icon"
                />
                <span className={styles['footer-list__text']}>
                  +38 067 568 1788
                </span>
              </li>
              <li
                className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
              >
                <img
                  className={styles['footer-list__icon']}
                  src="/svg/mail.svg"
                  alt="mail icon"
                />
                <span className={styles['footer-list__text']}>
                  info@baza-trainee.site
                </span>
              </li>
            </ul>

            <ul
              className={`${styles['footer-list']} ${styles['footer-list--social']}`}
            >
              <li className={styles['footer-list__item--social']}>
                <a href="" className={styles['footer-social-link']}>
                  <SocialIcon socialIconName="linkedIn" />
                </a>
              </li>
              <li className={styles['footer-list__item--social']}>
                <a href="" className={styles['footer-social-link']}>
                  <SocialIcon socialIconName="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles['footer__license']}>
          Розробка BazaTraineeUkraine 2023 Усі права захищені.
        </p>
      </div>
    </footer>
    /*
	<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script type="text/javascript" src="./js/slick.min.js"></script>
	<script src="./js/app.min.js"></script>*/
  );
};

export default Footer;
