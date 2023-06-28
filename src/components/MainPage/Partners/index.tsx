'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';

const Partners = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    draggable: false,
  };

  return (
    <section className={styles.partner} id="partners">
      <div className="container">
        <h2 className={styles.partner_title}>Партнери</h2>
        <ul className={styles.partner_list}>
          <Slider {...sliderSettings}>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                1
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                2
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                3
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                4
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                5
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                6
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                7
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                8
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                9
              </a>
            </li>
            <li className={styles.partner_item}>
              <a className={styles.partner_link} href="http://">
                10
              </a>
            </li>
          </Slider>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
