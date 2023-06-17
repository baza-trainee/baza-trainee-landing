'use client';

import AdminButton from '@/components/common/AdminButton';
import AdminTitle from '@/components/common/AdminTitle';
import TextInput from '@/components/common/InputFields/TextInput';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

const recoverLink = 'https://youtu.be/dQw4w9WgXcQ'; //TODO

const Authorization = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const loginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const loginErrorHandler = (email: string) => {
    const isInvalid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    isInvalid
      ? setLoginError('')
      : setLoginError('Вкажіть адресу електронної пошти');
  };

  const passwordErrorHandler = (password: string) => {
    password.length > 5
      ? setPasswordError('')
      : setPasswordError('Пароль повинен бути довше ніж 5 символів');
  };

  const loginHandler = () => {
    loginErrorHandler(login);
    passwordErrorHandler(password);
    if (!loginError && !passwordError) {
      console.log('reg');
    }
  };

  const registrationHandler = () => {
    loginErrorHandler(login);
    passwordErrorHandler(password);
    if (!loginError && !passwordError) {
      console.log('reg');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <AdminTitle title={'Вхід'} />
        <TextInput
          title={'Логін'}
          errorText={loginError}
          placeholder={'Введіть логін'}
          value={login}
          onChange={loginChangeHandler}
        />
        <TextInput
          title={'Пароль'}
          placeholder={'Введіть пароль'}
          errorText={passwordError}
          type={'password'}
          value={password}
          onChange={passwordChangeHandler}
        />
        <Link href={recoverLink} className={styles.text}>
          Забули пароль?
        </Link>
        <AdminButton title={'Увійти'} onClick={loginHandler} />
        {true && (
          <AdminButton
            title={'Зареєструватися'}
            onClick={registrationHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Authorization;
