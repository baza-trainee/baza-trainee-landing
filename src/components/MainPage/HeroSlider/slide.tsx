// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import styles from './styles.module.scss';

const Slide = ({
  slideData,
  slideLang,
}: {
  slideData: {
    __v: number;
    _id: string;
    imageUrl: string;
    subtitle: { en: string; pl: string; ua: string };
    title: { en: string; pl: string; ua: string };
  };
  slideLang: 'en' | 'ua' | 'pl';
}) => {
  const { imageUrl, title, subtitle } = slideData;
  return (
    <div
      className={styles['slider-section__slide']}
      // style={{ backgroundImage: `url(${imageUrl})` }}
      style={{ background: 'red' }}
    >
      <div className={`container ${styles['slider-section__slide-container']}`}>
        <div className={styles['slider-section__content']}>
          <h2 className="text-white">{title[slideLang]}</h2>
          <p className="text-[2rem] font-medium leading-[1.6] text-white">
            {subtitle[slideLang]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
