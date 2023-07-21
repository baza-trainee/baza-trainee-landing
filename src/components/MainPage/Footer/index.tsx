'use client';
// import { ContainerMaxW1200 } from '@/components/atomic';
// import FacebookIcon from '@/components/common/icons/FacebookIcon';
// import LinkedInIcon from '@/components/common/icons/LinkedInIcon';
import contactsApi from '@/utils/API/contacts';
import { useAPI } from '@/utils/hooks/useAPI';
import Image from 'next/image';
import { ContainerMaxW1200 } from '@/components/atomic';
import { FacebookIcon, LinkedInIcon } from '@/components/common/icons';
import Link from 'next/link';
import { useEffect } from 'react';
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

export const Footer = () => {
  const [
    getContactsData,
    contactsData,
    isContactsDataLoading,
    isContactsDataError,
  ] = useAPI(contactsApi.getData);

  useEffect(() => {
    getContactsData();
  }, []);

  if (!contactsData || isContactsDataLoading) {
    return <div>Loading...</div>;
  }

  if (!contactsApi || isContactsDataError) {
    return <div>Error</div>;
  }

  return (
    <footer className="bg-neutral-700 py-16" id="footer">
      <ContainerMaxW1200 className="flex-col text-white">
        {/* needs refactoring ! */}

        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-section']}>
            <Link href="#header" className={styles['footer-logo']}>
              <Image
                className={styles['footer-logo__svg']}
                src="/svg/logo-footer.svg"
                alt="Main logo"
                width={122}
                height={122}
              />
            </Link>
          </div>
          <div className={styles['footer-section']}>
            <ul className={styles['footer-list']}>
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
              className={`${styles['footer-list']} [&>*:nth-child(-n+2)]:underline`}
            >
              {officialDocsList.map(({ title, href }) => (
                <li key={title + href} className={styles['footer-list__item']}>
                  <Link
                    href={href}
                    className={`${styles['footer-list__link']} `}
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
              <li
                className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
              >
                <Image
                  className={styles['footer-list__icon']}
                  src={`/svg/phone.svg`}
                  alt={`phone icon`}
                  width={48}
                  height={48}
                />
                <span className={styles['footer-list__text']}>
                  {contactsData.contacts.contactsDataList.phone1}
                </span>
              </li>
              <li
                className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
              >
                <Image
                  className={styles['footer-list__icon']}
                  src={`/svg/phone.svg`}
                  alt={`phone icon`}
                  width={48}
                  height={48}
                />
                <span className={styles['footer-list__text']}>
                  {contactsData.contacts.contactsDataList.phone2}
                </span>
              </li>
              <li
                className={`${styles['footer-list__item']} ${styles['footer-list__item--contacts']}`}
              >
                <Image
                  className={styles['footer-list__icon']}
                  src={`/svg/mail.svg`}
                  alt={`email icon`}
                  width={48}
                  height={48}
                />
                <span className={styles['footer-list__text']}>
                  {contactsData.contacts.contactsDataList.email}
                </span>
              </li>
            </ul>

            <ul
              className={`${styles['footer-list']} ${styles['footer-list--social']}`}
            >
              <li className={styles['footer-list__item--social']}>
                <Link
                  href={contactsData.contacts.socialsMediaList.linkedin}
                  className={styles['footer-social-link']}
                >
                  <LinkedInIcon className={styles['footer-social-link__svg']} />
                </Link>
              </li>
              <li className={styles['footer-list__item--social']}>
                <Link
                  href={contactsData.contacts.socialsMediaList.facebook}
                  className={styles['footer-social-link']}
                >
                  <FacebookIcon className={styles['footer-social-link__svg']} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[1.4rem] text-neutral-75">
          Розробка BazaTraineeUkraine 2023 Усі права захищені.
        </p>
      </ContainerMaxW1200>
    </footer>
  );
};
