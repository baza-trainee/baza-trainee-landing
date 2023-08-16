'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { TextInputField } from '@/components/atomic/inputs';
import { GlobalContext } from '@/store/globalContext';
import { TContactsInfo } from '@/types';
import { contactsApi } from '@/utils/API/contacts';
import { useAPI } from '@/utils/hooks/useAPI';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import {
  contactsValidationHandler,
  errorsSample,
} from './contactsValidationHandler';

export const Contacts = () => {
  const { setAlertInfo } = useContext(GlobalContext);

  const [contactsData, setContactsData] = useState<TContactsInfo>(
    {} as TContactsInfo
  );
  const [errorsData, setErrorsData] = useState(errorsSample);
  const [isFormValid, setIsFormValid] = useState(false);

  const [dispatch, data, isError] = useAPI(contactsApi.update);

  const resetHandler = () => {
    setContactsData({});
    setErrorsData(errorsSample);
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
  }, [isError, data, setAlertInfo]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const [category, keyName] = name.split(' ');
    const normalizedValue = keyName.match(/phone/)
      ? value.replace(/\D/g, '')
      : value;

    setContactsData((prev) => {
      const updatedCategory = { ...prev[category], [keyName]: normalizedValue };
      if (normalizedValue === '') {
        delete updatedCategory[keyName];
      }

      return { ...prev, [category]: updatedCategory };
    });
  };

  useEffect(() => {
    const isNoErrors = contactsValidationHandler(contactsData, setErrorsData);
    const isContactsDataList = contactsData?.contactsDataList
      ? !!Object.values(contactsData?.contactsDataList).join()
      : false;
    const isSocialsMediaList = contactsData?.socialsMediaList
      ? !!Object.values(contactsData?.socialsMediaList).join()
      : false;

    setIsFormValid(isNoErrors && (isContactsDataList || isSocialsMediaList));
  }, [contactsData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    isFormValid && dispatch(contactsData);
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Контакти</AdminTitle>

      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8">
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField
              title="Телефон"
              name="contactsDataList phone1"
              inputType="pen"
              errorText={errorsData.phone1}
              value={contactsData.contactsDataList?.phone1 || ''}
              onChange={onInputChange}
              placeholder="Введіть телефон"
            />
            <TextInputField
              inputType="pen"
              errorText={errorsData.phone2}
              name="contactsDataList phone2"
              value={contactsData.contactsDataList?.phone2 || ''}
              onChange={onInputChange}
              placeholder="Введіть телефон"
            />
          </div>
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField
              title="Електронна пошта"
              name="contactsDataList email"
              inputType="pen"
              errorText={errorsData.email}
              value={contactsData.contactsDataList?.email}
              onChange={onInputChange}
              placeholder="Введіть електронну пошту"
            />
            <TextInputField
              title="Telegram"
              inputType="pen"
              name="socialsMediaList telegram"
              errorText={errorsData.telegram}
              value={contactsData.socialsMediaList?.telegram}
              onChange={onInputChange}
              placeholder="Додайте посилання"
            />
            <TextInputField
              title="Linkedin"
              inputType="pen"
              name="socialsMediaList linkedin"
              errorText={errorsData.linkedin}
              value={contactsData.socialsMediaList?.linkedin}
              onChange={onInputChange}
              placeholder="Додайте посилання"
            />
          </div>
        </div>

        <div className="ml-5 flex gap-[1.8rem]">
          <AdminPanelButton type="submit" disabled={!isFormValid}>
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
