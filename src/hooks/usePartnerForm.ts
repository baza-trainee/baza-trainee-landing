import { FieldChangeHandler, PartnerData } from '@/types';
import { useEffect, useState } from 'react';
import { validateWebsite } from '../utils/validateWebsite';

export const usePartnerForm = (initialFormData: any) => {
  const [formData, setFormData] = useState<PartnerData>(initialFormData);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleFieldChange: FieldChangeHandler = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const checkFormFilled = () => {
    if (
      formData.name?.length >= 2 &&
      formData.file !== null &&
      validateWebsite(formData.homeUrl)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    checkFormFilled();
  }, [formData]);

  return {
    formData,
    isFormValid,
    handleFieldChange,
  };
};
