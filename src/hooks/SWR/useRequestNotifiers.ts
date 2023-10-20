import { useGlobalContext } from '@/store/globalContext';
import { errorHandler, networkStatusesUk } from '@/utils/errorHandler';

export const useRequestNotifiers = () => {
  const { setAlertInfo } = useGlobalContext();

  const setSuccess = (result: string) => {
    setAlertInfo({
      state: 'success',
      title: 'Успіх',
      textInfo: `Дані успішно ${result}.`,
    });
  };

  const handleRequestError = (err: any) => {
    const { status, response } = err;

    const message =
      response?.data?.message ||
      response?.message ||
      err.message ||
      'Помилка виконання запиту';

    const codeName =
      response?.data?.error?.codeName ||
      response?.statusText ||
      'Невідома помилка';

    errorHandler(err);

    setAlertInfo({
      state: 'error',
      title: networkStatusesUk[status || response?.status || 500],
      textInfo: `Не вдалося виконати запит (${message} / ${codeName})`,
    });
  };

  return { setSuccess, handleRequestError };
};
