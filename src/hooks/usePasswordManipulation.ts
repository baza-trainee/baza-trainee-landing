'use client';

import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useGlobalContext } from '@/store/globalContext';
import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';
import { validatePassword, validateEmail } from '@/utils/InputValidations';
import {
  TPasswordDateSettings,
  TPasswordDateReset,
  TPasswordDateRequest,
  DefaultDataProps,
} from '@/types/formTypes';

export const usePasswordManipulation = (props: DefaultDataProps) => {
  const { setAlertInfo } = useGlobalContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorsData, setErrorsData] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const userId = searchParams.get('userId') || '';

  const dispatchPath: any =
    props === 'settingsPassword'
      ? auth.changePassword
      : props === 'resetPassword'
      ? auth.passwordReset
      : auth.passwordRequestReset;

  const [dispatch, data, isError] = useAPI(dispatchPath);

  const defaultData = useMemo(() => {
    if (props === 'settingsPassword') {
      return {
        oldPassword: '',
        newPassword: '',
        duplicationPassword: '',
      } as TPasswordDateSettings;
    } else if (props === 'resetPassword') {
      return {
        password: '',
        duplicationPassword: '',
      } as TPasswordDateReset;
    } else if (props === 'requestPassword') {
      return {
        email: '',
      } as TPasswordDateRequest;
    }
  }, []);

  const [passwordData, setPasswordData] = useState(defaultData);

  const resetHandler = useCallback(() => {
    setPasswordData(defaultData);
    setErrorsData('');
  }, [defaultData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof passwordData === 'object' && passwordData !== null) {
      if (
        'oldPassword' in passwordData &&
        'newPassword' in passwordData &&
        'duplicationPassword' in passwordData
      ) {
        const { oldPassword, newPassword } = passwordData;
        if (newPassword && !validatePassword(newPassword)) {
          setErrorsData(
            '8+символів, літери (верхні, нижні), цифри, спецсимволи.'
          );
          return;
        }
        dispatch({ oldPassword, newPassword });
      }

      if ('password' in passwordData && 'duplicationPassword' in passwordData) {
        const { password } = passwordData;
        if (password && !validatePassword(password)) {
          setErrorsData(
            '8+ символів, літери (верхні, нижні), цифри, спецсимволи.'
          );
          return;
        }
        dispatch({ userId, token, password });
      }
      if ('email' in passwordData) {
        const { email } = passwordData;
        if (email && !validateEmail(email)) {
          setErrorsData('Будь ласка, введіть правильну електронну пошту.');
        } else {
          dispatch({ email });
        }
      }
    }
  };

  useEffect(() => {
    if (!isError && data) {
      if (props === 'settingsPassword') {
        setAlertInfo({
          state: 'info',
          title: 'Пароль змінено успішно',
          textInfo: `Пароль змінено`,
        });
      }
      if (props === 'resetPassword') {
        setAlertInfo({
          state: 'info',
          title: 'Пароль змінено успішно',
          textInfo: `Пароль змінено`,
          func: () =>
            setTimeout(() => {
              router.push('/login');
            }, 500),
        });
      }
      if (props === 'requestPassword') {
        setAlertInfo({
          state: 'info',
          title: 'Перевірте пошту',
          textInfo: `На вашу пошту надіслано листа для підтвердження зміни паролю`,
          func: () =>
            setTimeout(() => {
              router.push('/login');
            }, 500),
        });
      }
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
    if (typeof passwordData === 'object' && passwordData !== null) {
      if (
        'oldPassword' in passwordData &&
        'newPassword' in passwordData &&
        'duplicationPassword' in passwordData
      ) {
        const isFieldsNoEmpty: boolean = !!(
          passwordData.oldPassword &&
          passwordData.newPassword &&
          passwordData.duplicationPassword
        );
        const isNewPasswordsIqual: boolean =
          passwordData.newPassword === passwordData.duplicationPassword;
        setIsFormValid(isFieldsNoEmpty && isNewPasswordsIqual);
      }
      if ('password' in passwordData && 'duplicationPassword' in passwordData) {
        const isFieldsNoEmpty: boolean = !!(
          passwordData.password && passwordData.duplicationPassword
        );
        const isNewPasswordsIqual: boolean =
          passwordData.password === passwordData.duplicationPassword;
        setIsFormValid(isFieldsNoEmpty && isNewPasswordsIqual);
      }
      if ('email' in passwordData) {
        setIsFormValid(!!passwordData.email);
      }
    }
  }, [passwordData]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPasswordData((prev) => ({
      ...(prev as
        | TPasswordDateSettings
        | TPasswordDateReset
        | TPasswordDateRequest),
      [name]: value,
    }));
  };

  return {
    handleSubmit,
    passwordData,
    onInputChange,
    errorsData,
    isFormValid,
    resetHandler,
  };
};
