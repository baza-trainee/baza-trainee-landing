'use client';

import {
  AdminPanelButton,
  AdminTitle,
  InputField,
  PasswordInput,
} from '@/components/atomic';
import { GlobalContext } from '@/store/globalContext';
import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';
import { localStorageHandler } from '@/utils/localStorageHandler';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const recoverLink = 'https://youtu.be/dQw4w9WgXcQ'; // TODO: Replace with actual recover link

const Authorization = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dispatch, data, isError] = useAPI(auth.logIn);
  const { setAlertInfo } = useContext(GlobalContext);
  const { push } = useRouter();

  useEffect(() => {
    if (!isError && data) {
      push('/admin');
      localStorageHandler.setItem('token', data.token);
      localStorageHandler.setItem('id', data._id);
    }

    if (isError) {
      if (data.status === 500) {
        setAlertInfo({
          state: 'error',
          title: 'Непередбачувана помилка на сервері',
          textInfo: `Спробуйте пізніше або повідомте адміністратора`,
        });
      } else {
        setAlertInfo({
          state: 'error',
          title: 'Помилка в логіні та/або паролі',
          textInfo: `Перевірте логін та пароль і спробуйте ще раз`,
        });
      }
    }
  }, [isError, data, setAlertInfo, push]);

  const loginHandler = async () => {
    dispatch({ email, password });
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="flex w-[36.6rem] flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
        <AdminTitle>Вхід</AdminTitle>
        <InputField
          title="Логін"
          value={email}
          setValue={setEmail}
          inputType="text"
          name="login"
          placeholderText="Введіть логін"
        />
        <PasswordInput
          name="password"
          title="Пароль"
          value={password}
          setValue={setPassword}
          placeholderText="Введіть пароль"
        />
        <Link
          href={recoverLink}
          className="text-[1.6rem] text-neutral-600 underline"
        >
          Забули пароль?
        </Link>
        <AdminPanelButton onClick={loginHandler}>Увійти</AdminPanelButton>
      </div>
    </div>
  );
};

export default Authorization;
