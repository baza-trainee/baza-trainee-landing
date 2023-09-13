import { SETTINGS } from '@/config/settings';

export const projectValidator = {
  nameOptions: {
    required: 'Введіть назву',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
    },
    maxLength: {
      value: 25,
      message: 'Максимальна довжина поля 25 символів',
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї ]+$/,
      message: 'Введіть коректну назву',
    },
  },

  imgOptions: {
    required: 'Додайте зображення проєкту',
    validate: (v: File[]) => {
      const checkSize = v[0].size <= SETTINGS.fileSizeLimits.partnerLogo;
      const checkType =
        v[0].type === 'image/jpeg' ||
        v[0].type === 'image/png' ||
        v[0].type === 'image/webp';

      return (checkSize && checkType) || 'Виберіть коректне зображення';
    },
  },
};
