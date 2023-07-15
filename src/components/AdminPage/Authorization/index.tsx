'use client';

import AdminButton from '@/components/common/AdminButton';

import { AdminTitle, InputField, PasswordInput } from '@/components/atomic';
import { GlobalContext } from '@/store/globalContext';
import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

const recoverLink = 'https://youtu.be/dQw4w9WgXcQ'; // TODO: Replace with actual recover link

const Authorization = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dispatch, data, isError] = useAPI(auth.logIn);
  const { setAlertInfo } = useContext(GlobalContext);

  useEffect(() => {
    console.log(data);
    console.log(isError);
    if (!isError && data) alert(`Login successful ${JSON.stringify(data)}`);
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
  }, [isError, data, setAlertInfo]);

  const loginHandler = async () => {
    dispatch({ email, password });
  };

  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
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
        <AdminButton title={'Увійти'} onClick={loginHandler} />
      </div>
    </div>
  );
};

export default Authorization;
