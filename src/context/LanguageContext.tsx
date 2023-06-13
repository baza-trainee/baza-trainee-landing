import { createContext, useState } from 'react';

type LanguageContextType = {
  language: 'ua' | 'en' | 'pl';
  setLanguage: (_language: 'ua' | 'en' | 'pl') => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ua',
  setLanguage: () => {},
});

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<'ua' | 'en' | 'pl'>('ua');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
