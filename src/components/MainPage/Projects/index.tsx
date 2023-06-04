const Projects = () => {
  return <></>;
  /*Fix it
  return (
    <section className="projects-section" id="projects">
    <div className="container">
        <h3 className="projects-section__title">Проєкти</h3>
        <div className="projects-section__form-container">
            <form className="projects-section__form">
                <input 
                type="text"
                name="search"
                id="search-input" 
                className="projects-section__form__input"
                placeholder="Введіть ключове слово для пошуку" 
                pattern="[а-яА-Яa-zA-ZҐґЄєІіЇї]{2,50}"
                title="Поле пошуку приймає ключові слова від 2-х до 50-ти символів. Поле пошуку приймає латиницю і кирилицю"
                minlength="2" maxlength="50" 
                required/>
                <button type="submit" className="projects-section__form__button">
                    <svg className="projects-section__form__icon">
                    <use href="@img/sprite.svg#magnifier"></use>
                  </svg>
                </button>
            </form>
        </div>
        <div>
            <ul className="projects-section__projects-container">
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item-container">
                            <div className="projects-section__projects-item__state-container">
                                <div className="projects-section__projects-item__state completed"></div>
                                <p className="projects-section__projects-item__state-text">Завершено</p>
                            </div>
                            <div className="projects-section__projects-item__container">
                                <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                                <a href="https:\\murrfecto.site" className="projects-section__projects-item__link" target="_blank">https:\\murrfecto.site</a>
                            </div>
                            <div className="projects-section__info">
                                <ul className="projects-section__info__list">
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                        <p>Старт проєкту</p>
                                        </div>
                                        <p>24 квітня 2023</p>
                                    </li>
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                        <p>Цикл проєкту</p>
                                        </div>
                                        <p>7 тижнів</p>
                                    </li>
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                        <p>Складність</p>
                                        </div>
                                        <div className="projects-section__info__list-item__level-container">
                                            <div className="projects-section__info__list-item__level active"></div>
                                            <div className="projects-section__info__list-item__level active"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="projects-section__team">
                                <button className="projects-section__team__btn">Команда проєкту</button>
                            </div>
                        </div>
                        <div className="thumb">
                                <div className="thumb__text-container">
                                    <p>Stack: HTML, CSS, TS, Node, MongoDB, HTML, CSS, TS, Node,  MongoDB,Node, MongoDB, React</p>
                                <button className="thumb__close-icon"><svg width="24" height="24"><use href="@img/sprite.svg#close"></use></svg></button>
                                </div>
                                <div className="thumb__container">
                                    <div className="thumb__container__body">
                                        <h4 className="thumb__container__body__title">Project Manager</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Design</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</p>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Front-end</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Back-end</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Quality Assurance</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item__state-container">
                            <div className="projects-section__projects-item__state under-development"></div>
                            <p className="projects-section__projects-item__state-text">В розробці</p>
                        </div>
                        <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                        <div className="projects-section__info">
                            <ul className="projects-section__info__list">
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                    <p>Старт проєкту</p>
                                    </div>
                                    <p>24 квітня 2023</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                    <p>Цикл проєкту</p>
                                    </div>
                                    <p>7 тижнів</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                    <p>Складність</p>
                                    </div>
                                    <div className="projects-section__info__list-item__level-container">
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item__state-container" style="width: 70%;">
                            <div className="projects-section__projects-item__state formation-of-the-team"></div>
                            <p className="projects-section__projects-item__state-text">Формування команди</p>
                        </div>
                        <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                        <div className="projects-section__info">
                            <ul className="projects-section__info__list">
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                    <p>Старт проєкту</p>
                                    </div>
                                    <p>24 квітня 2023</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                    <p>Цикл проєкту</p>
                                    </div>
                                    <p>7 тижнів</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                    <p>Складність</p>
                                    </div>
                                    <div className="projects-section__info__list-item__level-container">
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item-container">
                            <div className="projects-section__projects-item__state-container">
                                <div className="projects-section__projects-item__state completed"></div>
                                <p className="projects-section__projects-item__state-text">Завершено</p>
                            </div>
                            <div className="projects-section__projects-item__container">
                                <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                                <a href="https:\\murrfecto.site" className="projects-section__projects-item__link" target="_blank">https:\\murrfecto.site</a>
                            </div>
                            <div className="projects-section__info">
                                <ul className="projects-section__info__list">
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                        <p>Старт проєкту</p>
                                        </div>
                                        <p>24 квітня 2023</p>
                                    </li>
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                        <p>Цикл проєкту</p>
                                        </div>
                                        <p>7 тижнів</p>
                                    </li>
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                        <p>Складність</p>
                                        </div>
                                        <div className="projects-section__info__list-item__level-container">
                                            <div className="projects-section__info__list-item__level active"></div>
                                            <div className="projects-section__info__list-item__level active"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="projects-section__team">
                                <button className="projects-section__team__btn">Команда проєкту</button>
                            </div>
                        </div>
                        <div className="thumb">
                                <div className="thumb__text-container">
                                    <p>Stack: HTML, CSS, TS, Node, MongoDB, HTML, CSS, TS, Node,  MongoDB,Node, MongoDB, React</p>
                                <button className="thumb__close-icon"><svg width="24" height="24"><use href="@img/sprite.svg#close"></use></svg></button>
                                </div>
                                <div className="thumb__container">
                                    <div className="thumb__container__body">
                                        <h4 className="thumb__container__body__title">Project Manager</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Design</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</p>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Front-end</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Back-end</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Quality Assurance</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item__state-container">
                            <div className="projects-section__projects-item__state under-development"></div>
                            <p className="projects-section__projects-item__state-text">В розробці</p>
                        </div>
                        <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                        <div className="projects-section__info">
                            <ul className="projects-section__info__list">
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                    <p>Старт проєкту</p>
                                    </div>
                                    <p>24 квітня 2023</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                    <p>Цикл проєкту</p>
                                    </div>
                                    <p>7 тижнів</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                    <p>Складність</p>
                                    </div>
                                    <div className="projects-section__info__list-item__level-container">
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item__state-container" style="width: 70%;">
                            <div className="projects-section__projects-item__state formation-of-the-team"></div>
                            <p className="projects-section__projects-item__state-text">Формування команди</p>
                        </div>
                        <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                        <div className="projects-section__info">
                            <ul className="projects-section__info__list">
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                    <p>Старт проєкту</p>
                                    </div>
                                    <p>24 квітня 2023</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                    <p>Цикл проєкту</p>
                                    </div>
                                    <p>7 тижнів</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                    <p>Складність</p>
                                    </div>
                                    <div className="projects-section__info__list-item__level-container">
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item-container">
                            <div className="projects-section__projects-item__state-container">
                                <div className="projects-section__projects-item__state completed"></div>
                                <p className="projects-section__projects-item__state-text">Завершено</p>
                            </div>
                            <div className="projects-section__projects-item__container">
                                <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                                <a href="https:\\murrfecto.site" className="projects-section__projects-item__link" target="_blank">https:\\murrfecto.site</a>
                            </div>
                            <div className="projects-section__info">
                                <ul className="projects-section__info__list">
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                        <p>Старт проєкту</p>
                                        </div>
                                        <p>24 квітня 2023</p>
                                    </li>
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                        <p>Цикл проєкту</p>
                                        </div>
                                        <p>7 тижнів</p>
                                    </li>
                                    <li className="projects-section__info__list-item">
                                        <div style="display: flex; align-items: center; gap: 0.4rem;">
                                            <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                        <p>Складність</p>
                                        </div>
                                        <div className="projects-section__info__list-item__level-container">
                                            <div className="projects-section__info__list-item__level active"></div>
                                            <div className="projects-section__info__list-item__level active"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                            <div className="projects-section__info__list-item__level"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="projects-section__team">
                                <button className="projects-section__team__btn">Команда проєкту</button>
                            </div>
                        </div>
                        <div className="thumb">
                                <div className="thumb__text-container">
                                    <p>Stack: HTML, CSS, TS, Node, MongoDB, HTML, CSS, TS, Node,  MongoDB,Node, MongoDB, React</p>
                                <button className="thumb__close-icon"><svg width="24" height="24"><use href="@img/sprite.svg#close"></use></svg></button>
                                </div>
                                <div className="thumb__container">
                                    <div className="thumb__container__body">
                                        <h4 className="thumb__container__body__title">Project Manager</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Design</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</p>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Front-end</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Back-end</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                        <h4 className="thumb__container__body__title">Quality Assurance</h4>
                                        <div className="thumb__container__body__members">
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Іван Іваненко</a>
                                            <a href="https://www.linkedin.com/feed/" target="_blank" referrerpolicy="no-referrer">Ольга Цибуленко</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item__state-container">
                            <div className="projects-section__projects-item__state under-development"></div>
                            <p className="projects-section__projects-item__state-text">В розробці</p>
                        </div>
                        <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                        <div className="projects-section__info">
                            <ul className="projects-section__info__list">
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                    <p>Старт проєкту</p>
                                    </div>
                                    <p>24 квітня 2023</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                    <p>Цикл проєкту</p>
                                    </div>
                                    <p>7 тижнів</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                    <p>Складність</p>
                                    </div>
                                    <div className="projects-section__info__list-item__level-container">
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="projects-section__projects-item" style="background-image: url('@img/var-1.webp')">
                        <div className="projects-section__projects-item__state-container" style="width: 70%;">
                            <div className="projects-section__projects-item__state formation-of-the-team"></div>
                            <p className="projects-section__projects-item__state-text">Формування команди</p>
                        </div>
                        <h4 className="projects-section__projects-item__title">Сайт притулку для вуличних тварин Murrfecto</h4>
                        <div className="projects-section__info">
                            <ul className="projects-section__info__list">
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#start-icon"></use></svg>
                                    <p>Старт проєкту</p>
                                    </div>
                                    <p>24 квітня 2023</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#time-icon"></use></svg>
                                    <p>Цикл проєкту</p>
                                    </div>
                                    <p>7 тижнів</p>
                                </li>
                                <li className="projects-section__info__list-item">
                                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                                        <svg className="projects-section__info__list-item__icon"><use href="@img/sprite.svg#level-icon"></use></svg>
                                    <p>Складність</p>
                                    </div>
                                    <div className="projects-section__info__list-item__level-container">
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level active"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                        <div className="projects-section__info__list-item__level"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="projects-section__load-more__container">
            <button className="projects-section__load-more">Більше проєктів<svg className="header__lang-arrow"><use href="@img/sprite.svg#arrow-bottom"></use></svg></button>
        </div>
    </div>
</section>

  );*/
};

export default Projects;
