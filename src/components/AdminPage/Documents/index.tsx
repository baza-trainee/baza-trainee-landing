'use client';

import { AdminTitle } from '@/components/atomic/AdminTitle';
import { FileInput, InputField } from '@/components/atomic/inputs';
import { UploadIcon } from '@/components/common/icons/UploadIcon';
import { useState } from 'react';

export const Documents = () => {
  const click = () => {
    console.log(11111);
  };
  const [reportValue, setReportValue] = useState<File | null>(null);
  const [text, setText] = useState<string>('');

  return (
    <div className="w-full px-[2.4rem] py-[3.2rem]">
      <AdminTitle>Документи</AdminTitle>

      <div>
        <InputField
          name="reporting"
          title="Звітність"
          inputType="file"
          value={reportValue ? reportValue.name : ''}
          setValue={setReportValue}
          placeholderText="Завантажте документ"
        />
        <FileInput
          name="statute"
          title="Статут"
          icon={<UploadIcon />}
          placeholderText="Завантажте документ"
        />
        <InputField
          name="test"
          title="TestText"
          inputType="en"
          value={text}
          setValue={setText}
          placeholderText="Введіть щось"
        />

        <div className="flex w-full gap-5">
          <FileInput
            label="Політика конфіденційності"
            icon={<UploadIcon />}
            placeholder="Завантажте документ"
          />
          <FileInput
            label="Privacy Policy"
            icon={<UploadIcon />}
            iconClickHandler={click}
            placeholder="Завантажте документ"
          />
          <FileInput
            label="Polityka prywatności"
            icon={<UploadIcon />}
            placeholder="Завантажте документ"
          />
        </div>

        <div className="flex gap-5">
          <FileInput
            label="Правила користування сайтом"
            icon={<UploadIcon />}
            placeholder="Завантажте документ"
          />
          <FileInput
            label="Terms of use of the site"
            icon={<UploadIcon />}
            placeholder="Завантажте документ"
          />
          <FileInput
            label="Warunki korzystania z serwisu"
            icon={<UploadIcon />}
            placeholder="Завантажте документ"
          />
        </div>
      </div>
    </div>
  );
};
