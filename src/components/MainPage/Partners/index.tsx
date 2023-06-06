import styles from './styles.module.scss';

const Partners = () => {
  return (
    <section className={styles.partner} id="partners">
      <div className="container">
        <h2 className={styles.partner_title}>Партнери</h2>
        <ul className={styles.partner_list}>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
          <li className={styles.partner_item}>
            <a className={styles.partner_link} href="http://"></a>
          </li>
        </ul>
        <button type="button" className={styles.add_more}>
          Більше партнерів
          <svg className={styles.header__lang_arrow}>
            <use href="@img/sprite.svg#arrow-bottom"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Partners;
