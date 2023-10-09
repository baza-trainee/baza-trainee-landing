import { TTestimonialFormInput } from './types';

import { SETTINGS } from '@/config/settings';

import { formatBytes } from '@/utils/formatBytes';
import { convertDate } from '@/utils/formatDate';
import { validateImgDimensions } from '@/utils/validateImgDimensions';

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

  date: {
    required: 'Оберіть дату',
    validate: (
      _:
        | string
        | { ua: string; en: string; pl: string }
        | { ua: string; en: string; pl: string }
        | File
        | File[],
      formValues: TTestimonialFormInput
    ) => {
      if (!formValues.date) return;

      const creationDate = convertDate.toMsec(formValues.date);
      const currentDate = new Date().getTime();

      return (
        creationDate! < currentDate || 'Дата не може бути більшою ніж сьогодні.'
      );
    },
  },

  img: {
    authorImg: {
      validate: (value: any) => {
        if (typeof value === 'object' && value !== null && value.length > 0) {
          const checkSize = value[0]?.size <= sizeLimit;
          const checkType =
            value[0]?.type === 'image/jpeg' ||
            value[0]?.type === 'image/png' ||
            value[0]?.type === 'image/webp' ||
            value[0]?.type === 'for-url';
          if (!checkSize) {
            return `Максимальний розмір зображення ${formatBytes(sizeLimit)}`;
          }
          if (!checkType)
            return 'Зображення має бути в форматі .jpg, .png або .webp';
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
  },
};
