'use client';

import { AdminTitle, FormBtns, PasswordInput } from '@/components/atomic';
import { usePasswordManipulation } from '@/hooks/usePasswordManipulation';

export const PasswordReset = () => {
  const {
    handleSubmit,
    passwordData,
    onInputChange,
    errorsData,
    isFormValid,
    resetHandler,
  } = usePasswordManipulation('resetPassword');

  if (passwordData) {
    if ('password' in passwordData && 'duplicationPassword' in passwordData) {
      const { password, duplicationPassword } = passwordData;

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
                value={password}
                onChange={onInputChange}
                placeholderText="Введіть пароль"
                errorText={errorsData}
              />
            </div>
            <div className="flex flex-wrap items-end gap-[2.4rem]">
              <PasswordInput
                name="duplicationPassword"
                title="Повторіть новий пароль"
                value={duplicationPassword}
                onChange={onInputChange}
                placeholderText="Введіть пароль"
              />
            </div>

            <div className="flex gap-[1.8rem]">
              <FormBtns
                disabled={!isFormValid}
                cancelAction={resetHandler}
                okBtnName="Зберегти зміни"
                verticalBtns
              />
            </div>
          </div>
        </form>
      );
    }
  }
};
