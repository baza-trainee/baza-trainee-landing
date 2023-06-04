const Partners = () => {
  return (
    <section className="partner">
      <div className="container">
        <h2 className="partner_title">Партнери</h2>
        <ul className="partner_list">
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
          <li className="partner_item">
            <a className="partner_link" href="http://"></a>
          </li>
        </ul>
        <button type="button" className="add_more">
          Більше партнерів
          <svg className="header__lang-arrow">
            <use href="@img/sprite.svg#arrow-bottom"></use>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Partners;
