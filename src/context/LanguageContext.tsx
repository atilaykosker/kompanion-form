import React, { useContext, useState } from 'react';

interface ILanguageContext {
  language: string;
  setLanguageHandler?: (language: string) => void;
}

const defaultState = {
  language: localStorage.getItem('lang') || 'EN'
};

const LanguageContext = React.createContext<Partial<ILanguageContext>>(defaultState);

export default LanguageContext;

type ProviderProps = {
  children: React.ReactNode;
};
export const LanguageProvider: React.FC<ProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(defaultState.language);

  const setLanguageHandler = (language: string) => {
    setLanguage(language);
    localStorage.setItem('lang', language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguageHandler }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
