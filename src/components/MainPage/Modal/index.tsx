'use client';

import { GlobalContext } from '@/store/globalContext';
import { ReducerActionType } from '@/store/globalReducer';
import { StoreContextType } from '@/types/storeTypes';
import { MouseEvent, useContext, useEffect } from 'react';
import styles from './styles.module.scss';

const Modal = () => {
  const { state, dispatch } = useContext<StoreContextType>(GlobalContext);

  const modalCloseHandler = () => {
    dispatch({
      type: ReducerActionType.TOGGLE_LANDING_MODAL,
    });
  };

  const handleInnerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    state.isLandingModalShown && document.body.classList.add('disable-scroll');

    return () => {
      !state.isLandingModalShown &&
        document.body.classList.remove('disable-scroll');
    };
  }, []);

  if (state.isLandingModalShown)
    return (
      <section
        className={`${styles.backdrop} ${styles['backdrop--is-hidden']}`}
        onClick={modalCloseHandler}
      >
        <div className={styles.modal} onClick={(e) => handleInnerClick(e)}>
          <button type="button">
            <img
              src="/svg/close.svg"
              width="44"
              height="44"
              className={styles['modal__close-btn']}
              onClick={modalCloseHandler}
            />
          </button>
          <div className={styles.donate}>
            <h2 className={styles['donate__title']}>
              Оберіть суму, якою хочете підтримати Baza Trainee Ukraine
            </h2>
            <p className={styles['donate__description']}>
              Сума списується одноразово, якщо бажаєте оформити підписку,
              потрібно ...
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

  return <></>;
};

export default Modal;
