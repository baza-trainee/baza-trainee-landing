const renderFilledDivs = (count: number, styles: any) => {
  const filledDivs = [];

  for (let i = 0; i < 5; i++) {
    if (i < count) {
      filledDivs.push(
        <div
          key={i}
          className={styles['projects-section__info__list-item__level-active']}
        ></div>
      );
    } else {
      filledDivs.push(
        <div
          key={i}
          className={styles['projects-section__info__list-item__level']}
        ></div>
      );
    }
  }

  return filledDivs;
};
export default renderFilledDivs;
