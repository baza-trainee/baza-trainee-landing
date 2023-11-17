'use client';

import { AdminTitle, FormBtns, InputField } from '@/components/atomic';
import { usePasswordManipulation } from '@/hooks/usePasswordManipulation';

export const RequestReset = () => {
  const {
    handleSubmit,
    passwordData,
    onInputChange,
    errorsData,
    isFormValid,
    resetHandler,
  } = usePasswordManipulation('requestPassword');

  if (passwordData) {
    if ('email' in passwordData) {
      const { email } = passwordData;

      return (
        <form
          className="flex min-h-[100vh] items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-[36.6rem] flex-col gap-[3.2rem] rounded-xl border border-neutral-300 bg-base-dark p-8 ">
            <AdminTitle>Забули пароль</AdminTitle>
            <p className="font-semibold">
              Вкажіть вашу електронну адресу, щоб відновити доступ до адмін.
              панелі.
            </p>
            <InputField
              title="Електронна пошта"
              value={email}
              onChange={onInputChange}
              inputType="text"
              name="email"
              placeholderText="Введіть електронну пошту"
              errorText={errorsData}
            />

            <FormBtns
              disabled={!isFormValid}
              cancelAction={resetHandler}
              okBtnName="Підтвердити"
              verticalBtns
            />
          </div>
        </form>
      );
    }
  }
};
