'use client';

import {AdminTitle, PasswordInput, FormBtns } from '@/components/atomic';
import { useGlobalContext } from '@/store/globalContext';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
export const Change = () => {
  const { setAlertInfo } = useGlobalContext();

  type TPasswordDate = {
      oldPassword: string;
      newPassword: string;
      duplicationPassword: string;    
  };

  const defaultPasswordData: TPasswordDate = {
    oldPassword: '',
    newPassword: '',
    duplicationPassword: '',
  };

 
  const [passwordData, setPasswordData] = useState<TPasswordDate>(defaultPasswordData);

const resetHandler = () => {
  setPasswordData(defaultPasswordData);
};

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(passwordData.newPassword !== passwordData.duplicationPassword){
      setAlertInfo({
        state: 'error',
        title: 'Новий проль невірний',
        textInfo: `Ви ввели не однакові паролі`,
      });
    }
    console.log("Запит на оновлення")!
    setTimeout(function() {
      handleGoBack();
    }, 3000); 
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {    
    const { name, value } = event.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));  
  };

  const handleGoBack = () => {
    router.back(); 
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
          value={passwordData.oldPassword || ''}
          onChange={onInputChange}
          placeholderText="Введіть пароль"
        />
            </div>
            <div className="flex flex-wrap gap-[2.4rem] items-end" >
            <PasswordInput
          name="newPassword"
          title="Новий пароль"
          value={passwordData.newPassword || ''}
          onChange={onInputChange}
          placeholderText="Введіть пароль"
        />
            
          </div>
          <div className="flex flex-wrap gap-[2.4rem] items-end" >
            <PasswordInput
          name="duplicationPassword"
          title="Повторіть новий пароль"
          value={passwordData.duplicationPassword || ''}
          onChange={onInputChange}
          placeholderText="Введіть пароль"
        />
            
          </div>
        </div>

        <div className="ml-5 flex gap-[1.8rem]">
          <FormBtns isEditMode={true} handleFunc={resetHandler} />
        </div>
      </form>
    </div>
  );
};
