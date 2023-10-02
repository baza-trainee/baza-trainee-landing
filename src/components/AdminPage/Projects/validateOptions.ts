import { SETTINGS } from '@/config/settings';

const limitSize = SETTINGS.fileSizeLimits.projectCard;

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
    },
  },
};
