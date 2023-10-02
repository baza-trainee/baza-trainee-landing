'use client';

import { AdminTitle, FormBtns, InputField } from '@/components/atomic';
import { useGlobalContext } from '@/store/globalContext';
import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';
import { useEffect, useState, useCallback } from 'react';
import { validateEmail } from '@/utils/InputValidations';

const RequestReset = () => {
  const [email, setEmail] = useState<string>('');
  const [dispatch, data, isError] = useAPI(auth.passwordRequestReset);
  const { setAlertInfo } = useGlobalContext();
  const [errorsData, setErrorsData] = useState('');

  const resetHandler = useCallback(() => {
    setEmail('');
    setErrorsData('');
  }, []);

  useEffect(() => {
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Перевірте пошту',
        textInfo: `На вашу пошту надіслано листа для підтвердження зміни паролю`,
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
  }, [data, isError, setAlertInfo, resetHandler]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email && !validateEmail(email)) {
      setErrorsData('Будь ласка, введіть правильну URL-адресу.');
      return;
    }
    dispatch({ email });
  };

  return (
    <form
      className="flex min-h-[100vh] items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex w-[36.6rem] flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
        <AdminTitle>Забули пароль</AdminTitle>
        <p className="font-semibold">
          Вкажіть вашу електронну адресу, щоб підтвердити вашу особу
        </p>
        <InputField
          title="Електронна пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputType="text"
          name="login"
          placeholderText="Введіть електронну пошту"
          errorText={errorsData}
        />

        <FormBtns disabled={!email} handleFunc={resetHandler} isResetPass />
      </div>
    </form>
  );
};

export default RequestReset;
