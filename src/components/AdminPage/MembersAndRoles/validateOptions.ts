const commonOptions = {
  minLength: {
    value: 5,
    message: 'Мінімальна довжина поля 5 символів',
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
      message: 'Введіть коректне прізвище та ім’я',
    },
  },

  fieldEn: {
    required: 'Введіть прізвище та ім’я',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-Z\s\d'’-]+$/,
      message: 'Введіть коректне прізвище та ім’я',
    },
  },

  fieldPl: {
    required: 'Введіть прізвище та ім’я',
    ...commonOptions,
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\d'’-]+$/,
      message: 'Введіть коректне прізвище та ім’я',
    },
  },

  linkedinOptions: {
    required: 'Введіть посилання на профіль Linkedin',
    pattern: {
      value: /^(https:\/\/(www\.)?)?linkedin\.com/i,
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
};
