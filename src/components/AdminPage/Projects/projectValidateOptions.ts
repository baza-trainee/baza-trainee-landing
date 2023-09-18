import { SETTINGS } from '@/config/settings';

export const projectValidateOptions = {
  name: {
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
      value: /^[a-zA-Zа-яА-ЯҐґЄєІіЇї \d]+$/,
      message: 'Введіть коректну назву',
    },
  },

  img: {
    validate: (value: File[]) => {
      const checkSize = value[0]?.size <= SETTINGS.fileSizeLimits.partnerLogo;
      const checkType =
        value[0]?.type === 'image/jpeg' ||
        value[0]?.type === 'image/png' ||
        value[0]?.type === 'image/webp' ||
        value[0]?.type === 'for-url';

      return (checkSize && checkType) || 'Виберіть коректне зображення';
    },
  },
};
