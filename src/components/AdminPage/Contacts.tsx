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

  const onInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setContactsData((prev: any) => ({
      ...prev,
      [name]: e.currentTarget.value,
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
              inputType="right"
              value={contactsData['contactsDataList[phone1]']}
              onChange={(e) => onInputChange(e, 'contactsDataList[phone1]')} //fix
              placeholderText="Введіть телефон"
            />
            <InputField
              inputType="right"
              value={contactsData['contactsDataList[phone2]']}
              onChange={(e) => onInputChange(e, 'contactsDataList[phone2]')} //fix
              placeholderText="Введіть телефон"
            />
          </div>
          <div className="flex flex-wrap gap-[2.4rem]">
            <InputField
              title="Електронна пошта"
              inputType="right"
              value={contactsData['contactsDataList[email]']}
              onChange={(e) => onInputChange(e, 'contactsDataList[email]')}
              placeholderText="Введіть електронну пошту"
            />
            <InputField
              title="Facebook"
              inputType="right"
              value={contactsData['socialsMediaList[facebook]']}
              onChange={(e) => onInputChange(e, 'socialsMediaList[facebook]')}
              placeholderText="Додайте посилання"
            />
            <InputField
              title="Linkedin"
              inputType="right"
              value={contactsData['socialsMediaList[linkedin]']}
              onChange={(e) => onInputChange(e, 'socialsMediaList[linkedin]')}
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
