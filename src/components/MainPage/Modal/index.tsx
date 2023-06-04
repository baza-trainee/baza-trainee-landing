const Modal = () => {
  return (
    <section className="backdrop backdrop--is-hidden">
      <div className="modal">
        <button className="modal__close-btn" type="button">
          <svg width="44" height="44">
            <use href="@img/sprite.svg#Close" />
          </svg>
        </button>
        <div className="donate">
          <h2 className="donate__title">
            Оберіть суму, якою хочете підтримати Baza Trainee Ukraine
          </h2>
          <p className="donate__description">
            Сума списується одноразово, якщо бажаєте оформити підписку, потрібно
            ...
          </p>
          <ul className="donate__list">
            <li className="donate__item">
              <a className="donate__link" href="#">
                100 грн
              </a>
            </li>
            <li className="donate__item">
              <a className="donate__link" href="#">
                200 грн
              </a>
            </li>
            <li className="donate__item">
              <a className="donate__link" href="#">
                500 грн
              </a>
            </li>
            <li className="donate__item">
              <a className="donate__link" href="#">
                1000 грн
              </a>
            </li>
            <li className="donate__item">
              <a className="donate__link" href="#">
                інша сумма UAH
              </a>
            </li>
          </ul>
          <button className="donate__btn" type="button">
            Підтримати
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
