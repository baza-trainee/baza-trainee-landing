'use client';
import { dictionaries } from '@/app/[lang]/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { TDictionary } from '@/types';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const Page404 = () => {
  const pathname = usePathname();
  const lang = pathname
    .substring(pathname.indexOf('ua' || 'pl' || 'en'), 3)
    .replace('/', '');
  const dict: TDictionary = dictionaries[lang as TLandingLanguage];
  const { notFound } = dict || {};
  const { title, description, button } = notFound || {};
  return (
    <section className={styles.error}>
      <div className="m-auto max-w-[120rem]">
        <p className={styles.error__digits}>404</p>
        <h2 className={styles.error__title}>{title}</h2>
        <p className={styles.error__description}>{description}</p>
        <a href="/ua" className={styles['error__back-home-link']}>
          {button}
        </a>
      </div>
    </section>
  );
};

export default Page404;
