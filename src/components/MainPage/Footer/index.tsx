import FacebookIcon from '@/components/common/icons/FacebookIcon';
import LinkedInIcon from '@/components/common/icons/LinkedInIcon';
import styles from './styles.module.scss';

import { fileApi } from '@/utils/API';
import { ChangeEvent, useState } from 'react';

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
  const [data] = useState(() => {
    return new FormData();
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    console.log(files);

    if (files) {
      data.append('file', files[0]);
      console.log(data.get('file'));
    }
  };

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data.get('file'));

          fileApi.upload(data);
        }}
      >
        <input type="file" name="file" onChange={handleFileChange} />
        <input type="submit" />
      </form>
    </footer>
  );
};

export default Footer;
