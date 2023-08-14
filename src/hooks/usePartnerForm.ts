import { FieldChangeHandler, PartnerData, Errors } from '@/types';
import { useEffect, useState } from 'react';
import { validateWebsite } from '../utils/validateWebsite';

const initialState: PartnerData = { name: '', file: null, homeUrl: '' };

export const usePartnerForm = (initialFormData: PartnerData = initialState) => {
  const [formData, setFormData] = useState<PartnerData>(initialFormData);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({
    name: '',
    file: '',
    website: '',
  });

  const handleFieldChange: FieldChangeHandler = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const checkFormFilled = () => {
    const { name, file, homeUrl } = formData;
    const newErrors: Errors = {};

    if (name && name.length < 2) {
      newErrors.name = 'Назва має бути не менше 2 символів';
    }

    if (file && file === null) {
      newErrors.file = 'Виберіть файл';
    }

    if (homeUrl && !validateWebsite(homeUrl)) {
      newErrors.website = 'Неправильна адреса веб-сайту';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    checkFormFilled();
  }, [formData]);

  return {
    formData,
    isFormValid,
    errors,
    handleFieldChange,
  };
};
