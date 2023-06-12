import FacebookIcon from '@/components/common/icons/FacebookIcon';
import LinkedInIcon from '@/components/common/icons/LinkedInIcon';
import styles from './styles.module.scss';

import { authApi, contactsApi } from '@/utils/API';

(async () => {
  console.log(
    await authApi.logIn({
      email: 'snoop@doggie.dog',
      password: '0800500609',
    }),
    authApi.getInfo(),
    contactsApi.getData(),
    contactsApi.update({
      contacts: {
        contactsDataList: {
          phone1: 1234567890,
          phone2: 9876543210,
          email: 'example@example.com',
        },
        socialsMediaList: {
          linkedin: 'https://www.linkedin.com/in/example',
          facebook: 'https://www.facebook.com/example',
        },
      },
    })
  );
})();

const anchoreLinksList = [
  { id: 1, title: 'Проєкти', href: '#projects' },
  { id: 2, title: 'Партнери', href: '#partners' },
  { id: 3, title: 'Взяти участь', href: '#forms' },
];

const officialDocsList = [
  { id: 1, title: 'Політика конфіденційності', href: '/' },
  { id: 2, title: 'Правила користування сайтом', href: '/' },
  { id: 3, title: 'Статут', href: '/' },
  { id: 4, title: 'Звітність', href: '/' },
];

const contactsDataList = [
  { id: 1, type: 'phone', data: '+38 063 628 6630' },
  { id: 2, type: 'phone', data: '+38 067 568 1788' },
  { id: 3, type: 'mail', data: 'info@baza-trainee.site' },
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
            <a href="#header" className={styles['footer-logo']}>
              <img
                className={styles['footer-logo__svg']}
                src="/svg/logo-footer.svg"
                alt="Main logo"
              />
            </a>
          </div>
          <div className={styles['footer-section']}>
            <ul className={styles['footer-list']}>
              {anchoreLinksList.map(({ id, title, href }) => (
                <li key={id} className={styles['footer-list__item']}>
                  <a href={href} className={styles['footer-list__link']}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <ul className={styles['footer-list']}>
              {officialDocsList.map(({ id, title, href }) => (
                <li key={id} className={styles['footer-list__item']}>
                  <a
                    href={href}
                    className={`${styles['footer-list__link']} underline`}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles['footer-section']}>
            <ul
              className={`${styles['footer-list']} ${styles['footer-list--contacts']}`}
            >
              {contactsDataList.map(({ id, type, data }) => (
                <li
                  key={id}
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
                  <a href={href} className={styles['footer-social-link']}>
                    <IconComponent
                      className={styles['footer-social-link__svg']}
                    />
                  </a>
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
