import { useGlobalContext } from '@/store/globalContext';
import { translateApi } from '@/utils/API/translate';
import { useAPI } from '@/utils/hooks/useAPI';

export const useTranslator = () => {
  const [dispatch, data, isError] = useAPI(translateApi.translate);
  const { setAlertInfo } = useGlobalContext();

  // useEffect(() => {
  //   if (!isError && data) {
  //     data &&
  //       setTranslatedValue &&
  //       setTranslatedValue(data.translated, fieldName);
  //   }
  //   if (isError)
  //     setAlertInfo({
  //       state: 'error',
  //       title: 'Помилка при перекладі',
  //       textInfo: 'Не вдалося виконати переклад. Спробуйте, будь ласка, ще раз',
  //     });
  // }, [isError, data]);

  const handleTranslate = async (text: string, lang: 'en' | 'pl') =>
    await translateApi
      .translate({ text, lang })
      .then((res) => res.data.translated);

  return { handleTranslate };
};
