'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import {
  AdminPanelButton,
  AdminTitle,
  TextInputField,
} from '@/components/atomic';
import { useGlobalContext } from '@/store/globalContext';
import achievementsApi from '@/utils/API/achievements';
import { useAPI } from '@/utils/hooks/useAPI';

export const CounterEdit = () => {
  const { setAlertInfo } = useGlobalContext();
  const [employed, setEmployed] = useState('');
  const [dispatch, data, isError] = useAPI(achievementsApi.updateEmployed);

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
        title: 'Дані оновленні успішно',
        textInfo: `Кількість працевлаштованих оновлено`,
      });
      resetHandler();
    }
    if (isError)
      setAlertInfo({
        state: 'error',
        title: 'Помилка при оновленні кількості працевлаштованих',
        textInfo:
          'Під час оновлення кількості працевлаштованих сталася помилка. Спробуйте, будь ласка, пізніше',
      });
  }, [isError, data, setAlertInfo]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (employed) {
      const data = { employed: Number(employed) };
      dispatch(data);
    }
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

        <div className="ml-5 flex gap-[1.8rem]">
          <AdminPanelButton type="submit" disabled={!employed}>
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
