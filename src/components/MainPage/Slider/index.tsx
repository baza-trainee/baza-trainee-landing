import { slides } from './slides';
import styles from './styles.module.scss';

const Slider = () => {
  return (
    <section className={styles['slider-section']}>
      <div
        className={styles['slider-section__carousel']}
        id="slider-section-carousel"
      >
        {slides.map((slide, index) => (
          <div
            className={styles['slider-section__slide']}
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className={`container ${styles['slider-section__slide-container']}`}
            >
              <div className={styles['slider-section__content']}>
                <h2 className={`h2 ${styles['h2--white']}`}>{slide.title}</h2>
                <p
                  className={`sub-heading--white ${styles['sub-heading--white']}`}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className={styles['slider-section__buttons']}>
          <button className={styles['slider-section__btn-prev']}>
            <svg className={styles['slider-section__arrow-img']}>
              <use href="@img/sprite.svg#arrow-left"></use>
            </svg>
          </button>
          <button className={styles['slider-section__btn-next']}>
            <svg className={styles['slider-section__arrow-img']}>
              <use href="@img/sprite.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles['slider-section__actions']}>
        <div
          className={`container ${styles['slider-section__actions-container']}`}
        >
          <div className={styles['slider-section__dots']}></div>
          <button className={styles['slider-section__btn-donate']}>
            Фондувати
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
