import { SETTINGS } from '@/config/settings';

import { formatBytes } from '@/utils/formatBytes';
import { convertDate } from '@/utils/formatDate';
import { validateImgDimensions } from '@/utils/validateImgDimensions';
import { DateInputRegisterOptions, TTestimonialFormInput } from './types';

const limitDimensions = SETTINGS.imgDimensions.testimonialImg;
const sizeLimit = SETTINGS.fileSizeLimits.testimonialPhoto;

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
    required: 'Введіть назву спецалізації',
    minLength: {
      value: 2,
      message: 'Мінімальна довжина поля 2 символи',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s'’.,:;()!?-]+$/,
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
      value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s\d'’.,:;"()!?-]+$/,
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
      value: /^[a-zA-Z\s\d'’.,:;"()!?-]+$/,
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
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\d'’.,:;"()!?-]+$/,
      message: 'Введіть коректний текст',
    },
  },

  date: {
    required: 'Оберіть дату',
    validate: (_: DateInputRegisterOptions, values: TTestimonialFormInput) => {
      if (!values.date) return;

      const creationDate = convertDate.toMsec(values.date);
      const currentDate = new Date().getTime();

      return (
        creationDate! < currentDate || 'Дата не може бути більшою ніж сьогодні.'
      );
    },
  },

  image: {
    required: 'Додайте зображення',
    validate: (value: DateInputRegisterOptions) => {
      if (Array.isArray(value) && value.length > 0) {
        const file = value[0];

        const checkType = ['image/jpeg', 'image/png', 'image/webp', 'for-url'].includes(file.type);
        if (!checkType)
          return 'Зображення має бути в форматі .jpg, .png або .webp';

        const checkSize = file.size <= sizeLimit;
        if (!checkSize) {
          return `Максимальний розмір зображення ${formatBytes(sizeLimit)}`;
        }

        if (file.size === 0) return true;

        return validateImgDimensions(
          value[0],
          limitDimensions.width,
          limitDimensions.height
        );
      } else {
        return 'Додайте зображення';
      }
    },
  },
};
