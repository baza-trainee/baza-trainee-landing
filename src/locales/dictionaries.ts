import { TDictionary } from '@/types';
import en from './en/main.json';
import pl from './pl/main.json';
import ua from './ua/main.json';

export const dictionaries: {
  en: TDictionary;
  pl: TDictionary;
  ua: TDictionary;
} = {
  en,
  pl,
  ua,
};
/*
export const dictionaries = {
  en: () => import('./en/main.json').then((module) => module.default),
  pl: () => import('./pl/main.json').then((module) => module.default),
  ua: () => import('./ua/main.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'ua' | 'pl' | 'en') =>
  dictionaries[locale]();
*/
