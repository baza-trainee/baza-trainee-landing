'use client';

import { TextInputField } from '@/components/atomic/inputs';
import { useState } from 'react';

export default function Testimonials() {
  const [ua, setUa] = useState('');
  const [en, setEn] = useState('');
  const [pl, setPl] = useState('');

  const translatorHandleEn = (text: string, name: string) => {
    setEn(text);
  };
  const translatorHandlePl = (text: string, name: string) => {
    setPl(text);
  };

  return (
    <div className="flex flex-wrap">
      <TextInputField
        title="Телефон"
        name="contactsDataList phone1"
        inputType="uk"
        errorText={''}
        value={ua}
        onChange={(e) => setUa(e.target.value)}
        placeholder="Введіть телефон"
      />
      <TextInputField
        inputType="en"
        errorText={''}
        name="contactsDataList phone2"
        value={en}
        setTranslatedValue={translatorHandleEn}
        onChange={(e) => setEn(e.target.value)}
        translateValue={ua}
        placeholder="Введіть телефон"
      />
      <TextInputField
        inputType="pl"
        errorText={''}
        value={pl}
        setTranslatedValue={translatorHandlePl}
        translateValue={ua}
        onChange={(e) => setPl(e.target.value)}
        name="contactsDataList phone2"
        placeholder="Введіть телефон"
      />
    </div>
  );
}
