import FacebookIcon from '@/components/common/icons/FacebookIcon';
import LinkedInIcon from '@/components/common/icons/LinkedInIcon';
import Link from 'next/link';
import styles from './styles.module.scss';

const anchoreLinksList = [
  { title: 'Проєкти', href: '#projects' },
  { title: 'Партнери', href: '#partners' },
  { title: 'Взяти участь', href: '#forms' },
];

const officialDocsList = [
  { title: 'Політика конфіденційності', href: '/' },
  { title: 'Правила користування сайтом', href: '/' },
  { title: 'Статут', href: '/' },
  { title: 'Звітність', href: '/' },
];

const contactsDataList = [
  { type: 'phone', data: '+38 063 628 6630' },
  { type: 'phone', data: '+38 067 568 1788' },
  { type: 'mail', data: 'info@baza-trainee.site' },
];

const socialsMediaList = [
  {
    id: 1,
    iconName: LinkedInIcon,
    href: '/',
  },
  {
    id: 2,
    iconName: FacebookIcon,
    href: '/',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-section']}>
            <Link href="#header" className={styles['footer-logo']}>
              <img
                className={styles['footer-logo__svg']}
                src="/svg/logo-footer.svg"
                alt="Main logo"
              />
            </Link>
          </div>
          <div className={styles['footer-section']}>
            <ul
              className={`${styles['footer-list']} ${styles['footer-list--underlined']}`}
            >
              {anchoreLinksList.map(({ title, href }) => (
                <li key={title + href} className={styles['footer-list__item']}>
                  <Link href={href} className={styles['footer-list__link']}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <ul
              className={`${styles['footer-list']} ${styles['footer-list--underlined']}`}
            >
              {officialDocsList.map(({ title, href }) => (
                <li key={title + href} className={styles['footer-list__item']}>
                  <Link
                    href={href}
                    className={`${styles['footer-list__link']}`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <ul
              className={`${styles['footer-list']} ${styles['footer-list--contacts']}`}
            >
              {contactsDataList.map(({ type, data }) => (
                <li
                  key={data}
                  className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
                >
                  <img
                    className={styles['footer-list__icon']}
                    src={`/svg/${type}.svg`}
                    alt={`${type} icon`}
                  />
                  <span className={styles['footer-list__text']}>{data}</span>
                </li>
              ))}
            </ul>

            <ul
              className={`${styles['footer-list']} ${styles['footer-list--social']}`}
            >
              {socialsMediaList.map(({ id, iconName: IconComponent, href }) => (
                <li key={id} className={styles['footer-list__item--social']}>
                  <Link href={href} className={styles['footer-social-link']}>
                    <IconComponent
                      className={styles['footer-social-link__svg']}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles['footer__license']}>
          Розробка BazaTraineeUkraine 2023 Усі права захищені.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
