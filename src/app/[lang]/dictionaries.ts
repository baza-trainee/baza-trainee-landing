const dictionaries: any = {
  en: () =>
    import('../../locales/en/main.json').then((module) => module.default),
  pl: () =>
    import('../../locales/pl/main.json').then((module) => module.default),
  ua: () =>
    import('../../locales/ua/main.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
  await dictionaries[locale]();
