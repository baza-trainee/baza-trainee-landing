'use client';

import {AdminTitle, PasswordInput, FormBtns } from '@/components/atomic';
import { useGlobalContext } from '@/store/globalContext';
import { ChangeEvent, useState, useEffect, useCallback, useMemo } from 'react';
import { useAPI } from '@/utils/hooks/useAPI';
import auth from '@/utils/API/auth';

export const Settings = () => {
  const { setAlertInfo } = useGlobalContext();
  const [isFormValid, setIsFormValid] = useState(false);
  const [dispatch, data, isError] = useAPI(auth.changePassword);

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
 
  const [passwordData, setPasswordData] = useState<TPasswordDate>(defaultPasswordData);

  const resetHandler = useCallback(() => {
    setPasswordData(defaultPasswordData);
  }, [defaultPasswordData]);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if(!passwordData.oldPassword || !passwordData.newPassword || !passwordData.duplicationPassword){
    setAlertInfo({
      state: 'error',
      title: 'Пусті поля',
      textInfo: `Всі поля повинні бути заповнені`,
    });
    return;
  }
  if(passwordData.newPassword !== passwordData.duplicationPassword){
    setAlertInfo({
      state: 'error',
      title: 'Новий пароль невірний',
      textInfo: `Ви ввели не однакові паролі`,
    });
    return;
  }
  const {oldPassword, newPassword }=passwordData;
  dispatch({ oldPassword, newPassword });  
};

useEffect(() => {  
  if (!isError && data) {
    setAlertInfo({
      state: 'info',
      title: 'Пароль змінено успішно',
      textInfo: `Пароль змінено`,
    });
    resetHandler();
    return;
  }
  if (data&&data.status===400) {
    setAlertInfo({
      state: 'error',
      title: 'Неправильний старий пароль',
      textInfo: `Неправильний старий пароль або помилки перевірки`,
    });
    return;
  }
  if (data&&data.status===404) {
    setAlertInfo({
      state: 'error',
      title: 'Невірний користувач',
      textInfo: `Такого користувача немає, спробуйте ввести інший пароль`,
    });
    return;
  }
  if (data&&data.status===500) {
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
    const isNewPasswordsIqual:boolean = passwordData.newPassword === passwordData.duplicationPassword;
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
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Змінити пароль</AdminTitle>

      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8 max-w-[414px] shadow-[0_4px_4px_0_rgba(234,232,232,0.25),0_2px_12px_0_rgba(234,232,232,0.25)]">
          
          <div className="flex flex-wrap gap-[2.4rem]">
          <PasswordInput
          name="oldPassword"
          title="Старий пароль"
          value={passwordData.oldPassword}
          onChange={onInputChange}
          placeholderText="Введіть пароль"
        />
            </div>
            <div className="flex flex-wrap gap-[2.4rem] items-end" >
            <PasswordInput
          name="newPassword"
          title="Новий пароль"
          value={passwordData.newPassword}
          onChange={onInputChange}
          placeholderText="Введіть пароль"
        />
            
          </div>
          <div className="flex flex-wrap gap-[2.4rem] items-end" >
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
          <FormBtns isEditMode={true} disabled={!isFormValid} handleFunc={resetHandler} />
        </div>
      </form>
    </div>
  );
};
