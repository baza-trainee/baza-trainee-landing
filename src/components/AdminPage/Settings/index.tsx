'use client';

import { AdminTitle, FormBtns, PasswordInput } from '@/components/atomic';
import { usePasswordManipulation } from '@/hooks/usePasswordManipulation';

export const Settings = () => {
  const {
    handleSubmit,
    passwordData,
    onInputChange,
    errorsData,
    isFormValid,
    resetHandler,
  } = usePasswordManipulation('settingsPassword');

  if (passwordData) {
    if (
      'oldPassword' in passwordData &&
      'newPassword' in passwordData &&
      'duplicationPassword' in passwordData
    ) {
      const { oldPassword, newPassword, duplicationPassword } = passwordData;

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
                  value={oldPassword}
                  onChange={onInputChange}
                  placeholderText="Введіть пароль"
                />
              </div>
              <div className="flex flex-wrap items-end gap-[2.4rem]">
                <PasswordInput
                  name="newPassword"
                  title="Новий пароль"
                  value={newPassword}
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
            </div>
            <div className="ml-5 flex gap-[1.8rem]">
              <FormBtns
                isEditMode={true}
                disabled={!isFormValid}
                cancelAction={resetHandler}
              />
            </div>
          </form>
        </div>
      );
    }
  }
};
