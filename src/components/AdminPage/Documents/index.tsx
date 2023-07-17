'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { InputField } from '@/components/atomic/inputs';
import { SETTINGS } from '@/config/settings';
import { GlobalContext } from '@/store/globalContext';
import { documentsApi } from '@/utils/API/documents';
import { useAPI } from '@/utils/hooks/useAPI';
import { useContext, useEffect, useState } from 'react';

export const Documents = () => {
  const { setAlertInfo } = useContext(GlobalContext);
  const [reportValue, setReportValue] = useState<File | null>(null);
  const [statuteValue, setStatuteValue] = useState<File | null>(null);
  const [privacyUaValue, setPrivacyUaValue] = useState<File | null>(null);
  const [privacyEnValue, setPrivacyEnValue] = useState<File | null>(null);
  const [privacyPlValue, setPrivacyPlValue] = useState<File | null>(null);
  const [termsUaValue, setTermsUaValue] = useState<File | null>(null);
  const [termsEnValue, setTermsEnValue] = useState<File | null>(null);
  const [termsPlValue, setTermsPlValue] = useState<File | null>(null);
  const [dispatch, data, isError] = useAPI(documentsApi.update);

  const resetHandler = () => {
    setReportValue(null);
    setStatuteValue(null);
    setPrivacyUaValue(null);
    setPrivacyEnValue(null);
    setPrivacyPlValue(null);
    setTermsUaValue(null);
    setTermsEnValue(null);
    setTermsPlValue(null);
  };

  useEffect(() => {
    console.log(data);
    if (!isError && data) {
      setAlertInfo({
        state: 'info',
        title: 'Документи оновленні успішно',
        textInfo: `Документи оновленні`,
      });
      resetHandler();
    }
    if (isError)
      setAlertInfo({
        state: 'error',
        title: 'Помилка при оновленні документів',
        textInfo: 'Спробуйте пізніше',
      });
  }, [isError, data, setAlertInfo]);

  const handleSubmit = () => {
    const formData = new FormData();
    reportValue && formData.append('report', reportValue);
    statuteValue && formData.append('statute', statuteValue);
    privacyEnValue && formData.append('privacyPolicy[en]', privacyEnValue);
    privacyUaValue && formData.append('privacyPolicy[ua]', privacyUaValue);
    privacyPlValue && formData.append('privacyPolicy[pl]', privacyPlValue);
    termsEnValue && formData.append('termsOfUse[en]', termsEnValue);
    termsUaValue && formData.append('termsOfUse[ua]', termsUaValue);
    termsPlValue && formData.append('termsOfUse[pl]', termsPlValue);
    dispatch(formData);
  };

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle>Документи</AdminTitle>

      <form className="flex flex-col gap-[2.4rem]" onSubmit={handleSubmit}>
        <div className="bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="report"
            title="Звітність"
            inputType="file"
            accept=".pdf"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
        </div>

        <div className="bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="statute"
            title="Статут"
            inputType="file"
            accept=".pdf"
            value={statuteValue ? statuteValue.name : ''}
            setValue={setStatuteValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
        </div>

        <div className="flex w-full flex-wrap gap-5 bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="privacy-ua"
            title="Політика конфіденційності"
            inputType="file"
            accept=".pdf"
            value={privacyUaValue ? privacyUaValue.name : ''}
            setValue={setPrivacyUaValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="privacy-en"
            title="Privacy Policy"
            inputType="file"
            accept=".pdf"
            value={privacyEnValue ? privacyEnValue.name : ''}
            setValue={setPrivacyEnValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="privacy-pl"
            title="Polityka prywatności"
            inputType="file"
            accept=".pdf"
            value={privacyPlValue ? privacyPlValue.name : ''}
            setValue={setPrivacyPlValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
        </div>
        <div className="flex w-full flex-wrap gap-5 bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="terms-ua"
            title="Правила користування сайтом"
            inputType="file"
            accept=".pdf"
            value={termsUaValue ? termsUaValue.name : ''}
            setValue={setTermsUaValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="terms-en"
            title="Terms of use of the site"
            inputType="file"
            accept=".pdf"
            value={termsEnValue ? termsEnValue.name : ''}
            setValue={setTermsEnValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="terms-pl"
            title="Warunki korzystania z serwisu"
            inputType="file"
            accept=".pdf"
            value={termsPlValue ? termsPlValue.name : ''}
            setValue={setTermsPlValue}
            maxSize={SETTINGS.fileSizeLimits.report}
            placeholderText="Завантажте документ"
          />
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
