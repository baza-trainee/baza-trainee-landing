import { SETTINGS } from '@/config/settings';

export const testimonialValidateOptions = {
  nameUa: {
    required: 'Введіть ім’я',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
    pattern: {
      value: /^[а-яА-ЯҐґЄєІіЇї\s'’-]+$/,
      message: 'Введіть коректне ім’я',
    },
  },

  nameEn: {
    required: 'Введіть ім’я',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
    pattern: {
      value: /^[a-zA-Z\s'’-]+$/,
      message: 'Введіть коректне ім’я',
    },
  },

  namePl: {
    required: 'Введіть ім’я',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s'’-]+$/,
      message: 'Введіть коректне ім’я',
    },
  },

  role: {
    required: 'Введіть ім’я',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s'’-]+$/,
      message: 'Введіть коректну назву спеціалізації',
    },
  },

  reviewUa: {
    required: 'Введіть текст відгуку',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
    },
    maxLength: {
      value: 300,
      message: 'Максимальна довжина поля 300 символів',
    },
    pattern: {
      value: /^[а-яА-ЯҐґЄєІіЇї\s'’-]+$/,
      message: 'Введіть коректний текст',
    },
  },
  reviewEn: {
    required: 'Введіть текст відгуку',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
    },
    maxLength: {
      value: 300,
      message: 'Максимальна довжина поля 300 символів',
    },
    pattern: {
      value: /^[a-zA-Z\s'’-]+$/,
      message: 'Введіть коректний текст',
    },
  },
  reviewPl: {
    required: 'Введіть текст відгуку',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
    },
    maxLength: {
      value: 300,
      message: 'Максимальна довжина поля 300 символів',
    },
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s'’-]+$/,
      message: 'Введіть коректний текст',
    },
  },

  img: {
    validate: (value: any) => {
      if (typeof value === 'object' && value !== null && value.length > 0) {
        const checkSize =
          value[0]?.size <= SETTINGS.fileSizeLimits.testimonialPhoto;
        const checkType =
          value[0]?.type === 'image/jpeg' ||
          value[0]?.type === 'image/png' ||
          value[0]?.type === 'image/webp' ||
          value[0]?.type === 'for-url';
        if (!checkSize) {
          return 'Максимальний розмір зображення 500kb';
        }
        if (!checkType)
          return 'Зображення має бути в форматі .jpg, .png або .webp';
        return true;
      } else {
        return 'Додайте зображення';
      }
    },
  },
};
