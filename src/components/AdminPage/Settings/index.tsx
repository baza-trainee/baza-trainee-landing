'use client';

import { AdminTitle, FormBtns, PasswordInput } from '@/components/atomic';
import { useGlobalContext } from '@/store/globalContext';
import auth from '@/utils/API/auth';
import { validatePassword } from '@/utils/InputValidations';
import { useAPI } from '@/utils/hooks/useAPI';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

export const Settings = () => {
  const { setAlertInfo } = useGlobalContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const [dispatch, data, isError] = useAPI(auth.changePassword);
  const [errorsData, setErrorsData] = useState('');

  type TPasswordDate = {
    oldPassword: string;
    newPassword: string;
    duplicationPassword: string;
  };

  const defaultPasswordData: TPasswordDate = useMemo(() => {
    return {
      oldPassword: '',
      newPassword: '',
      duplicationPassword: '',
    };
  }, []);

  const [passwordData, setPasswordData] =
    useState<TPasswordDate>(defaultPasswordData);

  const resetHandler = useCallback(() => {
    setPasswordData(defaultPasswordData);
    setErrorsData('');
  }, [defaultPasswordData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      passwordData.newPassword &&
      !validatePassword(passwordData.newPassword)
    ) {
      setErrorsData('8+ символів, літери (верхні, нижні), цифри, спецсимволи.');
      return;
    }

    const { oldPassword, newPassword } = passwordData;
    dispatch({ oldPassword, newPassword });
  };

  useEffect(() => {
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Пароль змінено успішно',
        textInfo: `Пароль змінено`,
      });
      setErrorsData('');
      resetHandler();
      return;
    }
    if (data && data.status === 400) {
      setAlertInfo({
        state: 'error',
        title: 'Неправильний старий пароль',
        textInfo: `Неправильний старий пароль`,
      });
      return;
    }

    if (data && data.status === 500) {
      setAlertInfo({
        state: 'error',
        title: 'Помилка серверу',
        textInfo: `Під час оновлення паролю сталася помилка. Спробуйте, будь ласка, пізніше`,
      });
      return;
    }
  }, [data, isError, setAlertInfo, resetHandler]);

  useEffect(() => {
    const isFieldsNoEmpty: boolean = !!(
      passwordData.oldPassword &&
      passwordData.newPassword &&
      passwordData.duplicationPassword
    );
    const isNewPasswordsIqual: boolean =
      passwordData.newPassword === passwordData.duplicationPassword;
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
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">
        Змінити пароль
      </AdminTitle>

      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="flex w-full max-w-[414px] flex-col gap-10 bg-base-dark px-[1.2rem] py-8 shadow-[0_4px_4px_0_rgba(234,232,232,0.25),0_2px_12px_0_rgba(234,232,232,0.25)]">
          <div className="flex flex-wrap gap-[2.4rem]">
            <PasswordInput
              name="oldPassword"
              title="Старий пароль"
              value={passwordData.oldPassword}
              onChange={onInputChange}
              placeholderText="Введіть пароль"
            />
          </div>
          <div className="flex flex-wrap items-end gap-[2.4rem]">
            <PasswordInput
              name="newPassword"
              title="Новий пароль"
              value={passwordData.newPassword}
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
        </div>
        <div className="ml-5 flex gap-[1.8rem]">
          <FormBtns
            isEditMode={true}
            disabled={!isFormValid}
            handleFunc={resetHandler}
          />
        </div>
      </form>
    </div>
  );
};