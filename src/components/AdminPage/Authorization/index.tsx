'use client';

import AdminButton from '@/components/common/AdminButton';

import { AdminTitle, InputField, PasswordInput } from '@/components/atomic';
import auth from '@/utils/API/auth';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

const recoverLink = 'https://youtu.be/dQw4w9WgXcQ'; // TODO: Replace with actual recover link

const validateEmail = (email: string) => {
  const isInvalid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return isInvalid ? '' : 'Вкажіть адресу електронної пошти';
};

const validatePassword = (password: string) => {
  return password.length > 5 ? '' : 'Пароль повинен бути довше ніж 5 символів';
};

const Authorization = () => {
  const isAllowRegistration = () =>
    Boolean(process.env.NEXT_PUBLIC_ENABLE_REGISTRATION);

  const [isEnableRegistration] = useState<boolean>(isAllowRegistration);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const loginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    const emailError = validateEmail(login);
    const passwordError = validatePassword(password);

    setLoginError(emailError);
    setPasswordError(passwordError);

    if (!emailError && !passwordError) {
      const res = await auth.logIn({ email: login, password: password });
      if (res) alert('Login successful');
    }
  };

  const registrationHandler = async () => {
    const emailError = validateEmail(login);
    const passwordError = validatePassword(password);

    setLoginError(emailError);
    setPasswordError(passwordError);

    if (!emailError && !passwordError) {
      const res = await auth.register({
        email: login,
        password: password,
        name: login,
      });
      if (res) alert(`User registered ${JSON.stringify(res)}`);
    }
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
        <AdminTitle className="mb-0">Вхід</AdminTitle>
        <InputField
          title="Логін"
          value={login}
          setValue={setLogin}
          inputType="text"
          name="login"
          placeholderText="Введіть логін"
        />
        <PasswordInput
          name="report"
          title="Пароль"
          value={login}
          setValue={setPassword}
          maxSize={44}
          placeholderText="Введіть пароль"
        />

        {/*
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
  />*/}
        <Link href={recoverLink} className={styles.text}>
          Забули пароль?
        </Link>
        <AdminButton title={'Увійти'} onClick={loginHandler} />
        {isEnableRegistration && (
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
