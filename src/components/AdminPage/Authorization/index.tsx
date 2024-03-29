'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { sidebarSectionsList } from '../SideBar/sidebarSectionsList';

import { useGlobalContext } from '@/store/globalContext';

import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';

import {
  AdminPanelButton,
  AdminTitle,
  InputField,
  PasswordInput,
} from '@/components/atomic';

const recoverLink = 'login/request-reset';

const Authorization = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dispatch, data, isError] = useAPI(auth.logIn);
  const { setAlertInfo } = useGlobalContext();
  const { push } = useRouter();

  useEffect(() => {
    if (!isError && data) {
      const id = sidebarSectionsList[0].id;
      push(`/admin/${id}`);
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
          title: 'Невірні облікові дані',
          textInfo: `Надані облікові дані невірні. Будь ласка, перевірте своє імʼя користувача та пароль і спробуйте ще раз`,
        });
      }
    }
  }, [isError, data, setAlertInfo, push]);

  const loginHandler = async () => {
    if (email && password) {
      dispatch({ email, password });
    } else {
      setAlertInfo({
        state: 'info',
        title: 'Не заповнені поля',
        textInfo: `Поля логін та пароль повинні бути заповнені`,
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      loginHandler();
    }
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="flex w-[36.6rem] flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
        <AdminTitle>Вхід</AdminTitle>
        <InputField
          title="Логін"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputType="text"
          name="login"
          placeholderText="Введіть логін"
          onKeyDown={handleKeyDown}
        />
        <PasswordInput
          name="password"
          title="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholderText="Введіть пароль"
          onKeyDown={handleKeyDown}
        />
        <div>
          <Link
            href={recoverLink}
            className="text-[1.6rem] text-neutral-600 underline"
          >
            Забули пароль?
          </Link>
        </div>

        <AdminPanelButton onClick={loginHandler}>Увійти</AdminPanelButton>
      </div>
    </div>
  );
};

export default Authorization;
