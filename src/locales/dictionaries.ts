import en from './en/main.json';
import pl from './pl/main.json';
import ua from './ua/main.json';

import { TDictionary } from '@/types';

export const dictionaries: {
  en: TDictionary;
  pl: TDictionary;
  ua: TDictionary;
} = {
  en,
  pl,
  ua,
};
