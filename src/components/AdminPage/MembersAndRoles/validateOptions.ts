const commonOptions = {
  minLength: {
    value: 2,
    message: 'Мінімальна довжина поля 2 символи',
  },
  maxLength: {
    value: 75,
    message: 'Максимальна довжина поля 75 символів',
  },
};

export const memberValidateOptions = {
  fieldUk: {
    required: 'Введіть прізвище та ім’я',
    ...commonOptions,
    pattern: {
      value: /^[а-яА-ЯҐґЄєІіЇї\s'’-]+$/,
      message: 'Введіть прізвище та ім’я українською мовою.',
    },
  },

  fieldEn: {
    required: 'Введіть прізвище та ім’я',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-Z\s'’-]+$/,
      message: 'Введіть прізвище та ім’я англійською мовою.',
    },
  },

  fieldPl: {
    required: 'Введіть прізвище та ім’я',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s'’-]+$/,
      message: 'Введіть прізвище та ім’я польською мовою.',
    },
  },

  linkedinOptions: {
    pattern: {
      value: /^(https?:\/\/(www\.)?linkedin\.com\/[^\s/$.?#][^\s]*)$/i,
      message: 'Введіть коректне посилання на профіль Linkedin',
    },
  },
};

export const roleValidateOptions = {
  fieldUk: {
    required: 'Введіть назву',
    ...commonOptions,
    pattern: {
      value: /^[а-яА-ЯҐґЄєІіЇї\s'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },

  fieldEn: {
    required: 'Введіть назву',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-Z\s'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },

  fieldPl: {
    required: 'Введіть назву',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },
};
