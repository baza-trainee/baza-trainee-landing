'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { TextInputField } from '@/components/atomic/inputs';
import { GlobalContext } from '@/store/globalContext';
import { contactsApi } from '@/utils/API/contacts';
import {
  validateEmail,
  validatePhone,
  validateUrl,
} from '@/utils/InputValidations';
import { useAPI } from '@/utils/hooks/useAPI';
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type TFormData = {
  [key: string]: string | null;
};

const errorsSample = {
  phone1: '',
  phone2: '',
  email: '',
  facebook: '',
  linkedin: '',
};

export const Contacts = () => {
  const { setAlertInfo } = useContext(GlobalContext);

  const [contactsData, setContactsData] = useState<any>({}); //fix type
  const [errorsData, setErrorsData] = useState(errorsSample);
  const [dispatch, data, isError] = useAPI(contactsApi.update);

  const resetHandler = () => {
    setContactsData({});
    setErrorsData(errorsSample);
  };

  const validationHandler = useCallback(() => {
    let errors = errorsSample;
    let errorCount = 0;

    const {
      contactsDataList: { email = '', phone1 = '', phone2 = '' } = {},
      socialsMediaList: { linkedin = '', facebook = '' } = {},
    } = contactsData || {};

    if (email && !validateEmail(email)) {
      errors.email = 'Будь ласка, введіть дійсну адресу електронної пошти.';
      errorCount++;
    } else {
      errors.email = '';
    }

    if (phone1 && !validatePhone(phone1)) {
      errors.phone1 = 'Номер повинен бути у форматі 381234567890';
      errorCount++;
    } else {
      errors.phone1 = '';
    }

    if (phone2 && !validatePhone(phone2)) {
      errors.phone2 = 'Номер повинен бути у форматі 381234567890';
      errorCount++;
    } else {
      errors.phone2 = '';
    }

    if (linkedin && !validateUrl(linkedin)) {
      errors.linkedin = 'Будь ласка, введіть правильну URL-адресу.';
      errorCount++;
    } else {
      errors.linkedin = '';
    }

    if (facebook && !validateUrl(facebook)) {
      errors.facebook = 'Будь ласка, введіть правильну URL-адресу.';
      errorCount++;
    } else {
      errors.facebook = '';
    }
    setErrorsData((prev) => ({ ...prev, ...errors }));
    const isFormValid = Boolean(!errorCount);

    return isFormValid;
  }, [contactsData]);

  useEffect(() => {
    console.log('data', data);
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

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const [category, keyName] = name.split(' ');
    const normalizedValue = keyName.match(/phone/)
      ? value.replace(/\D/g, '')
      : value;

    setContactsData((prev: any) => ({
      ...prev,
      [category]: { ...prev[category], [keyName]: normalizedValue },
    }));
  };

  useEffect(() => {
    validationHandler();
  }, [contactsData, validationHandler]);

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log('errorsData', errorsData);
    console.log('contactsData', contactsData);
    const isFormValid = validationHandler();
    console.log('isFormValid', isFormValid);
    if (!isFormValid)
      setAlertInfo({
        state: 'error',
        title: 'Помилка при оновленні контактів',
        textInfo: 'Перед надсиланням форми, будь ласка, виправте усі помилки',
      });
    isFormValid && dispatch(contactsData);
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle className="mb-[4.5rem] ml-[1.2rem]">Контакти</AdminTitle>

      <form className="flex flex-col gap-[2.4rem]" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col gap-10 bg-base-dark px-[1.2rem] py-8">
          <div className="flex flex-wrap gap-[2.4rem]">
            <TextInputField
              title="Телефон"
              pattern="[0-9]"
              name="contactsDataList phone1"
              inputType="pen"
              errorText={errorsData.phone1}
              value={contactsData.contactsDataList?.phone1}
              onChange={onInputChange}
              placeholder="Введіть телефон"
            />
            <TextInputField
              inputType="pen"
              errorText={errorsData.phone2}
              name="contactsDataList phone2"
              value={contactsData.contactsDataList?.phone2}
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
              title="Facebook"
              inputType="pen"
              name="socialsMediaList facebook"
              errorText={errorsData.facebook}
              value={contactsData.socialsMediaList?.facebook}
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
