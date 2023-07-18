'use client';
import { ContainerMaxW1200 } from '@/components/atomic';
import FacebookIcon from '@/components/common/icons/FacebookIcon';
import LinkedInIcon from '@/components/common/icons/LinkedInIcon';
import { GlobalContext } from '@/store/globalContext';
import Link from 'next/link';
import { useContext } from 'react';
import styles from './styles.module.scss';

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

export const Footer = ({
  dictionary,
}: {
  dictionary: {
    footer: {
      projects: string;
      partners: string;
      participate: string;
      privacyPolicy: string;
      rulesForUsingTheSite: string;
      statute: string;
      accountability: string;
      allRightsReserved: string;
    };
  };
}) => {
  const anchoreLinksList = [
    { title: dictionary.footer.projects, href: '#projects' },
    { title: dictionary.footer.partners, href: '#partners' },
    { title: dictionary.footer.participate, href: '#forms' },
  ];

  const officialDocsList = [
    { title: dictionary.footer.privacyPolicy, href: '/' },
    { title: dictionary.footer.rulesForUsingTheSite, href: '/' },
    { title: dictionary.footer.statute, href: '/' },
    { title: dictionary.footer.accountability, href: '/' },
  ];

  const { info } = useContext(GlobalContext);
  return (
    <footer className="bg-neutral-700 py-16" id="footer">
      <ContainerMaxW1200 className="flex-col text-white">
        {/* needs refactoring ! */}

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
              {/* {[info].map(({ contacts, documents }, i) => (
                // <li key={contacts.} className={styles['footer-list__item--social']}>
                //   <Link href={href} className={styles['footer-social-link']}>
                //     <IconComponent
                //       className={styles['footer-social-link__svg']}
                //     />
                //   </Link>
                // </li>
                <li key={i}>{contacts.contactsDataList.phone1}</li>
              ))} */}
            </ul>
          </div>
        </div>

        <p className="text-[1.4rem] text-neutral-75">
          {dictionary.footer.allRightsReserved}
        </p>
      </ContainerMaxW1200>
    </footer>
  );
};
