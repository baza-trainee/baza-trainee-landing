'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { TextInputField } from '@/components/atomic/inputs';
import { GlobalContext } from '@/store/globalContext';
import { contactsApi } from '@/utils/API/contacts';
import { useAPI } from '@/utils/hooks/useAPI';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

export const CounterEdit = () => {
  const { setAlertInfo } = useContext(GlobalContext);
  const [employed, setEmployed] = useState('');
  const [dispatch, data, isError] = useAPI(contactsApi.update);

  const resetHandler = () => setEmployed('');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const normalizedValue = value.replace(/\D/g, '');
    setEmployed(normalizedValue);
  };

  useEffect(() => {
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Контакти оновленні успішно',
        textInfo: `Контакти оновлено`,
      });
      resetHandler();
    }
    if (isError)
      setAlertInfo({
        state: 'error',
        title: 'Помилка при оновленні контактів',
        textInfo:
          'Під час оновлення списку контактів сталася помилка. Спробуйте, будь ласка, пізніше',
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, data, setAlertInfo]);

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    employed && dispatch(Number(employed));
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Каунтер</AdminTitle>
      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8">
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField
              title="Працевлаштовано"
              name="contactsDataList phone1"
              inputType="text"
              value={employed}
              onChange={onInputChange}
              placeholder="Вкажіть кількість"
            />
          </div>
        </div>

        <div className="flex gap-[1.8rem]">
          <AdminPanelButton
            type="submit"
            onClick={handleSubmit}
            disabled={!employed}
          >
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
