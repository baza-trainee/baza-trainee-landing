'use client';

import { AdminPanelButton } from '@/components/atomic';
import { AdminTitle } from '@/components/atomic/AdminTitle';
import { InputField } from '@/components/atomic/inputs';
import { useState } from 'react';

export const Documents = () => {
  const click = () => {
    console.log(11111);
  };
  const [reportValue, setReportValue] = useState<File | null>(null);
  const [text, setText] = useState<string>('');

  return (
    <div className="w-full bg-base-light px-[2.4rem] py-[3.2rem]">
      <AdminTitle>Документи</AdminTitle>

      <div className="flex flex-col gap-[2.4rem]">
        <div className="bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="reporting"
            title="Звітність"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
        </div>

        <div className="bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="statute"
            title="Статут"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
        </div>

        <div className="flex w-full gap-5 bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="privacy-ua"
            title="Політика конфіденційності"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="privacy-en"
            title="Privacy Policy"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="privacy-pl"
            title="Polityka prywatności"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
        </div>
        <div className="flex w-full gap-5 bg-base-dark px-[1.2rem] py-8">
          <InputField
            name="terms-ua"
            title="Правила користування сайтом"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="terms-en"
            title="Terms of use of the site"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
          <InputField
            name="terms-pl"
            title="Warunki korzystania z serwisu"
            inputType="file"
            value={reportValue ? reportValue.name : ''}
            setValue={setReportValue}
            placeholderText="Завантажте документ"
          />
        </div>
      </div>
      <div className="flex gap-[1.8rem] pt-[3.6rem]">
        <AdminPanelButton>Зберегти зміни</AdminPanelButton>
        <AdminPanelButton variant="secondary">Скасувати</AdminPanelButton>
      </div>
    </div>
  );
};
