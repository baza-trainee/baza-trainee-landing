'use client';

import { ChangeEvent,useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter,useSearchParams  } from 'next/navigation';

import { useGlobalContext } from '@/store/globalContext';

import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';
import { validatePassword } from '@/utils/InputValidations';

import { AdminTitle, FormBtns,PasswordInput } from '@/components/atomic';

const PasswordReset = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const userId = searchParams.get('userId') || '';
  const router = useRouter();

  const [dispatch, data, isError] = useAPI(auth.passwordReset);
  const { setAlertInfo } = useGlobalContext();
  const [errorsData, setErrorsData] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  type TPasswordDate = {
    password: string;
    duplicationPassword: string;
  };

  const defaultPasswordData: TPasswordDate = useMemo(() => {
    return {
      password: '',
      duplicationPassword: '',
    };
  }, []);

  const [passwordData, setPasswordData] =
    useState<TPasswordDate>(defaultPasswordData);

  const resetHandler = useCallback(() => {
    setPasswordData(defaultPasswordData);
    setErrorsData('');
  }, [defaultPasswordData]);

  useEffect(() => {
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Пароль змінено успішно',
        textInfo: `Пароль змінено`,
        func: () =>
          setTimeout(() => {
            router.push('/login');
          }, 500),
      });
      setErrorsData('');
      resetHandler();
      return;
    }
    if (data && data.status === 500) {
      setAlertInfo({
        state: 'error',
        title: 'Непередбачувана помилка на сервері',
        textInfo: `Спробуйте пізніше або повідомте адміністратора`,
      });
    }
  }, [data, isError, setAlertInfo, resetHandler, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordData.password && !validatePassword(passwordData.password)) {
      setErrorsData('8+ символів, літери (верхні, нижні), цифри, спецсимволи.');
      return;
    }

    const { password } = passwordData;
    dispatch({ userId, token, password });
  };

  useEffect(() => {
    const isFieldsNoEmpty: boolean = !!(
      passwordData.password && passwordData.duplicationPassword
    );
    const isNewPasswordsIqual: boolean =
      passwordData.password === passwordData.duplicationPassword;
    setIsFormValid(isFieldsNoEmpty && isNewPasswordsIqual);
  }, [passwordData]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      className="flex min-h-[100vh] items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex w-[36.6rem] flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
        <AdminTitle>Відновити пароль</AdminTitle>
        <p className="font-semibold">Створіть новий пароль</p>
        <div className="flex flex-wrap items-end gap-[2.4rem]">
          <PasswordInput
            name="password"
            title="Новий пароль"
            value={passwordData.password}
            onChange={onInputChange}
            placeholderText="Введіть пароль"
            errorText={errorsData}
          />
        </div>
        <div className="flex flex-wrap items-end gap-[2.4rem]">
          <PasswordInput
            name="duplicationPassword"
            title="Повторіть новий пароль"
            value={passwordData.duplicationPassword}
            onChange={onInputChange}
            placeholderText="Введіть пароль"
          />
        </div>

        <div className="flex gap-[1.8rem]">
          <FormBtns
            disabled={!isFormValid}
            cancelAction={resetHandler}
            isEditModeNoWrap
          />
        </div>
      </div>
    </form>
  );
};

export default PasswordReset;
