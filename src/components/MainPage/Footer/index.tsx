// 'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ContainerMaxW1200 } from '@/components/atomic';
import {
  FacebookIcon,
  LinkedInIcon,
  LogoFooter,
} from '@/components/common/icons';

import { TContactsInfo } from '@/types';
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

const getContacts = async () => {
  const noData = {
    contactsDataList: {
      phone1: 'n/a',
      phone2: 'n/a',
      email: 'n/a',
    },
    socialsMediaList: {
      linkedin: '#',
      facebook: '#',
    },
  };

  const res = await fetch('https://baza-trainee.tech/api/v1/contacts', {
    cache: 'no-cache',
  });

  return res.ok ? await res.json() : noData;
};

export const Footer = async () => {
  const contactsInfo: TContactsInfo = await getContacts();

  return (
    <footer className="bg-neutral-700 pb-12 pt-16" id="footer">
      <ContainerMaxW1200 className="flex-col text-white">
        <div className="flex flex-col justify-between gap-[3.2rem] sm:h-[18.4rem] sm:flex-row">
          <div className="lg:w-full text-white">
            <LogoFooter/>
          </div>

          <div className="lg:w-full">
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

          <div className="lg:w-full">
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

          <div className="lg:w-full">
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
                  {contactsInfo.contactsDataList.phone1 + ''}
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
                  {contactsInfo.contactsDataList.phone2 + ''}
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
                  {contactsInfo.contactsDataList.email}
                </span>
              </li>
            </ul>

            <ul
              className={`${styles['footer-list']} ${styles['footer-list--social']}`}
            >
              <li className={styles['footer-list__item--social']}>
                <Link
                  href={contactsInfo.socialsMediaList.linkedin}
                  className={styles['footer-social-link']}
                >
                  <LinkedInIcon className={styles['footer-social-link__svg']} />
                </Link>
              </li>
              <li className={styles['footer-list__item--social']}>
                <Link
                  href={contactsInfo.socialsMediaList.facebook}
                  className={styles['footer-social-link']}
                >
                  <FacebookIcon className={styles['footer-social-link__svg']} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <span className="mt-12 text-[1.4rem] text-neutral-75 sm:mt-0">
          Розробка BazaTraineeUkraine 2023 Усі права захищені.
        </span>
      </ContainerMaxW1200>
    </footer>
  );
};
