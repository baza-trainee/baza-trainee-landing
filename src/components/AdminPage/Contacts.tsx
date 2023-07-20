'use client';
/*
import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { InputField } from '@/components/atomic/inputs';
import { SETTINGS } from '@/config/settings';
import { GlobalContext } from '@/store/globalContext';
import contactsApi from '@/utils/API/contacts';
import { formatBytes } from '@/utils/formatBytes';
import { useAPI } from '@/utils/hooks/useAPI';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
*/
type TFormData = {
  [key: string]: string | null;
};

export const Contacts = () => {
  /*
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
    const form = new FormData();
    setFilesUpdated(0);
    for (const key in formData) {
      if (formData[key] !== null) {
        form.append(key, formData[key] as Blob);
        setFilesUpdated((prev) => prev + 1);
      }
    }

    //dispatch(form);
  };

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    name: string,
    maxSize: number
  ) => {
    const files = e.currentTarget.files;
    if (files && files[0]?.size <= maxSize) {
      //  setContactsData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setContactsData((prev) => ({ ...prev, [name]: null }));
    }

    if (files && files[0]?.size >= maxSize)
      setAlertInfo({
        state: 'error',
        title: 'Перевищення розміру файлу',
        textInfo: `Максимальний розмір файлу не повинен перевищувати ${formatBytes(
          maxSize
        )}`,
      });
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
              value={setContactsData['phone1']?.name}
              onChange={(e) => onInputChange(e, 'phone1', maxFileSize)} //fix
              placeholderText="Введіть телефон"
            />
            <InputField
              inputType="right"
              value={setContactsData['phone2']?.name}
              onChange={(e) => onInputChange(e, 'phone2', maxFileSize)} //fix
              placeholderText="Введіть телефон"
            />
          </div>
          <div className="flex flex-wrap gap-[2.4rem]">
            <InputField
              title="Електронна пошта"
              inputType="right"
              value={setContactsData['email']?.name}
              onChange={(e) => onInputChange(e, 'email', maxFileSize)}
              placeholderText="Введіть електронну пошту"
            />
            <InputField
              title="Facebook"
              inputType="right"
              value={setContactsData['facebook']?.name}
              onChange={(e) => onInputChange(e, 'facebook', maxFileSize)}
              placeholderText="Додайте посилання"
            />
            <InputField
              title="Linkedin"
              inputType="right"
              value={setContactsData['linkedin']?.name}
              onChange={(e) => onInputChange(e, 'linkedin', maxFileSize)}
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
  );*/
};
