'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { InputField } from '@/components/atomic/inputs';
import { SETTINGS } from '@/config/settings';
import { GlobalContext } from '@/store/globalContext';
import { contactsApi } from '@/utils/API/contacts';
import { useAPI } from '@/utils/hooks/useAPI';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

type TFormData = {
  [key: string]: string | null;
};

export const Contacts = () => {
  const { setAlertInfo } = useContext(GlobalContext);

  const [contactsData, setContactsData] = useState<any>({}); //fix type
  const [filesUpdated, setFilesUpdated] = useState(0);
  const [dispatch, data, isError] = useAPI(contactsApi.update);

  const maxFileSize = SETTINGS.fileSizeLimits.report;

  const resetHandler = () => {
    setContactsData({});
  };

  useEffect(() => {
    console.log(data);
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Контакти оновленні успішно',
        textInfo: `Оновлено ${filesUpdated} контакт(ів)`,
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

  const handleSubmit = () => {
    console.log(contactsData);
    /*
    const form = new FormData();
    setFilesUpdated(0);
    for (const key in formData) {
      if (formData[key] !== null) {
        form.append(key, formData[key] as Blob);
        setFilesUpdated((prev) => prev + 1);
      }
    }*/
    //dispatch(form);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [category, keyName] = name.split(' ');

    setContactsData((prev: any) => ({
      ...prev,
      [category]: { ...prev[category], [keyName]: value },
    }));
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Контакти</AdminTitle>

      <form className="flex flex-col gap-[2.4rem]" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col  gap-5 bg-base-dark px-[1.2rem] py-8">
          <div className="flex flex-wrap gap-[2.4rem]">
            <InputField
              title="Телефон"
              name="contactsDataList phone1"
              inputType="right"
              value={contactsData.contactsDataList?.phone1}
              onChange={onInputChange} //fix
              placeholderText="Введіть телефон"
            />
            <InputField
              inputType="right"
              name="contactsDataList phone2"
              value={contactsData.contactsDataList?.phone2}
              onChange={onInputChange} //fix
              placeholderText="Введіть телефон"
            />
          </div>
          <div className="flex flex-wrap gap-[2.4rem]">
            <InputField
              title="Електронна пошта"
              name="contactsDataList email"
              inputType="right"
              value={contactsData.contactsDataList?.email}
              onChange={onInputChange}
              placeholderText="Введіть електронну пошту"
            />
            <InputField
              title="Facebook"
              inputType="right"
              name="socialsMediaList facebook"
              value={contactsData.socialsMediaList?.facebook}
              onChange={onInputChange}
              placeholderText="Додайте посилання"
            />
            <InputField
              title="Linkedin"
              inputType="right"
              name="socialsMediaList linkedin"
              value={contactsData.socialsMediaList?.linkedin}
              onChange={onInputChange}
              placeholderText="Додайте посилання"
            />
          </div>
        </div>
      </form>
      <div className="flex gap-[1.8rem] pt-[3.6rem]">
        <AdminPanelButton type="submit" onClick={handleSubmit}>
          Зберегти зміни
        </AdminPanelButton>
        <AdminPanelButton variant="secondary" onClick={resetHandler}>
          Скасувати
        </AdminPanelButton>
      </div>
    </div>
  );
};
