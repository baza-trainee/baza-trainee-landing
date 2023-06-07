import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { TSlide } from '.';
import styles from './styles.module.scss';

const Slide = ({ slideData }: { slideData: TSlide }) => {
  return (
    <div
      className={styles['slider-section__slide']}
      style={{ backgroundImage: `url(${slideData.image})` }}
    >
      <div className={`container ${styles['slider-section__slide-container']}`}>
        <div className={styles['slider-section__content']}>
          <h2 className={`h2 h2--white`}>{slideData.title}</h2>
          <p className={`sub-heading--white ${styles['sub-heading--white']}`}>
            {slideData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
