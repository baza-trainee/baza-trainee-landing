'use client';

import {
  AdminPanelButton,
  AdminTitle,
  InputField,
  PasswordInput,
  EditDeleteButton
} from '@/components/atomic';
import { useGlobalContext } from '@/store/globalContext';
import auth from '@/utils/API/auth';
import { useAPI } from '@/utils/hooks/useAPI';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { KeyboardEvent, useEffect, useState } from 'react';

 // TODO: Replace with actual recover link

export const Settings = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [dispatch, data, isError] = useAPI(auth.logIn);
  const { setAlertInfo } = useGlobalContext();
  const { push } = useRouter();
  // const router = useRouter();
  let render = true;


  useEffect(() => {    

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
  const togleRender=()=>{
    console.log("render", render )
    render=!render;
    console.log("render", render )
  }

  
  const loginHandler = async () => {
    if (email && password) {
      togleRender();
      // render= true;
      dispatch({ email, password });
      // handleGoBack();
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
  const resetHandler = () => {
    setEmail('');
    setPassword('');
  };

  // const errorMessage =(event: React.FormEvent<HTMLFormElement>)=>{
    const errorMessage =()=>{
    // event.preventDefault();
    setAlertInfo({
      state: 'info',
      title: 'Не заповнені поля',
      textInfo: `Поля логін та пароль повинні бути заповнені`,
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  
  const recoverLink = '/admin/change';

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Налаштування</AdminTitle>
      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8 max-w-[414px] shadow-[0_4px_4px_0_rgba(234,232,232,0.25),0_2px_12px_0_rgba(234,232,232,0.25)]">
        <InputField
          title="Логін"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputType="text"
          name="login"
          placeholderText="Введіть логін"
          onKeyDown={handleKeyDown}
        />
        <div className="flex flex-wrap gap-[2.4rem] items-end" >
        <PasswordInput
          name="password"
          title="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholderText="Введіть пароль"
          onKeyDown={handleKeyDown}
        />
        {render ?
        <Link
            href={recoverLink}
            className="text-[1.6rem] text-neutral-600 underline"
          >
            
            <EditDeleteButton icon ='edit'/>
          </Link>: <EditDeleteButton icon ='edit' onClick={errorMessage}/> }
          </div>
          </div>

        {/* <AdminPanelButton onClick={loginHandler}>Увійти</AdminPanelButton> */}
        <div className="ml-5 flex gap-[1.8rem]">
          <AdminPanelButton type="submit" /*disabled={!isFormValid} onClick={handleGoBack}*/ onClick={loginHandler}>
            Зберегти зміни
          </AdminPanelButton>
          <AdminPanelButton variant="secondary" onClick={resetHandler}>
            Скасувати
          </AdminPanelButton>
        </div>
       </form>
     
    </div>
  );
};

// export default Settings;
