'use client';
import { dictionaries } from '@/app/[lang]/dictionaries';
import { TDictionary } from '@/types';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Page404 = () => {
  const [dict, setDict] = useState<TDictionary>();
  const getDictionary = async () => {
    const lang = (await localStorage.getItem('landingLanguage')) || 'ua';
    setDict(await dictionaries[lang]());
  };

  useEffect(() => {
    getDictionary();
  }, []);

  return (
    <section className={styles.error}>
      <div className="m-auto max-w-[120rem]">
        <p className={styles.error__digits}>404</p>
        <h2 className={styles.error__title}>{dict?.notFound.title}</h2>
        <p className={styles.error__description}>
          {dict?.notFound.description}
        </p>
        <a href="/ua" className={styles['error__back-home-link']}>
          {dict?.notFound.button}
        </a>
      </div>
    </section>
  );
};

export default Page404;
