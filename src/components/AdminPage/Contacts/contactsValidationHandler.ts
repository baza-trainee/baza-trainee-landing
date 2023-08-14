import { TContactsInfo } from '@/types';
import {
  validateEmail,
  validatePhone,
  validateUrl,
} from '@/utils/InputValidations';
import { SetStateAction } from 'react';

export const errorsSample = {
  phone1: '',
  phone2: '',
  email: '',
  facebook: '',
  linkedin: '',
};

export const contactsValidationHandler = (
  contactsData: TContactsInfo,
  setErrorsData: (_value: SetStateAction<typeof errorsSample>) => void
) => {
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
    errors.phone1 = 'Номер повинен бути у форматі 380XXXXXXXXX';
    errorCount++;
  } else {
    errors.phone1 = '';
  }

  if (phone2 && !validatePhone(phone2)) {
    errors.phone2 = 'Номер повинен бути у форматі 380XXXXXXXXX';
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
};
