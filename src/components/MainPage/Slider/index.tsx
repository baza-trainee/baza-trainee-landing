const Slider = () => {
  return (
    <section className="slider-section">
      <div className="slider-section__carousel" id="slider-section-carousel">
        <div
          className="slider-section__slide"
          //style="background-image: url(@img/carousel-slide-1.webp);"
        >
          <div className="container slider-section__slide-container">
            <div className="slider-section__content">
              <h2 className="h2 h2--white">Baza Trainee Ukraine</h2>
              <p className="sub-heading--white">
                Громадська організація, яка має на меті допомогти отримати
                перший досвід роботи тим, хто починає свій шлях в IT
              </p>
            </div>
          </div>
        </div>
        <div
          className="slider-section__slide"
          //style="background-image: url(@img/carousel-slide-2.webp);"
        >
          <div className="container slider-section__slide-container">
            <div className="slider-section__content">
              <h2 className="h2 h2--white">Наша ціль</h2>
              <p className="sub-heading--white">
                Ініціатива Baza Trainee Ukraine як освітня і тренувальна
                платформа виникає у відповідь на суспільний запит, який склався
                в Україні в 2022-2023 роках в сфері працевлаштування в галузі
                інформаційних технологій і представляє собою веб-сайт, що
                об’єднує як користувачів дві соціальні групи.{' '}
              </p>
            </div>
          </div>
        </div>
        <div
          className="slider-section__slide"
          //style="background-image: url(@img/carousel-slide-3.webp);"
        >
          <div className="container slider-section__slide-container">
            <div className="slider-section__content">
              <h2 className="h2 h2--white">Наша місія</h2>
              <p className="sub-heading--white">
                Поєднати в спільній діяльності ці категорії таким чином, щоб
                користь отримали обидві сторони. Для першої групи – це реальний
                практичний досвід створення справжнього продукту, для другої –
                цифровий продукт, що працює і сприяє розвитку соціального
                проекту.
              </p>
            </div>
          </div>
        </div>
        <div
          className="slider-section__slide"
          //style="background-image: url(@img/carousel-slide-4.webp);"
        >
          <div className="container slider-section__slide-container">
            <div className="slider-section__content">
              <h2 className="h2 h2--white">Принцип дії</h2>
              <p className="sub-heading--white">
                Тренувати учасника на основі технологій, якими він володіє на
                даний момент, і сприяти його працевлаштуванню. Застосовувати при
                створенні проекту технології, які хоче розвивати учасник,
                перенавчання не відбувається.
              </p>
            </div>
          </div>
        </div>
        <div
          className="slider-section__slide"
          //style="background-image: url(@img/carousel-slide-5.webp);"
        >
          <div className="container slider-section__slide-container">
            <div className="slider-section__content">
              <h2 className="h2 h2--white">Наша цільова аудиторія</h2>
              <p className="sub-heading--white">
                Громадська організація, яка має на меті допомогти отримати
                перший досвід роботи тим, хто починає свій шлях в IT
              </p>
            </div>
          </div>
        </div>
        <div className="slider-section__buttons">
          <button className="slider-section__btn-prev">
            <svg className="slider-section__arrow-img">
              <use href="@img/sprite.svg#arrow-left"></use>
            </svg>
          </button>
          <button className="slider-section__btn-next">
            <svg className="slider-section__arrow-img">
              <use href="@img/sprite.svg#arrow-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className="slider-section__actions">
        <div className="container slider-section__actions-container">
          <div className="slider-section__dots"></div>
          <button className="slider-section__btn-donate">Фондувати</button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
