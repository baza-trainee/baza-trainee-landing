'use client';
import { dictionaries } from '@/locales/dictionaries';
import { TLandingLanguage } from '@/store/globalContext';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
const mockText = {
  button: '',
  title: '',
  description: '',
};

const Page404 = () => {
  const [text, setText] = useState(mockText);

  useEffect(() => {
    const landingLanguage = (localStorage.getItem('landingLanguage') ||
      'ua') as TLandingLanguage;
    const { title, description, button } =
      dictionaries[landingLanguage].notFound || mockText;
    setText({ title, description, button });
  }, []);

  return (
    <section className={styles.error}>
      <div className="m-auto max-w-[120rem]">
        <p className={styles.error__digits}>404</p>
        <h2 className={styles.error__title}>{text.title}</h2>
        <p className={styles.error__description}>{text.description}</p>
        <a href="/ua" className={styles['error__back-home-link']}>
          {text.button}
        </a>
      </div>
    </section>
  );
};

export default Page404;
