const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-section">
            <a href="#header" className="footer-logo">
              <svg className="footer-logo__svg">
                <use href="@img/sprite.svg#logo-footer"></use>
              </svg>
            </a>
          </div>

          <div className="footer-section">
            <ul className="footer-list">
              <li className="footer-list__item">
                <a href="#projects" className="footer-list__link">
                  Проєкти
                </a>
              </li>
              <li className="footer-list__item">
                <a href="#partners" className="footer-list__link">
                  Партнери
                </a>
              </li>
              <li className="footer-list__item">
                <a href="#forms" className="footer-list__link">
                  Взяти участь
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <ul className="footer-list">
              <li className="footer-list__item">
                <a href="" className="footer-list__link underline ">
                  Політика конфіденційності
                </a>
              </li>
              <li className="footer-list__item">
                <a href="" className="footer-list__link underline ">
                  Правила користування сайтом
                </a>
              </li>
              <li className="footer-list__item">
                <a href="" className="footer-list__link">
                  Статут
                </a>
              </li>
              <li className="footer-list__item">
                <a href="" className="footer-list__link">
                  Звітність
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <ul className="footer-list footer-list--contacts">
              <li className="footer-list__item footer-list__item--contacts">
                <svg className="footer-list__icon">
                  <use href="@img/sprite.svg#phone"></use>
                </svg>
                <span className="footer-list__text">+38 063 628 6630</span>
              </li>
              <li className="footer-list__item footer-list__item--contacts">
                <svg className="footer-list__icon">
                  <use href="@img/sprite.svg#phone"></use>
                </svg>
                <span className="footer-list__text">+38 067 568 1788</span>
              </li>
              <li className="footer-list__item footer-list__item--contacts">
                <svg className="footer-list__icon">
                  <use href="@img/sprite.svg#mail"></use>
                </svg>
                <span className="footer-list__text">
                  info@baza-trainee.site
                </span>
              </li>
            </ul>

            <ul className="footer-list footer-list--social">
              <li className="footer-list__item--social footer-list__item">
                <a href="" className="footer-social-link">
                  <svg className="footer-social-link__svg">
                    <use href="@img/sprite.svg#linkedIn"></use>
                  </svg>
                </a>
              </li>
              <li className="footer-list__item--social footer-list__item">
                <a href="" className="footer-social-link">
                  <svg className="footer-social-link__svg">
                    <use href="@img/sprite.svg#fb"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__license">
          {' '}
          Розробка BazaTraineeUkraine 2023 Усі права захищені.{' '}
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
