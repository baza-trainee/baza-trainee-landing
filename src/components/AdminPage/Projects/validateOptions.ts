import { TFormInput } from './types';

import { SETTINGS } from '@/config/settings';
import { convertDate } from '@/utils/formatDate';

const limitSize = SETTINGS.fileSizeLimits.projectCard;

const commonOptions = {
  minLength: {
    value: 5,
    message: 'Мінімальна довжина поля 5 символів',
  },
  maxLength: {
    value: 100,
    message: 'Максимальна довжина поля 100 символів',
  },
};

export const projectValidateOptions = {
  fieldUk: {
    required: 'Введіть назву',
    ...commonOptions,
    pattern: {
      value: /^[а-яА-ЯҐґЄєІіЇї\s\d'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },

  fieldEn: {
    required: 'Введіть назву',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-Z\s\d'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },

  fieldPl: {
    required: 'Введіть назву',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\d'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },

  img: {
    validate: (
      value: string | number | boolean | File | File[] | undefined
    ) => {
      if (typeof value === 'object' && value !== null && value.length > 0) {
        const file = value[0];

        const checkType = [
          'image/jpeg',
          'image/png',
          'image/webp',
          'for-url',
        ].includes(file.type);
        if (!checkType) return 'Виберіть коректне зображення';

        const checkSize = file.size <= limitSize;
        if (!checkSize) return `Виберіть зображення до ${limitSize}Мб`;

        return true;
      } else {
        return 'Додайте зображення проєкту';
      }
    },
  },

  deployUrl: {
    pattern: {
      value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/,
      message: 'Введіть коректне посилання',
    },
  },

  launchDate: {
    validate: (
      _: string | number | boolean | File | File[] | undefined,
      formValues: TFormInput
    ) => {
      if (!formValues.launchDate) return;

      const creationDate = convertDate.toMsec(formValues.creationDate);
      const launchDate = convertDate.toMsec(formValues.launchDate);

      return creationDate! < launchDate! || 'Оберіть більшу дату';
    },
  },
};
