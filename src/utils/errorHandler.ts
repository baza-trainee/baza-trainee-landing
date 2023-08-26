import { AxiosError } from 'axios';

export const networkStatusUk: { [key: number]: string } = {
  400: 'Помилковий запит',
  401: 'Не авторизований',
  402: 'Потрібна оплата',
  403: 'Доступ заборонено',
  404: 'Сторінку не знайдено',
  405: 'Метод не дозволений',
  406: 'Неприйнятно',
  407: 'Необхідна аутентифікація проксі',
  408: 'Час запиту вичерпано',
  409: 'Конфлікт',
  410: 'Вилучено',
  411: 'Необхідна довжина',
  412: 'Попередня умова не виконана',
  413: 'Розмір запиту завеликий',
  414: 'URI запиту завеликий',
  415: 'Тип медіа не підтримується',
  416: 'Запитаний діапазон не задовольняється',
  417: 'Попередня умова не виконана',
  421: 'Некоректний запит',
  422: 'Непередбачена сутність',
  423: 'Заблоковано',
  424: 'Помилка залежності',
  425: 'Недостатньо захищено',
  426: 'Необхідна оновлена версія',
  428: 'Необхідна попередня умова',
  429: 'Забагато запитів',
  431: 'Занадто великі заголовки запиту',
  451: 'Недоступно через обмеження законодавства',
  500: 'Внутрішня помилка сервера',
  501: 'Не реалізовано',
  502: 'Поганий шлюз',
  503: 'Сервіс недоступний',
  504: 'Час шлюзу вичерпано',
  505: 'Версія HTTP не підтримується',
  506: 'Варіант також проводиться перемовини',
  507: 'Перевищено межу зберігання',
  508: 'Виявлено петлю посилань',
  510: 'Не розширено',
  511: 'Необхідна аутентифікація мережі',
};

export const paintedLog = (name: string, data: any) =>
  console.warn(
    `%c${name}`,
    'color: lightgrey; background-color: #8d0200; padding: 4px',
    data
  );

export const errorHandler = (error: any) => {
  if (error instanceof AxiosError) {
    const { response, request, message } = error;
    console.log('Full AxiosError instance >>', error);

    if (response) {
      paintedLog('response err data >>', response?.data);
      paintedLog('response status >>', response?.status);
      paintedLog('response err headers >>', response?.headers);
    } else if (request) {
      paintedLog('request status >>', request?.status);
      paintedLog('request err data >>', request);
    } else {
      paintedLog('err message >>', message);
    }
  } else {
    paintedLog('Unknown error >>', error);
  }
};
