'use client';

import { TranslatorIcon } from '@/components/common/icons';
import { useGlobalContext } from '@/store/globalContext';
import { translateApi } from '@/utils/API/translate';
import { useAPI } from '@/utils/hooks/useAPI';
import { MouseEventHandler, useEffect } from 'react';

interface ITranslatorProps {
  translateValue: string | number;
  setTranslatedValue: ((_data: string, _fieldName: string) => void) | undefined;
  fieldName: string | undefined;
  lang: 'en' | 'pl';
}

export const Translator = ({
  fieldName = '',
  translateValue = '',
  setTranslatedValue,
  lang = 'en',
}: ITranslatorProps) => {
  const [dispatch, data, isError] = useAPI(translateApi.translate);
  const { setAlertInfo } = useGlobalContext();

  useEffect(() => {
    if (!isError && data) {
      data &&
        setTranslatedValue &&
        setTranslatedValue(data.translated, fieldName);
    }
    if (isError)
      setAlertInfo({
        state: 'error',
        title: 'Помилка при перекладі',
        textInfo: 'Не вдалося виконати переклад. Спробуйте, будь ласка, ще раз',
      });
  }, [isError, data, fieldName]);

  const handleTranslate: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    dispatch({ text: String(translateValue), lang });
  };

  return (
    <button
      className="absolute right-[0.5rem] top-0 text-neutral-300"
      onClick={handleTranslate}
    >
      <TranslatorIcon />
    </button>
  );
};
